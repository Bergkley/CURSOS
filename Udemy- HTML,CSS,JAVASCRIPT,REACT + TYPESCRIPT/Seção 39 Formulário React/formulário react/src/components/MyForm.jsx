import { useState } from 'react'
import "./MyForm.css"
const MyForm = () => {
    const [name,setName] = useState()
    const [email,setEmail] = useState()

    const handleName = (e) => {
        setName(e.target.value)
    }
  return (
    <div>
      {/* 1- criação de form */}
      <form >
        <div>
            <label htmlFor="name">Nome</label>
            <input type="text" id="name" name="name" placeholder="Digite seu nome"onChange={handleName}/>
        </div>
        <input type="submit" value="Enviar" />
      </form>
      {/* 2- label envolvendo input */}
      <label>
        <span>E-mail</span>
        <input type="text" name="email" placeholder="Digite seu e-mail" />
      </label>
      
    </div>
  )
}

export default MyForm
