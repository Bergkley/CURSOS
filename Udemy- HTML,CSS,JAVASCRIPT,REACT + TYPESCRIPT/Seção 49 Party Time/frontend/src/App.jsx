import { Outlet } from 'react-router-dom'

import './App.css'

function App() {
  return (
    <>
      <div className="App">
        Party time

        <Outlet />
      </div>
    </>
  )
}

export default App
