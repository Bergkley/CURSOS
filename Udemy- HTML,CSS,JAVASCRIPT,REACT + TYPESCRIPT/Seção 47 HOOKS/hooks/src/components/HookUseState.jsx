import { useState } from "react"

const HookUseState = () => {
    let userName = 'João';
    const [name,setName] = useState("Berg");

    const changeNames = () => {
        userName = "Joao da Silva"

        setName("Berg Brasil")
    }

    // 2 - useState e input
    
    const [age,setAge]= useState(18);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(age)
    }
  return (
    <div>
      <h2>UseState</h2>
      <p>Variavel: {userName}</p>
      <p>UseState: {name}</p>
      <button onClick={changeNames}>mudar o nome</button>
      {/* 2 - useState e input */}
      <form onSubmit={handleSubmit}>
        <input type="text" value={age} onChange={(e) => setAge(e.target.value)} placeholder="digite sua idade" />
        <input type="submit" value="enviar" />
      </form>
      <p>Sua idade: {age}</p>
      <hr />
    </div>
  )
}

export default HookUseState
