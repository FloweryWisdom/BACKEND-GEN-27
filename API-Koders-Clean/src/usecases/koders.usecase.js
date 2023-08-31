const koderModel = require("../models/koders.model")
const mongoose = require("mongoose")
const createError = require("http-errors")

// GET /koders
async function getAll() {
    const allKoders = await koderModel.find()
    return allKoders
}

// POST /koders
async function create(koderData) {
   
   
// COMMENTED THE BELOW SECTION OF CODE FOR NOW TO CHECK ON VALIDATION PROCESS USING MONGOOSE LATER.
    /*  // This creates a new koder object in memory.
    const newKoder = await new Koder(koderData)

    // We validate the koder data type.
    const validationError = newKoder.validateSync()
    console.log("Koder is valid.", validationError)

    // This throws an error if invalid.
    if (validationError) {
        throw new Error("Invalid Koder")
    }

    // Saves files if data type valid.
    await newKoder.save() */

    const newKoder = await koderModel.create(koderData)
    return newKoder
}

// PATCH /koders/:id
async function updateKoderData(id, updatedData) { 
    if (!mongoose.isValidObjectId(id)) {
        throw new createError(400, "Invalid Koder ID")
    }
    const modifiedKoder = await koderModel.findByIdAndUpdate(id, updatedData,  { new: true })

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
