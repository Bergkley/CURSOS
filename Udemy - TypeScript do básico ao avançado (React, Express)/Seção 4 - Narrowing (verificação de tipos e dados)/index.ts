// 1 - type guard
function sum(a: number | string, b: number | string){

   if(typeof a === 'string' && typeof b === 'string') {
    console.log(parseFloat(a) + parseFloat(b))
   }else if(typeof a === 'number' && typeof b === 'number') {
    console.log(a + b)
   }else{
    console.log('Impossível realizar esta operação')
   }
   
} 

sum('10', '20')
sum(12, 13)
sum("20", 21)


