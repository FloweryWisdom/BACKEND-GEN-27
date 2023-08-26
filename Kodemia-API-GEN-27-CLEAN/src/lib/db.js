// Database:

const fs = require("fs")
const filePath = "db.json"

const defaultDB = {
    koders: [],
    mentors: [],
    generations: []
}


function createIfNotExists() {
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, JSON.stringify(defaultDB), "utf-8")
    }
}

function getData() {
    return JSON.parse(fs.readFileSync(filePath, "utf-8"))
    
}

function updateData(newData) {
    fs.writeFileSync(filePath, JSON.stringify(newData), "utf-8")
}

module.exports = {
    createIfNotExists,
    getData,
    updateData
}

// Hot Tip: If the property and value are the same name, you can just use name only.