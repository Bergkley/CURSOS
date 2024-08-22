// 1 - adicionando eventos
const  btn = document.querySelector('#my-button');

btn.addEventListener('click', function(){
    console.log('Clicou');
})

 // 2 - removendo eventos
 const secondBtn = document.querySelector('#btn');

 function imprimirMensagem(){
     console.log('Teste');
 }

 secondBtn.addEventListener('click', imprimirMensagem);

 const thirdBtn = document.querySelector('#other-btn');

 thirdBtn.addEventListener('click',()=>{
    console.log('Evento removido')
     secondBtn.removeEventListener('click',imprimirMensagem)
 })
 
//   3 - argumento do evento
const myTitle = document.querySelector('#my-title');

myTitle.addEventListener("click",(event)=>{
    console.log(event);
    console.log(event.srcElement);
    console.log(event.offtext);
    console.log(event.pointerType);
    console.log(event.target);
})

// 4 - propagação

const containerBtn = document.querySelector('#btn-container');
const btnInsideContainer = document.querySelector('#div-btn');

containerBtn.addEventListener('click', ()=>{
    console.log("Evento 1")
})

btnInsideContainer.addEventListener('click', (e)=>{
    e.stopPropagation();
    console.log("Evento 1")
})
