const fs = require("fs")

const content = fs.readFileSync(`hello.txt`,`utf-8`)
console.log(`Content: `, content)