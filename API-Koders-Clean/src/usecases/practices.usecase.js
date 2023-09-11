const practiceModel = require("../models/practices.model")
const mongoose = require("mongoose")
const createError = require("http-errors")
const koderModel = require("../models/koders.model")

// GET /practices 
async function getAll(titleFilter) {
    const filter = {}
    const allPractices = await practiceModel.find().populate(`koder`)
    return allPractices
}

// POST /practices 
async function create(practiceData) {
    // Validate whether id is has a valid id format
    if (!mongoose.isValidObjectId(practiceData.koder)) {
        throw new createError(400, "Invalid Koder ID")
    }

    // Validate koder's existence in the database
    const koder = await koderModel.findById(practiceData.koder)

    if (!koder) {
        throw new createError(404, "Koder not found")
    }
    
    return await practiceModel.create(practiceData)
}

// PATCH /practices/:id

async function updatePracticeData(id, updateData) {
    if (!mongoose.isValidObjectId(id)) {
        throw new createError(400, "Invalid Practice ID")
    }

    if (updateData.koder) {
        //throw new createError(403, "This is forbidden")
        if (!mongoose.isValidObjectId(updateData.koder)) {
            throw new createError(400, "Invalid Koder ID") 
        }
        const koder = await koderModel.findById(updateData.koder)
        if (!koder) {
            throw new createError(404, "Koder not found.")
        }
    }

    updateData.updated = new Date()

    const modifiedPractice = await practiceModel.findByIdAndUpdate(id, updateData, {
        new: true,
        runValidators: true
    })

    if (!modifiedPractice) {
        throw new createError(404, "Practice not found")
    }

    return modifiedPractice
}

// GET/practice/:id

async function getById(id) {
    if (!mongoose.isValidObjectId(id)) {
        throw new createError(400, "Invalid Practice ID")
    }

    const practice = await practiceModel.findById(id)

    if (!practice) {
        throw new createError(404, "Practice not found")
    }

    return practice
}

async function deleteById(id) {
    if (!mongoose.isValidObjectId(id)) {
        throw new createError(400, "Invalid Practice ID")
    }

    const practiceDeleted = await practiceModel.findByIdAndDelete(id)

    if (!practiceDeleted) {
        throw new createError(404, "Practice not found")
    }
    
    return practiceDeleted
}

module.exports = {
    getAll, 
    create,
    updatePracticeData,
    getById,
    deleteById
}