const express = require("express")
const kodersUseCase = require("../usecases/koders.usecase")
const router = express.Router()


// List all koders -- GET
router.get("/", async (request, response) => {
    try {
        const allKoders = await kodersUseCase.getAll()
    
        response.json({
            message: "Koders List:",
            data: {
                koders: allKoders
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

// Create a koder -- POST
router.post("/", async (request, response) => {
    try {
        const koderData = request.body
        const newKoder = await kodersUseCase.create(koderData)
        
        response.status(201)
        response.json({
            message: "Koder Created",
            data: {
                koder: newKoder
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


// Update the information of a koder -- PATCH
router.patch("/:id", async (request, response) => {
    try {
        const {id} = request.params
        const updatedData = request.body

        const modifiedKoder = await kodersUseCase.updateKoderData(id, updatedData)

        response.json({
            message: "Koder Data Updated",
            data: {
                koder: modifiedKoder
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


// List koder by id -- GET
router.get("/:id", async (request, response) => {
    try {
        const {id} = request.params
        koder = await kodersUseCase.getById(id)
        if (!koder) {
            return response.status(404).json({message: "Koder not found."})
        }
        response.json({
            message: `Search by ID result: `,
            data: {koder} })

    } catch (error) {
        response.status(error.status || 500)
        response.json({
            message: "Something went wrong.",
            error: error.message
        })
    }

})



router.delete("/:id", async (request, response) => {  
    try {
        const {id} = request.params
        const koderDeleted = await kodersUseCase.deleteById(id)
        response.json({
        message: "Koder Deleted",
        data: {
            koder: koderDeleted
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
