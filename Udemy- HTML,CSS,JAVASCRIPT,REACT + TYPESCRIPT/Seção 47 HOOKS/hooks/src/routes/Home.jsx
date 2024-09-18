import HookUseEffect from "../components/HookUseEffect";
import HookUseReducer from "../components/HookUseReducer";
import HookUseState from "../components/HookUseState";



const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <HookUseState />
      <HookUseReducer />
      <HookUseEffect />
    </div>
  );
};

export default Home;
