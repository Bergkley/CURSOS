import './App.css'
// 2 - imagem em assets
import night from "./assets/night.jpg"
import ConditionalRender from './components/ConditionalRender'
import Data from './components/Data'
import ListRender from './components/ListRender'
import ShowUserName from './components/ShowUserName'

function App() {
  return (
    <>
      <div className='App' style={{paddingBottom: "500px"}}> 
        <h1>Avançando em React</h1>
        {/* 1 - Imagem em public */}
        <img src="/img.jpg" alt="Algum imagem" />
        {/* 2 - Imagem em assets */}
        <img src={night} alt="Imagem da noite" />
        {/* 3 - useState */}
        <Data />
        {/* 4 - render de lista */}
        <ListRender />
        {/* 7 - render condicional */}
        <ConditionalRender />
        {/* 8 - Props */}
        <ShowUserName name="Berg"/>
      </div>
    </>
  )
}

export default App
