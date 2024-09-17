
import './App.css'
import Counter from './components/Counter'
import Title from './components/Title'


import NewYear from './assets/newyear.jpg'
import useCountdown from './hooks/useCountdown'
import { Outlet } from 'react-router-dom'


function App() {
  const [day, hour, minute, second] = useCountdown("2025-01-01")
  return (
    <>
      <div className="App" style={{backgroundImage: `url(${NewYear})`}}>
        <div className="container">
          <Title title="Contagem regressiva para 2023"/>
          <div className="countdown-container"> 
            <Counter title="Dias" number={day}/>
            <Counter title="Horas" number={hour}/>
            <Counter title="Minutos" number={minute}/>
            <Counter title="Segundos" number={second}/>
          </div>
        </div>
        <Outlet />
      </div>
    </>
  )
}

export default App
