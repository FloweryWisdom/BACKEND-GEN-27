const express = require("express")
const fs = require("fs")
const path = require("path")

const server = express() // Create an instance of the Express server
server.use(express.json()) // Enable parsing JSON data in request bodies 

const databasePath = path.join(__dirname, "koders.json") // Define file path to your JSON database

// Function to read the existing data from the database file
function readDataBase() {
    if (fs.existsSync(databasePath)) {
        const content = fs.readFileSync(databasePath, "utf-8")
        return JSON.parse(content)
    } else {
        return []
    }
}

// Function to write data to the database file 
function writeDataBase(data) {
    fs.writeFileSync(databasePath, JSON.stringify(data, null, 2), "utf-8")
}

let koders = readDataBase() // Initialize koders array with existing data from the database

// L I S T   K O D E R S
server.get("/koders", (request, response) => {
    const koders = readDataBase()
    response.json(koders)
})

// A D D   N E W   K O D E R 

server.post("/koders/:name", (request, response) => {
    const newKoderName = request.params.name
    const newKoder = { name: newKoderName}
    koders.push(newKoder) // Add the new koder to the array
    writeDataBase(koders) // Update the database with the new koders array
    
    response.json({
        message: "Koder added",
        koders
    })
})

// D E L E T E   A   K O D E R

server.delete("/koders/:name", (request, response) => {
    const nameToRemove = request.params.name
    const koderExists = koders.find(koder => koder.name === request.params.name)
    
    if (!koderExists) {
        response.status(404).json({message: "Koder not found"})
        return
    }
    
    const newKoders = koders.filter(koder => koder.name !== nameToRemove)
    koders = newKoders // Update the koders array
    writeDataBase(koders) // Update the database with the new koders array

    response.json({message: "Koder deleted", koders})
})

// D E L E T E   A L L   K O D E R S 

server.delete("/koders", (request, response) => {
    koders = [] // Clear the koders array
    writeDataBase(koders) // Update the database with the empty koders array
    response.json({message: "All koders deleted"})
})

// S T A R T   T H E   S E R V E R   A N D   L I S T E N   O N   P O R T   8 0 8 0
server.listen(8080, () => {
    console.log("Server listening on port 8080")
})
