// 3 - alterando valor do contexto
import { useContext } from "react";
import {CounterContext} from "../context/CounterContext";
import ChangeCounter from "../components/ChangeCounter";
const Home = () => {
  const {counter} = useContext(CounterContext)

  return (
    <div>
      <h1>Home</h1>
      <p>Valor do contador: {counter}</p>
      <ChangeCounter />
    </div>
  );
};

export default Home;
