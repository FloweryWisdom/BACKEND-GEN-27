const koders = [
    {
      id: 1,
      first_name: "Laurella",
      last_name: "Tupper",
      age: 42,
      email: "ltupper0@123-reg.co.uk",
      generation: 2,
    },
    {
      id: 2,
      first_name: "Daron",
      last_name: "Cockle",
      age: 18,
      email: "dcockle1@salon.com",
      generation: 12,
    },
    {
      id: 3,
      first_name: "Marleen",
      last_name: "Eller",
      age: 18,
      email: "meller2@bloglovin.com",
      generation: 11,
    },
    {
      id: 4,
      first_name: "Worthington",
      last_name: "Vlach",
      age: 16,
      email: "wvlach3@taobao.com",
      generation: 22,
    },
    {
      id: 5,
      first_name: "Wendell",
      last_name: "Artiss",
      age: 17,
      email: "wartiss4@microsoft.com",
      generation: 12,
    },
    {
      id: 6,
      first_name: "Kin",
      last_name: "Pala",
      age: 55,
      email: "kpala5@photobucket.com",
      generation: 6,
    },
    {
      id: 7,
      first_name: "Lucio",
      last_name: "Bagshawe",
      age: 56,
      email: "lbagshawe6@behance.net",
      generation: 15,
    },
    {
      id: 8,
      first_name: "Reggy",
      last_name: "Bullingham",
      age: 30,
      email: "rbullingham7@fda.gov",
      generation: 2,
    },
    {
      id: 9,
      first_name: "Clarinda",
      last_name: "Steaning",
      age: 52,
      email: "csteaning8@liveinternet.ru",
      generation: 22,
    },
    {
      id: 10,
      first_name: "Karolina",
      last_name: "Leblanc",
      age: 59,
      email: "kleblanc9@tiny.cc",
      generation: 6,
    },
    {
      id: 11,
      first_name: "Colet",
      last_name: "McCuffie",
      age: 60,
      email: "cmccuffiea@dyndns.org",
      generation: 24,
    },
    {
      id: 12,
      first_name: "Kimble",
      last_name: "Dovermann",
      age: 54,
      email: "kdovermannb@gmail.com",
      generation: 3,
    },
    {
      id: 13,
      first_name: "Janessa",
      last_name: "Illing",
      age: 19,
      email: "jillingc@hubpages.com",
      generation: 6,
    },
    {
      id: 14,
      first_name: "Lani",
      last_name: "Ricardo",
      age: 44,
      email: "lricardod@opensource.org",
      generation: 6,
    },
    {
      id: 15,
      first_name: "Caye",
      last_name: "Cowmeadow",
      age: 16,
      email: "ccowmeadowe@narod.ru",
      generation: 11,
    },
    {
      id: 16,
      first_name: "Nataline",
      last_name: "MacInnes",
      age: 28,
      email: "nmacinnesf@gmail.com",
      generation: 13,
    },
    {
      id: 17,
      first_name: "Dayna",
      last_name: "Nimmo",
      age: 17,
      email: "dnimmog@infoseek.co.jp",
      generation: 12,
    },
    {
      id: 18,
      first_name: "Sheff",
      last_name: "Normanville",
      age: 23,
      email: "snormanvilleh@cisco.com",
      generation: 13,
    },
    {
      id: 19,
      first_name: "Olivie",
      last_name: "Bladesmith",
      age: 27,
      email: "obladesmithi@newyorker.com",
      generation: 6,
    },
    {
      id: 20,
      first_name: "Ida",
      last_name: "Jewess",
      age: 50,
      email: "ijewessj@ca.gov",
      generation: 9,
    },
  ];
  const koderss = []

  // forEach /*forEach never returns anything*/
  // Quiero enviar un correo a cada koder
  
 /*  function enviarCorreo(email) {
    console.log("Correo enviado a", email)
  }

  koders.forEach((koder, index) => {
    enviarCorreo(koder.email)
  })   */       

  // map /*returns new array with with the results of calling a provided callback function(it does not alter the original array*/
  // Necesito Obtener el nombre completo de cada alumno en una sola cadena
  
  /* const completeNames = koders.map((koder, index) => `${koder.first_name} ${koder.last_name}`)
   

  console.log(completeNames)
 */
  // filter
  // quiero saber cuantos koders son menores de edad
 /*  const filterByAge = koders.filter((koder, index) => {
    const isUnderAge = koder.age < 18
    return isUnderAge
  }).map(koder => `${koder.first_name} ${koder.last_name}`) // //chaining (linking functions with "." after the end of a function)
  
  console.log(filterByAge)
 */
  // find
  // Quiero encontrar al koder con id 15

