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

// 5 - removendo evento padrão
const a = document.querySelector('a');

a.addEventListener('click', (event)=>{
    event.preventDefault();
    console.log('Clicou');
})

// 6 - eventos de teclas
document.addEventListener('keyup',(e)=>{
    console.log('Soltou a tecla', e.key);
})

document.addEventListener('keydown',(e)=>{
    console.log('Apertou a tecla ', e.key);
})
// 7 - eventos de mouse

const mouseEvents = document.querySelector('#mouse');

mouseEvents.addEventListener('mousedown', ()=>{
    console.log('Pressionou o botão');
})

mouseEvents.addEventListener('mouseup', ()=>{
    console.log('Soltou o botão');
})

mouseEvents.addEventListener('dblclick', ()=>{
    console.log('Clicou 2x o botão');
})

// 8 - movimentos do mouse
document.addEventListener('mousemove',(e)=>{
    console.log('eixo x', e.x)
    console.log('eixo x', e.y)
});

// 9 - eventos de scroll
window.addEventListener('scroll', ()=>{
    if(window.pageYOffset > 200){
        console.log('Passou do 200')
    }
})

// 10 - eventos de focus
const input = document.querySelector("#my-input");

input.addEventListener('focus', (e)=>{
    console.log('Entrou no input');
});

input.addEventListener('blur', (e)=>{
    console.log('Saiu do input');
});

// 11 - evento de carregamento
window.addEventListener('load', ()=>{
    console.log('Carregou');
})

window.addEventListener('beforeunload',(e)=>{
    e.preventDefault();
    e.returnValue = 'teste';
})

// 12 - debounce
const debounce = (f, delay)=> {
    let timeout;
    return (...arguments)=>{
        if(timeout){
            clearTimeout(timeout);
        }
        timeout = setTimeout(()=>{
            f.apply(arguments)
    },delay)
    }
}
window.addEventListener("mousemove", debounce(()=>{
    console.log('Executando a cada 400ms')
}, 400))