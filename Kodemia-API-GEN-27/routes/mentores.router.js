const express = require("express")

const router = express.Router()

router.use((request, response, next) => {
    console.log("Middleware de Mentores")
    next()
} )

router.get("/", (request, response) => {
    response.json({message: "Get mentores"})
})

module.exports = router