import './App.css'
// 2 - imagem em assets
import night from "./assets/night.jpg"
import CarDetails from './components/CarDetails'
import ConditionalRender from './components/ConditionalRender'
import Data from './components/Data'
import Fragment from './components/Fragment'
import ListRender from './components/ListRender'
import ShowUserName from './components/ShowUserName'

// 11 - renderização de listas com componente
const cars = [
  { id: 1, brand: "Ferrari", color: "Amarelo", km: 0 },
  { id: 2, brand: "KIA", color: "Branco", km: 200000 },
  { id: 3, brand: "Renault", color: "Azul", km: 32000 },
];
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
        {/* 9 - Destruturando props */}
        <CarDetails brand="VW" km={10000} color="Branco"/>
        {/* 10 - reaproveitamento de componentes */}
        <CarDetails brand="Fiat" km={20000} color="Vermelho"/>
        <CarDetails brand="Audi" km={90000} color="Azul"/>
        {/* 11 - renderização de listas com componente */}
        {cars.map(car => (
          <CarDetails key={car.id} brand={car.brand} km={car.km} color={car.color} />
        ))}
        {/* 12 - Fragment */}
        <Fragment />
      </div>
    </>
  )
}

export default App
