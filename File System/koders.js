const fs = require('fs')
const path = require('path')

const databasePath = path.join(__dirname, 'koders.json')

function readDatabase() {
  if (fs.existsSync(databasePath)) {
    const content = fs.readFileSync(databasePath, 'utf8')
    return JSON.parse(content)
  } else {
    return []
  }
}

function writeDatabase(data) {
  fs.writeFileSync(databasePath, JSON.stringify(data, null, 2), 'utf8')
}

function addKoder(name) {
  const koders = readDatabase()
  koders.push({ name })
  writeDatabase(koders)
  console.log(`Added koder: ${name}`)
}

function listKoders() {
  const koders = readDatabase()
  if (koders.length === 0) {
    console.log('No koders found.')
  } else {
    console.log('Koders:')
    koders.forEach((koder, index) => {
      console.log(`{name: \`${koder.name}\`}`)
    })
  }
}

function deleteKoder(name) {
  const koders = readDatabase()
  const updatedKoders = koders.filter(koder => koder.name !== name)
  writeDatabase(updatedKoders)
  console.log(`Deleted koder: ${name}`)
}

function resetKoders() {
  writeDatabase([])
  console.log('All koders have been reset.')
}

const command = process.argv[2]

switch (command) {
  case 'add':
    const newName = process.argv[3]
    addKoder(newName)
    break
  case 'ls':
    listKoders()
    break
  case 'rm':
    const nameToRemove = process.argv[3]
    deleteKoder(nameToRemove)
    break
  case 'reset':
    resetKoders()
    break
  default:
    console.log('Invalid command. Available commands: add, ls, rm, reset')
    break
}

