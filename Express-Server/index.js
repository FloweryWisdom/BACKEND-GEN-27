const express = require("express")

const server = express() //anytime the function is called upon the server gets created.

server.use(express.json()) //we have to use this to use json in body 

let koders = []

//list koders
server.get("/koders", (request, response) => {
    response.json(koders)
})

//agregar un koder

server.post("/koders", (request, response) => {
    const newKoder = request.body
    koders.push(newKoder)
    
    response.json({
        message: "Koder added",
        koders
    })
})


//como borrar un koder

server.delete("/koders/:name", (request, response) => {
    const koderExists = koders.find(koder => koder.name === request.params.name)
    if (!koderExists) {
        response.status(404)
        response.json({message: "Koder not found"})
        return
    }
    const newKoders = koders.filter(koder => koder.name !== request.params.name)
    koders = newKoders
    response.json({message: "Koder deleted", koders})
})


server.listen(8080, () => {
    console.log("Server listening on port 8080")
})

/*--- C O M M E N T I N G   T H E   F O L L O W I N G   C O D E ---



//GET /hola --> { "message": "HELLO FROM EXPRESS" }

server.get('/hola', (request, response) => {
    response.writeHead(200, {'Content-Type': 'application/json'})
    response.end(JSON.stringify({ message : 'HELLO FROM EXPRESS' }))
})


server.post('/hola', (request, response) => {
    response.status(201)
    response.json({ message: 'HELLO FROM EXPRESS WITH POST'})
})

// GET /hola/:nombre
// GET /hola/:Charles  --> HOLA CHARLES COMO ESTAS?
// GET /hola/:Diego --> HOLA DIEGO COMO ESTAS?

server.get("/hola/:nombre/saludo/:tipo", (request, response) => {
    const nombre = request.params.nombre
    const tipo = request.params.tipo
    let saludo = "Hola"
    if (tipo === "formal") {
        saludo = "Buenas tardes"
    }
    response.json({ message: `${saludo} ${nombre}`})
})

server.get('/', (request, response) => {
    response.writeHead(200, {'Content-Type': 'text/plain'})
    response.end("HELLO FROM ROOT WITH GET")
})
 
server.listen(8080, () => {
    console.log("Server listening on port 8080")
})

//  /user/@flowerywisdom 
//  /user/:username

//  /user/x
//  /user/y
//  /user/blabla
*/
