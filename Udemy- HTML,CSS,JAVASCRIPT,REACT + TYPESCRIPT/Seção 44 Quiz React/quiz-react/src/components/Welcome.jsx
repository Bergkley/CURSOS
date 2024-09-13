import Quiz from "../img/quiz.svg";

import "./Welcome.css";
const Welcome = () => {
  return (
    <div>
      <h2>Seja Bem Vindo</h2>
      <p>Clique no botção abaixo para começar</p>
      <button>Iniciar</button>
      <img src={Quiz} alt="Início do Quiz" />
    </div>
  )
}

export default Welcome
