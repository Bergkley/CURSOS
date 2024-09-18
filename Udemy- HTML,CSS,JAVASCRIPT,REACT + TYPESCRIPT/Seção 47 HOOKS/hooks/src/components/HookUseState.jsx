import { useState } from "react"

const HookUseState = () => {
    let userName = 'João';
    const [name,setName] = useState("Berg");

    const changeNames = () => {
        userName = "Joao da Silva"

        setName("Berg Brasil")
    }
  return (
    <div>
      <h2>UseState</h2>
      <p>Variavel: {userName}</p>
      <p>UseState: {name}</p>
      <button onClick={changeNames}>mudar o nome</button>
    </div>
  )
}

export default HookUseState
