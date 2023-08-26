const express = require("express")
const kodersUseCase = require("../usecases/koders.usecase")
const router = express.Router()


// List all koders
router.get("/", (request, response) => {
    const allKoders = kodersUseCase.getAll()

    response.json({
        message: "Get Koders!",
        koders: allKoders
    })
})

// Create a koder 
router.post("/", (request, response) => {
    const {name, email, program, generation} = request.body
    
    kodersUseCase.create(name, email, program, generation)

    response.json({
        message: "Koder added"
    })
})

// Delete a koder 
router.delete("/:name", (request, response) => {
    const {name} = request.params
    kodersUseCase.remove(name)
    response.json({message: "DELETED koder"})
})

module.exports = router