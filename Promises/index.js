/* fetch("https://api.openai.com")
    .then((response) => {
        console.log("resolved: ", response)
        return response.json()
    })
    .then((responseInJSON) => {
        console.log("responseInJSON: ", responseInJSON)
    })
    .catch(() => {
        console.log("The task could not be completed.")
    })
console.log("Hello.")
// "then" is executed when promise moves from it's initial state (pending) to resolved.  */



// P R O M I S E S   W I T H   A S Y N C   &   A W A I T

async function principle () {
    const response = await fetch("https://api.openai.com")
    const responseInJSON = await response.json()
    console.log("responseInJSON", responseInJSON)
    console.log("Hello mfer.")
}

principle()
    .then(() => console.log("Resolved"))
    .catch(() => console.log("Rejected"))

