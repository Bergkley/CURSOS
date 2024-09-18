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

  return (
    <div>
      <h2>UseEffect</h2>
      <p>Number: {number}</p>
      <button onClick={changeSomething}>Executar</button>
    </div>
  )
}

export default HookUseEffect
