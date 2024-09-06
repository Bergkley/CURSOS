import './App.css'
// 2 - imagem em assets
import night from "./assets/night.jpg"

function App() {
  return (
    <>
      <div className='App'> 
        <h1>Avançando em React</h1>
        {/* 1 - Imagem em public */}
        <img src="/img.jpg" alt="Algum imagem" />
        {/* 2 - Imagem em assets */}
        <img src={night} alt="Imagem da noite" />
      </div>
    </>
  )
}

export default App
