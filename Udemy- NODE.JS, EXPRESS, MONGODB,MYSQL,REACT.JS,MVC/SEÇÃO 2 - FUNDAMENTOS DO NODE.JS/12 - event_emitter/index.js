const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

eventEmitter.on('start', ()=>{
    console.log('Iniciando...')
})

console.log("Antes");

eventEmitter.emit('start');

console.log('Depois')