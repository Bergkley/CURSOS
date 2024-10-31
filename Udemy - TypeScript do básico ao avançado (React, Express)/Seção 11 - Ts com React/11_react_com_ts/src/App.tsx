

function App() {
  // 1 - variaveis
  const name: string = "Berg";
  const age: number = 19;
  const isWorking: boolean = true;
  return (
    <div className="App">
      <h1>TypeScript com React</h1>
      <h2>Ola, {name} tenho {age} anos</h2>
      {isWorking && <p>Estou trabalhando</p>}
    </div>
  );
}

export default App;
