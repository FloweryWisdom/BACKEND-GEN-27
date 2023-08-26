const http = require("node:http")

const server = http.createServer((request, response) => {
    const method = request.method
    const url = request.url
    
    //GET localhost:8080/hola/bla/bla

    if (method === "GET" && url === "/hello") {
        response.writeHead(200, {"Content-Type": "text/html"})
        response.end("<h2>Hello from node with GET</h2>")
    } else if (method === "POST" && url === "/hello") {
        response.writeHead(201, {"Content-Type": "text/html"})
        response.end("<h2> Hello from node with POST! </h2>")
    } else if (method === "GET" && url === "/") {
        response.writeHead(201, {"Content-Type": "text/html"})
        response.end("<h2> Hello from root with GET</h2>")
    } else {
        response.writeHead(404, {"Content-Type": "text/html"})
        response.end("<h2> 404 error: not found.</h2>")
    }  
})


server.listen(8080, () => {
    console.log('server listening on port 8080')
})



/* switch (method) {
    case "GET":
        response.writeHead(200, { "X-me": "Flowery", "Content-Type": "text/html"})
        response.end("<h2> Hello from node with GET! </h2>")
        break

    case "POST":
        response.writeHead(201, {"Content-Type": "text/html"})
        response.end("<h2> Hello from node with POST! </h2>")
        break

    default:
        response.writeHead(201, {"Content-Type": "text/html"})
        response.end("<h2> Can't find anything for this method! </h2>")
        break
}        */