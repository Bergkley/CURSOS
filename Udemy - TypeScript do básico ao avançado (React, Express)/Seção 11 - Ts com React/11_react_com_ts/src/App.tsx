
// 4- importação de component
import FirstComponent from "./components/FirstComponent";
import SecondComponent from "./components/SecondComponent";
import Destructuring, {Category} from "./components/Destructuring";
import State from "./components/State";
import Context from "./components/Context";
import { createContext } from "react";

interface IAppContext{
  language: string,
  framework: string,
  projects: number
}

 export const AppContext = createContext<IAppContext | null>(null);
function App() {
  // 1 - variaveis
  const name: string = "Berg";
  const age: number = 19;
  const isWorking: boolean = true;

  // 2 - funcoes
  const userGreeting = (name: string): string => {
    return `Ola, ${name}`;
  }

  // 8 - type
  type textOrNull = string | null;

  // 9 - context


  const contextValue: IAppContext = {
    language: "TypeScript",
    framework: "React",
    projects: 5
  }

  const myText: textOrNull = "Tem algum texto aqui";
  const mySecondText: textOrNull = null;

  return (
    <AppContext.Provider value={contextValue}>
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
        {myText && <p>{myText}</p>}
        {mySecondText && <p>{myText}</p>}
        <Context />
      </div>
    </AppContext.Provider>
  );
}

export default App;
