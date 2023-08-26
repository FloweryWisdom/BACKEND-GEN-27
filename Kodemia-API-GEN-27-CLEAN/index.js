// Our "index.js" file will be in charge of launching our server and start the application 

const server = require("./src/server")
const db = require("./src/lib/db")

db.createIfNotExists()

server.listen(8080, () => {
    console.log("Server listening on port 8080")
})