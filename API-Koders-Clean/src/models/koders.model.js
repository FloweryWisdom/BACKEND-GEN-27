const mongoose = require("mongoose")

const koderSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 50,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 50,
    trim: true
  },
  email: {
    type: String,
    match: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    trim: true
  },
  program: {
    type: String,
    enum: ["javascript", "python", "ios"],
    required: true,
    trim: true
  },
  created: {
    type: Date, 
    required: true,
    default: new Date(),
  },
  updated: {
    type: Date,
    required: true,
    default: new Date()
  }
})



module.exports = mongoose.model("koder", koderSchema)