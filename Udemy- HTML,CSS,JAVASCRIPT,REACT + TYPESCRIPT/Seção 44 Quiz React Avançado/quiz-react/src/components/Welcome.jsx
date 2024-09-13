import { useContext } from "react";
import Quiz from "../img/quiz.svg";

import "./Welcome.css";
import { QuizContext } from "../context/quiz";
const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext);


  return (
    <div>
      <h2>Seja Bem Vindo</h2>
      <p>Clique no botção abaixo para começar</p>
      <button onClick={() => dispatch({ type: "CHANGE_STATE" })}>Iniciar</button>
      <img src={Quiz} alt="Início do Quiz" />
    </div>
  )
}

export default Welcome
