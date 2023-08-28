const express = require("express")
const kodersUseCase = require("../usecases/koders.usecase")
const router = express.Router()


// List all koders -- GET
router.get("/", async (request, response) => {
    const allKoders = await kodersUseCase.getAll()

    response.json({
        message: "Koders List:",
        data: {
            koders: allKoders
        }
    })
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
        response.status(500)
        response.json({
            message: "Something went wrong",
            error: error
        })
    }

})

// List koder by id -- GET
router.get("/:id", async (request, response) => {
    const {id} = request.params
    koder = await kodersUseCase.getById(id)
    if (!koder) {
        return response.status(404).json({message: "Koder not found."})
    }
    response.json({
        message: `Koder ${id}`,
        data: {koder} })
})

module.exports = router

