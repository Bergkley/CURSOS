import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// components
import Navbar from "../src/components/layout/Navbar";
import Footer from "../src/components/layout/Footer";
import Container from "../src/components/layout/Container";

// pages
import Login from "../src/components/pages/Auth/Login";
import Register from "../src/components/pages/Auth/Register";
import Home from "../src/components/pages/Home";

function App() {
  return (
    <Router>
      <Navbar />
      <Container>
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
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
