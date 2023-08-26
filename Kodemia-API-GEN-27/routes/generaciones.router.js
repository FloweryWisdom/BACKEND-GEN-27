const express = require("express") // Import express framework into your module 


const router = express.Router()

// GET /koders
router.get("/", (request, response) => {
    response.json({message: "Get generaciones"})
})

// common js 
module.exports = router