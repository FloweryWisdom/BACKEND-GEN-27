const number = parseInt(process.argv[2])

if (isNaN(number)) {
  console.error("Invalid input: Please provide a valid number.")
  process.exit(1)
}

const fizzBuzz = (number) => {
  for (let i = 1; i <= number; i++) {
    const fizz = i % 3 === 0
    const buzz = i % 5 === 0
    console.log(
      `${i}-${fizz && buzz ? "FizzBuzz" : fizz ? "Fizz" : buzz ? "Buzz" : ""}`
    )
  }
}

fizzBuzz(number)
