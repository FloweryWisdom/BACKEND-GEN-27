const prompt = require("prompt-sync")()

const names = []


//while nos permite correr el prompt hasta que un string vacio se ingresdo con "enter" ejecutando el break.
while (true) {
  const name = prompt("Inserta nombre (o presiona Enter para terminar): ")
  if (name === "") {
    break;
  }
  names.push(name)
}

console.log(`Numero de nombres: ${names.length}`)
console.log(`Nombres: ${names.join(", ")}`) //"join" une nuestro array en un string y ", " como seperador entre values

//esta funcion evalua cada nombre con cada nombre dentro del array y determina si hay valor repetido
const nameCount = {}
names.forEach((name) => {
  nameCount[name] = (nameCount[name] || 0) + 1
})

//esta imprime el nombre y el numero de veces repetido
console.log("Nombres repetido:")
for (const name in nameCount) {
  if (nameCount[name] > 1) {
    console.log(`${name}: ${nameCount[name]} veces`)
  }
}

//usamos el acumulador y currentValue del "reduce" method para evaluar y obtener el valor mas largo en el array
const longestName = names.reduce((longest, name) => (name.length > longest.length ? name : longest), "")
console.log(`Nombre mas largo: ${longestName}`)
//usamos el acumulador y currentValue del "reduce" method para evaluar y obtener el valor mas corto en el array
const shortestName = names.reduce((shortest, name) => (name.length < shortest.length || shortest === "" ? name : shortest), "")
console.log(`Nombre mas corto: ${shortestName}`)