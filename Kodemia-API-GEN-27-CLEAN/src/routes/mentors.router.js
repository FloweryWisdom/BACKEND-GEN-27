const express = require("express")
const mentorsUseCase = require("../usecases/mentors.usecases")
const router = express.Router()

// List all mentors
router.get("/", (request, response) => {
    const allMentors = mentorsUseCase.getAll()

    response.json({
        message: "Get Mentors!",
        mentors: allMentors
    })
})

// Create a mentor 
router.post("/", (request, response) => {
    const {name, email} = request.body

    mentorsUseCase.create(name, email)

    response.json({
        message: "Mentor added."
    })
})

// Delete a mentor
router.delete("/:name", (request, response) => {
    const {name} = request.params
    mentorsUseCase.remove(name)
    response.json({message: "Deleted mentor."})
})

module.exports = router