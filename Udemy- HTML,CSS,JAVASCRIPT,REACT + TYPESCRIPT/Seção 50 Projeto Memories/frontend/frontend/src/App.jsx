import { Outlet } from 'react-router-dom'
import './App.css'



function App() {

  return (
    <>
      <div className="App">
        <h1>Memories</h1>
        <div className="container">
          <Outlet />
        </div>
      </div>
        
    </>
  )
}

export default App
