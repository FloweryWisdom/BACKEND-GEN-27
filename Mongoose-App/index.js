const mongoose = require("mongoose")

//Schema
// The schema defines the form of the document
const koderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLenght: 2,
    maxLenght: 50,
  },
  age: {
    type: Number,
    required: true,
    min: 13,
    max: 200
  }
})

// Model
// Document generator based on/according to Schema
const Koder = mongoose.model(`koders`, koderSchema)

async function main() {
  await mongoose.connect(
    "add your connection string into your application code"
  )
  
  Koder.create({
    name: "Sonic",
    age: 100
  })
  
  const allKoders = await Koder.find()

  console.log("all: ", allKoders)
}

main()
  .then(() => console.log("Fulfilled: the operation was completed successfully"))
  .catch(() => console.log("Rejected: the operation failed"))