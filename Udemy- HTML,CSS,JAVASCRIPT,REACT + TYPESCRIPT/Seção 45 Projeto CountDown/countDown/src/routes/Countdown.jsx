import Title from '../components/Title'
import Counter from '../components/Counter'

import useCountdown from '../hooks/useCountdown'

const Countdown = () => {
    const [day, hour, minute, second] = useCountdown("2025-01-01")

  return (
    <>
      <Title title="Contagem regressiva para 2023"/>
          <div className="countdown-container"> 
            <Counter title="Dias" number={day}/>
            <Counter title="Horas" number={hour}/>
            <Counter title="Minutos" number={minute}/>
            <Counter title="Segundos" number={second}/>
          </div>
    </>
  )
}

export default Countdown
