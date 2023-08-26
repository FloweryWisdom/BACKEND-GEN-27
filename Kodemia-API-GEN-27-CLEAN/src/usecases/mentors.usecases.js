const db = require("../lib/db")

function create(name, email) {
    const newMentor = {
        name,
        email
    }
    const data = db.getData()
    data.mentors.push(newMentor)
    db.updateData(data)
    return
}

function remove(name) {
    const data = db.getData()
    const newMentorsList = data.mentors.filter((mentor) => mentor.name !== name)
    data.mentors = newMentorsList
    db.updateData(data)
    return
}

function getAll() {
    const data = db.getData()
    return data.mentors
}

module.exports = {
    create,
    remove,
    getAll
}