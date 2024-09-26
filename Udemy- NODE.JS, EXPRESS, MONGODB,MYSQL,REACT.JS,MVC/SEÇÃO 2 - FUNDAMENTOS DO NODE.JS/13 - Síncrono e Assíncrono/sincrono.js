const fs = require('fs');

console.log("Inicio")

fs.writeFileSync('arquivo.txt', 'Hello World!');

console.log("Fim")