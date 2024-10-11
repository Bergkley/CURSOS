import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// pages
import Login from "../src/components/pages/Auth/Login";
import Register from "../src/components/pages/Auth/Register";
import Home from "../src/components/pages/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
