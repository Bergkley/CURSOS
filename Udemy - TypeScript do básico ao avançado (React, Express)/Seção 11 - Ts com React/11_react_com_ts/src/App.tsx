
// 4- importação de component
import FirstComponent from "./components/FirstComponent";
import SecondComponent from "./components/SecondComponent";
import Destructuring, {Category} from "./components/Destructuring";
import State from "./components/State";
function App() {
  // 1 - variaveis
  const name: string = "Berg";
  const age: number = 19;
  const isWorking: boolean = true;

  // 2 - funcoes
  const userGreeting = (name: string): string => {
    return `Ola, ${name}`;
  }
  return (
    <div className="App">
      <h1>TypeScript com React</h1>
      <h2>Ola, {name} tenho {age} anos</h2>
      {isWorking && <p>Estou trabalhando</p>}

      <p>{userGreeting(name)}</p>
      <FirstComponent />
      <SecondComponent name="Berg" />
      <Destructuring title="Post 1"
        content="Algum conteudo"
        commentsQty={10}
        tags={["ts", "js"]}
        category={Category.TS}
        />
      <State />
    </div>
  );
}

export default App;
