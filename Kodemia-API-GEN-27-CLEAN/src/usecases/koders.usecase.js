// 
const db = require("../lib/db")

function create(name, email, program, generation) {
    const newKoder = {
        name,
        email,
        program,
        generation
    }
    const data = db.getData()
    data.koders.push(newKoder)
    db.updateData(data)
    return
}


function remove(name) {
    const data = db.getData()
    const newKodersList = data.koders.filter((koder) => koder.name !== name)
    data.koders = newKodersList
    db.updateData(data)
    return

}

function getAll() {
    const data = db.getData()
    return data.koders
}

module.exports = {
    create,
    remove,
    getAll
}
