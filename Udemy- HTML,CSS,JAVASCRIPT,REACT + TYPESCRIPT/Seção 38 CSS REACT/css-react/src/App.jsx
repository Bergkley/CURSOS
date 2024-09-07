import './App.css'
import MyComponent from './components/MyComponent'

// 2 - css de componente

function App() {
  /* 4 - inline dinamico */
  const n = 15;
  // 5 - classe dinamicas
  const redTitle = true;
  return (
    <>
    <div className='App'>
        <h1>Hello World</h1>
      

      {/* 2 - css de componente */}
      <MyComponent />
      {/* 3 - inline style */}
      <p style={{color: 'blue', padding: '10px', borderTop: '1px dotted #000'}}></p>
      {/* 4 - inline dinamico */}
      <h2 style={n > 10 ? {color: 'red'} : {color: 'blueviolet'}}>
        Css dinâmico
      </h2>
      {/* 5 - classe dinamica */}
      <h3 className={redTitle ? 'red-title' : 'title'}>Classe dinamica</h3>

    </div>
    
    </>
  )
}

export default App
