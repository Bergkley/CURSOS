import { useEffect, useState } from "react"

const HookUseEffect = () => {
    // 1 - useEffect
    useEffect(() => {
        console.log('useEffect')
    })

    const [number, setNumber] = useState(1);

    const changeSomething = () => {
        setNumber(number + 1);
    }

    // 2 - array de dependências vazio

    useEffect(() => {
        console.log('Serei executado apenas uma vez')
    }, [])

    // 3 - array de dependências com o valor

    const [anotherNumber, setAnotherNumber] = useState(0);

    useEffect(() => {
        if(anotherNumber > 0){
            console.log('Serei executado apenas quando muda o anotherNumber')
        }
    }, [anotherNumber])

    // 4 - cleanup do useEffect

    useEffect(() => {
        const timer = setTimeout(() => {
            console.log("Helo World")
            setAnotherNumber(anotherNumber + 1)
        }, 2000)
        return () => clearTimeout(timer)
    }, [anotherNumber])

  return (
    <div>
      <h2>UseEffect</h2>
      <p>Number: {number}</p>
      <button onClick={changeSomething}>Executar</button>
      <p>Another number: {anotherNumber}</p>
      <button onClick={() => setAnotherNumber(anotherNumber + 1)}>Mudar another number</button>
    </div>
  )
}

export default HookUseEffect
