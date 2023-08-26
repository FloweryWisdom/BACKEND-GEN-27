const names = process.argv.slice(2);


const reverseStrings = (names) => 
names.forEach(name => {
  console.log(name.split("").reverse().join(""));
});

process.exit(0)