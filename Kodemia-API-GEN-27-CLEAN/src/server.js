// The goal of "server.js" is to describe and mount our server. **PLEASE LOOK UP MORE INFO ON "MOUNTING SERVER"

const express = require("express")
const kodersRouter = require("./routes/koders.router")
const mentorsRouter = require("./routes/mentors.router")

const app = express() // "app" is the conventional naming of the express server

app.use(express.json())
app.use("/koders", kodersRouter)
app.use("/mentors", mentorsRouter)

app.get("/", (request, response) => {
    response.json({message: "API Kodemia Clean"})
})

module.exports = app
