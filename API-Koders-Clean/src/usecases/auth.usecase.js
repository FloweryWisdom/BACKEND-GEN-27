const koderModel = require(`../models/koders.model`)
const createError = require(`http-errors`)
const jwt = require(`../lib/jwt`)
const bcrypt = require(`../lib/bcrypt`)

async function login(email, password) {
  const koder = await koderModel.findOne({ email })

  if (!koder) {
    throw new createError(401, `Email or password incorrect`)
  }
 
  const isValidPassword = bcrypt.verify(koder.password, password)

  if (!isValidPassword) {
    throw new createError(401, `Email or password incorrect`)
  } 

  //generate token
  const token = jwt.sign({ id: koder._id})
  return token

}

module.exports = {
  login
}