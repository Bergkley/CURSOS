import './App.css'
import MyComponent from './components/MyComponent'

// 2 - css de componente

function App() {

  return (
    <>
    <div className='App'>
      <h1>Hello World</h1>
    </div>

    {/* 2 - css de componente */}
    <MyComponent />
    {/* 3 - inline style */}
    <p style={{color: 'blue', padding: '10px', borderTop: '1px dotted #000'}}></p>
    </>
  )
}

export default App
