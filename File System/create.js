const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../hello.txt");

fs.writeFileSync(filePath, "hello from node", "utf-8");
