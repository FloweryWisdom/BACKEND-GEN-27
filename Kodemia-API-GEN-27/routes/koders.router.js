const express = require("express") // Import express framework into your module 


const router = express.Router()

router.use((request, response, next) => {
    console.log("Middleware de Koders")
    next()
})

// GET /koders
router.get("/", (request, response, next) => {
    console.log("Middleware de GET /koders")
    next()
},
(request, response) => {
    response.json({message: "Get koders"})
})

// common js 
module.exports = router



