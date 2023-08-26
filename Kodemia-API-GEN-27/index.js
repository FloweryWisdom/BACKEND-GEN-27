const express = require("express")

const kodersRouter = require("./routes/koders.router")
const mentoresRouter = require("./routes/mentores.router")
const generacionesRouter = require("./routes/generaciones.router")
const server = express() // --> convetionally the variable is named "app"

server.use(express.json()) // Enable parsing JSON data in request bodies

server.use((request, response, next) => {
    console.log("Application middleware")
    request.pepito = "perez"
    next()
})

server.use((request, response, next) => {
    console.log("Application middleware 2")
    next()
}, (request, response, next) => {
    console.log("Application middleware 3")
    next()
})

 

server.use("/koders", kodersRouter)
server.use("/mentores", mentoresRouter)
server.use("/generaciones", generacionesRouter)

// E N D P O I N T
server.get("/", (request, response) => {
    response.json({
        message: "Kodemia API v27", valorRandom: request.pepito })
})

server.listen(8080, () => {
    console.log("Server listening on port 8080")
})

