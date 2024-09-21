
// 4 - importação de componente
import Destructuring, {Category} from "./components/Destructuring";
import FirstComponent from "./components/FirstComponent";
import SecondComponent from "./components/SecondComponent";
import State from "./components/State";

function App() {
  //  1 - variaveis
  const name:string = "Berg";
  const age: number = 19;
  const isWorking: boolean = true;

  // 2 - funções
  const userGreeting = (name:string):string => {
    return `Hello, ${name}`;
  }

  return (
    <div className="App">
      <h1>TypesScript com React</h1>
      <h2>Nome: {name}</h2>
      <p>Idade: {age}</p>
      {isWorking && <p>Esta trabalhando</p>}
      <p>{userGreeting(name)}</p>
      <FirstComponent />
      <SecondComponent name={name} />
      <Destructuring title="Primeiro post" content="Conteudo" commentsQty={5} tags={["tag1", "tag2"]} category={Category.TYPESCRIPT} />
      <State />
    </div>
  );
}

export default App;
