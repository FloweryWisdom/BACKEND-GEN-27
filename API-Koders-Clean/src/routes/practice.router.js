const express = require("express")
const practiceUseCase = require("../usecases/practice.usecase")
const router = express.Router()

// List all practices -- GET
router.get("/", async (request, response) => {
    try {
        const allPractices = await practiceUseCase.getAll()

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
        response.status(status)
        response.json({
            message: "Something went wrong",
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
        messge: "Something went wrong",
        error: error.message
      })
    }
})

module.exports = router