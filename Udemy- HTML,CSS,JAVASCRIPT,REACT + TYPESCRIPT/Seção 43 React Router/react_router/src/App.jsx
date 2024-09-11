import { useState } from 'react'

import './App.css'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <p>NavBar</p>
        <Outlet />
        <p>Footer</p>
      </div>
    </>
  )
}

export default App