/*   const koder15 = koders.find(koder => koder.id === 15)
  console.log(koder15)
   */
  // some
  //The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.
  // Quiero saber si algunos de los koders tienen correo con gmail
 /*  const algunoTieneGmail = koders.some(koder => koder.email.includes("@gmail"))
  console.log("gmail: ", algunoTieneGmail)
   */
  // every
  //The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
  // Quiero saber si todos los koders son mayores de edad
  
 /*  const todosMayores = koders.every(koder => koder.age >= 18)
  console.log("vamos por chelas?", todosMayores)
 */
  // reduce
  // Quiero saber la cuenta de koders por generación

/*   const conteoPorGeneracion = koders.reduce((mapaDeConteo, koder) => {
    const generacion = `g${koder.generation}`
    if (mapaDeConteo[generacion]){
        mapaDeConteo[generacion] += 1
    } else {mapaDeConteo[generacion] = 1
    }
    return mapaDeConteo
  }, {});

  console.log("Conteo: ", conteoPorGeneracion)
 */
/* 
  const allNames = koders.reduce((anterior, valorActual, index)=>{
    return anterior + " " + valorActual.first_name + valorActual.last_name
  }, ""); */




/*   TAREA: Hacer todos los ejericisios anteriores con reduce method */


// 1. QUIERO ENVIAR UN CORREO A CADA KODER (forEach):

function enviarCorreo(email) {
  console.log("Correo enviado a", email)
}

koders.reduce((_, koder) => {
  enviarCorreo(koder.email)
}, null)

// 2. NECESITO OBTENER EL NOMBRE COMPLETO DE CADA ALUMNO EN UNA SOLA CADENA (map):

const completeNames = koders.reduce((accu, currentKoder)=> {
  const fullName = `${currentKoder.first_name} ${currentKoder.last_name}`
  accu.push(fullName)
  return accu
}, [])

console.log(completeNames)

// 3. QUIERO SABER CUANTOS KODERS SON MENORES DE EDAD (filter): 

const underAgeStudents = koders.reduce((accu, currentKoder)=> {
 if (currentKoder.age < 18){
  accu.push(currentKoder)
 }
 return accu
}, [])

console.log(underAgeStudents)

// 4. QUIERON ENCONTRAR AL KODER CON EL ID NUMERO 15 (find):

const studentById = koders.reduce((foundStudent, currentKoder) => {
  return currentKoder.id === 15 ? currentKoder : foundStudent
}, null)

console.log(studentById)

// 5. QUIERO SABER SI ALGUNO DE LOS KODERS TIENE CORREO CON GMAIL (some):

const studentsWithGmail = koders.reduce((accu, currentKoder) => {
  if (currentKoder.email.includes("gmail.com")) {
    accu.push(currentKoder)
  }
  return accu
}, [])

console.log(studentsWithGmail)

// 6. QUIERO SABER SI TODOS LOS KODERS SON MAYORES DE EDAD (every):

const allAreOver18 = koders.reduce((result, koder) => {
  return result && koder.age >= 18
}, true)

console.log(allAreOver18)

// 7. NECESITO SABER LA CUENTA DE KODERS POR GENERACION (reduce):

const studentsByGeneration = koders.reduce((accu, currentKoder) => {
  const {generation} = currentKoder
  accu[`Generation ${generation}`] = (accu[`Generation ${generation}`] || 0) + 1;
  return accu 
}, {})

console.log(studentsByGeneration)