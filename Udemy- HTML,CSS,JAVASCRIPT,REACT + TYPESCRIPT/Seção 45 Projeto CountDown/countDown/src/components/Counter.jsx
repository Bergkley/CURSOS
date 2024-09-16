import "./Counter.css"

const Counter = ({title, number}) => {
  return (
    <div className='counter'>
      <p className="counter-number">{number}</p>
      <p className="counter-text">{title}</p>
    </div>
  )
}

export default Counter
