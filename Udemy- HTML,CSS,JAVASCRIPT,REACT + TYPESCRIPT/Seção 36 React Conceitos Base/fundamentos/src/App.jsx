import './App.css'
import Event from './components/Event'
import FirstComponent from './components/FirstComponent'
import MyComponent from './components/MyComponent'
import TemplateExpression from './components/TemplateExpression'

// 2 - importando componente
function App() {
  // 3 - Comentários
  return (
    <div className='App'>
      <h1>Fundamentos do React</h1>
      <FirstComponent />
      <TemplateExpression />
      <MyComponent />
      <Event />
    </div>
  )
}

export default App
