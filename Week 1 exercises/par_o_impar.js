const number = parseInt(process.argv[2])

const checkOddOrEven = (number) => {
  if (isNaN(number) || !Number.isInteger(number)) {
    console.error("Error: Invalid input. Please provide a valid whole number.")
    process.exit(1)
  }

  const message = number % 2 === 0 
    ? `${number} is even.` 
    : `${number} is odd.`
  console.log(message)
}

checkOddOrEven(number)


//absolute that start at the root level

//relativa bases on where we are

//we can run node from any place in my computer as long as I have the direcotry correct
// ex: ~/Kodemia/Backend/par_o_impar.js