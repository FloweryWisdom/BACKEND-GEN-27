const bcryptjs = require("bcryptjs")


const saltRounds = 10

//encrypt is a function that receives a text and returns a hash
function encrypt (text) {
  return bcryptjs.hashSync(text, saltRounds)
}

//verify is a function that receives a hash and a text and returns a boolean
function verify(hash, text) {
  return bcryptjs.compareSync(text, hash)
}

module.exports = {
  encrypt,
  verify
}
