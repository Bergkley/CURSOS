import { useState } from 'react'

const Data = () => {
    const [anotherNumber, setAnotherNumber] = useState(15);
  return (
    <div>
      <p>Valor {anotherNumber}</p>
      <button onClick={() => setAnotherNumber(anotherNumber + 1)}>Mudar state</button>
    </div>
  )
}

export default Data
