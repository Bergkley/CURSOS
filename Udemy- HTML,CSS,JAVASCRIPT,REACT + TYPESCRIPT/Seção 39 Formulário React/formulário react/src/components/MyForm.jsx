import "./MyForm.css"
const MyForm = () => {
  return (
    <div>
      {/* 1- criação de form */}
      <form >
        <div>
            <label htmlFor="name">Nome</label>
            <input type="text" id="name" name="name" placeholder="Digite seu nome"/>
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
