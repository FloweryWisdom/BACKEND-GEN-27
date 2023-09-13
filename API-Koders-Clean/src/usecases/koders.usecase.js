const koderModel = require("../models/koders.model")
const mongoose = require("mongoose")
const createError = require("http-errors")
const bcrypt = require("../lib/bcrypt")

// GET /koders
async function getAll() {
    const allKoders = await koderModel.find()
    return allKoders
}

// POST /koders
async function create(koderData) {
    //validate if "koder" exists
    const existingKoder = await koderModel.findOne({email: koderData.email})

    if (existingKoder) {
        throw new createError(412, "Email already registered")
    }

    const passwordRegex = new RegExp(`^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$`)
    if (!passwordRegex.test(koderData.password)) {
        throw new createError(400, "Password must have at least 8 characters, one uppercase, one lowercase, one number and one special character")
    }
    
    
    //save encrypted password
    koderData.password = bcrypt.encrypt(koderData.password)

    return newKoder = await koderModel.create(koderData)
}

// PATCH /koders/:id
async function updateKoderData(id, updatedData) { 
    if (!mongoose.isValidObjectId(id)) {
        throw new createError(400, "Invalid Koder ID")
    }
 
    updatedData.updated = new Date()

    const modifiedKoder = await koderModel.findByIdAndUpdate(id, updatedData,  { 
        new: true,
        runValidators: true 
    })

    if(!modifiedKoder) {
        throw new createError(404, "Koder not found")
    }

    return modifiedKoder
}


// GET /koders/:id
async function getById(id) {
    if (!mongoose.isValidObjectId(id)) {
        //throw new Error("Invalid Koder ID")
        throw new createError(400, "Invalid Koder ID")
    }

    const koder = await koderModel.findById(id)

    if (!koder) {
        throw new createError(404, "Koder not found")
    }
    
    return koder
}

async function deleteById(id) {
    if (!mongoose.isValidObjectId(id)) {
        throw new createError(400, "Invalid Koder ID")
    }

    const koderDeleted = await koderModel.findByIdAndDelete(id)

    if (!koderDeleted) {
        throw new createError(404, "Koder not found")
    }


    return koderDeleted
}



module.exports = {
    getAll,
    create,
    updateKoderData,
    getById,
    deleteById
}
