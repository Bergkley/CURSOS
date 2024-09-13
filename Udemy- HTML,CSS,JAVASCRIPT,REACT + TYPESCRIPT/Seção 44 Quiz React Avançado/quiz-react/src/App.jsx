import Welcome from './components/Welcome'

import './App.css'
import { useContext, useEffect } from 'react';
import Question from './components/Question';
import { QuizContext } from './context/quiz';
import GamerOver from './components/GamerOver';
import PickCategory from './components/PickCategory';


function App() {
  const [quizState, dispatch] = useContext(QuizContext);



  return (
    <>
      <div className="App">
        <h1>Quiz de Programação</h1>
        {quizState.gameStage === "Start" && <Welcome />}
        {quizState.gameStage === "Category" && <PickCategory />}
        {quizState.gameStage === "Playing" && <Question />}
        {quizState.gameStage === "End" && <GamerOver />}
        
      </div>
    </>
  )
}

export default App
