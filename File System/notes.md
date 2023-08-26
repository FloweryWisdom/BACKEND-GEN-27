const fs = require("fs")


const newDirectoryPath = path.join(__dirname, "myNewFolder");



read 
delete

create createjson.js 


const obj = [
    { name: `charles`},
    { name: `mario`},
    { name: `pepe`}
]

how to pass an object into a string 

const objString = JSON.stringify(obj)

fs.writeFileSync(`nombres.json`, obj.String, "utf-8")


create agregaraljson.js

agregar un nuevo nombre en array del JSON 



const fs = require("fs")

const content = fs.readFileSync(`nombres.json`, "utf-8")
const contentAsObj = JSON.parse(content)


console.log(typeof content)

contentAsObj.push({ name: "john"})

fs.writeFileSync("nombres.json", JSON.stringify(contentAsObj))





N O T E S   O N   N O D E . J S   F U N C T I O N S: 


METHOD: fs.existsSync( path )

The fs.existsSync() method is used to synchronously check if a file already exists in the give path or not.It returns a boolean value which indicates the presence of a file. 

PARAMETERS: 

This method accepts a single parameter as mentioned above and described below:

 • path: It holds the path of the file that has to be checked. It can be a String,  Buffer or URL.

RETURN VALUE: 

It returns a boolean value i.e true if the file exists otherwise returns false.



METHOD: fs.readFileSync( path, options )

The fs.existsSync() method is used to synchronously check if a file already exists in the give path or not.It returns a boolean value which indicates the presence of a file. 

PARAMETERS: 

This method accepts a single parameter as mentioned above and described below:

 • path: It holds the path of the file that has to be checked. It can be a String,  Buffer or URL.

RETURN VALUE: 

It returns a boolean value i.e true if the file exists otherwise returns false.



