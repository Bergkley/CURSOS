import { useContext } from "react"
import { QuizContext } from "../context/quiz"

import WellDone from "../img/welldone.svg"

import "./GamerOver.css";
const GamerOver = () => {
    const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id="gameover"> 
      <h2>Fim de jogo!</h2>
      <p>Pontuação: {quizState.score}</p>
      <p>Voçê acertou {quizState.score} de {quizState.questions.length} perguntas</p>
      <img src={WellDone} alt="Fim do Quiz" />
      <button onClick={() => dispatch({ type: "NEW_GAME" })}>Reiniciar</button>
    </div>
  )
}

export default GamerOver
