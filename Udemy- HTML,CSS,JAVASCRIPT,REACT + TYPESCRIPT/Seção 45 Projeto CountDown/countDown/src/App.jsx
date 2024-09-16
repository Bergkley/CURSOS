
import './App.css'
import Counter from './components/Counter'
import Title from './components/Title'

import NewYear from './assets/newyear.jpg'

function App() {
  return (
    <>
      <div className="App" style={{backgroundImage: `url(${NewYear})`}}>
        <div className="container">
          <Title title="Contagem regressiva para 2023"/>
          <div className="countdown-container"> 
            <Counter title="Dias" number={2}/>
            <Counter title="Horas" number={2}/>
            <Counter title="Minutos" number={2}/>
            <Counter title="Segundos" number={2}/>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default App
