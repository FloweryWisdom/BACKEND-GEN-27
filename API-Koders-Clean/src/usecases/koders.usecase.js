const Koder = require("../models/koders.model")

async function getAll() {
    const allKoders = await Koder.find()
    return allKoders
}

async function create (koderData) {
    const newKoder = await Koder.create(koderData)
}