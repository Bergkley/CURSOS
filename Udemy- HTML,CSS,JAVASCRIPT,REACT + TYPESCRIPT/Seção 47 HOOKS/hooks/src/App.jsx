import './App.css'
import { Link, Outlet } from 'react-router-dom'

function App() {

  return (
    <>
           
       <div className="App">
          <ul>
            <Link to="/">Home</Link>
            <Link to="/contact">Contato</Link>
          </ul>
          <Outlet />
       </div>
    </>
  )
}

export default App
