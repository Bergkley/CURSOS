import { useContext } from 'react';
import { QuizContext } from '../context/quiz';

import './Question.css';
import Options from './Options';
const Question = () => {
    const [quizState, dispatch] = useContext(QuizContext);

    const currentQuestion = quizState.questions[quizState.currentQuestion];

    const onSelectOption = (option) => {
      dispatch({ type: "CHECK_ANSWER", payload: { answer: currentQuestion.answer, option} })
      
    }
  return (
    <div id='question'>
      <p>Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}</p>
      <h2>{currentQuestion.question}</h2>
      <div id="options-container">
        {currentQuestion.options.map(option => (
          <Options option={option} key={option} answer={currentQuestion.answer} selectOption={() => onSelectOption(option)}/>
        ))}
      </div>
      {!quizState.answerSelected && !quizState.help && (
        <>
          {currentQuestion.tip && (
            <button onClick={() => dispatch({ type: "SHOW_TIP" })} >Dica</button>
          )}
        </>
      )}
      {!quizState.answerSelected && quizState.help === 'tip' && (
            <p>{currentQuestion.tip}</p>
          )}
      {quizState.answerSelected && (
        <button onClick={() => dispatch({ type: "CHANGE_QUESTION" })}>Continuar</button>
      )}
    </div>
  )
}

export default Question
