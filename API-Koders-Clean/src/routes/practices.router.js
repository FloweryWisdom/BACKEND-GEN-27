const express = require("express")
const practiceUseCase = require("../usecases/practices.usecase")
const router = express.Router()

// List all practices -- GET
router.get("/", async (request, response) => {
    try {
        const titleFilter = request.query.title
        const allPractices = await practiceUseCase.getAll(titleFilter)

        response.json({
            message: "Practices List:",
            data: {
                practices: allPractices
            }
        })
    } catch (error) {
        response.status(500)
        response.json({
            message: "Something went wrong",
            error: error.message
        })
    }
})


// Create a practice -- POST
router.post("/", async (request, response) => {
    try {
        const practiceData = request.body
        const newPractice = await practiceUseCase.create(practiceData)

        response.status(201)
        response.json({
            message: "Practice Created",
            data: {
                practice: newPractice
            }
        })
    } catch (error) {
        const status = error.name === "ValidationError" ? 400 : 500
        response.status(error.status || status)
        response.json({
            message: "Something went wrong",
            error: error.message
        })
    }
})

// Update the information of a practice -- PATCH
router.patch("/:id", async (request, response) => {
    try {
        const {id} = request.params
        const updateData = request.body

        const modifiedPractice = await practiceUseCase.updatePracticeData(id, updateData)

        response.json({
            message: "Practice Data Updated",
            data: {
                practice: modifiedPractice
            }
        })

    } catch (error) {
        const status = error.name === "ValidationError" ? 400 : 500
        response.status(error.status || status)
        response.json({
            message: "Something went wrong.",
            error: error.message 
        })
    }
})


// List practice by id -- GET 
router.get("/:id", async (request, response) => {
    try {
        const {id} = request.params
        practice = await practiceUseCase.getById(id)
        if (!practice) {
            return response.status(404).json({message: "Practice not found"})
        }
        response.json({
            message: "Search by ID result: ",
            data: {practice}
        })
    } catch (error) {
        response.status(error.status || 500)
        response.json({
            message: "Something went wrong.",
            error: error.message
        })
    }
})


// Delete a practice -- DELETE 
router.delete("/:id", async (request, response) => {
    try {
        const {id} = request.params 
        const practiceDeleted = await practiceUseCase.deleteById(id)
        response.json({
            message: "Practice Deleted",
            data: {
                practice: practiceDeleted
            }
        })
    } catch (error) {
      response.status(error.status || 500)
      response.json({
        message: "Something went wrong",
        error: error.message
      })
    }
})

module.exports = router