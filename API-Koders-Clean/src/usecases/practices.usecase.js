const practiceModel = require("../models/practices.model")
const mongoose = require("mongoose")
const createError = require("http-errors")

// GET /practices 
async function getAll() {
    const allPractices = await practiceModel.find()
    return allPractices
}

// POST /practices 
async function create(practiceData) {
    const newPractice = await practiceModel.create(practiceData)
    return newPractice
}

// PATCH /practices/:id

async function updatePracticeData(id, updateData) {
    if (!mongoose.isValidObjectId(id)) {
        throw new createError(400, "Invalid Practice ID")
    }
    const modifiedPractice = await practiceModel.findByIdAndUpdate(id, updateData, {new: true})

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