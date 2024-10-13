import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// components
import Navbar from "../src/components/layout/Navbar";
import Footer from "../src/components/layout/Footer";
import Container from "../src/components/layout/Container";

// pages
import Login from "../src/components/pages/Auth/Login";
import Register from "../src/components/pages/Auth/Register";
import Home from "../src/components/pages/Home";
import Message from "./components/layout/Message";
import Profile from "./components/pages/User/Profile";
import MyPets from "./components/pages/Pet/MyPets";
import EditPet from "./components/pages/Pet/EditPet";




// context
import { UserProvider } from "../src/context/UserContext";
import AddPet from "./components/pages/Pet/AddPet";

function App() {
  return (
    <Router>
      <UserProvider>
        <Navbar />
        <Message />
        <Container>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/user/profile">
              <Profile />
            </Route>
            <Route path="/pet/mypets">
              <MyPets />
            </Route>
            <Route path="/pet/add">
              <AddPet />
            </Route>
            <Route path="/pet/edit/:id">
              <EditPet />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Container>
        <Footer />
      </UserProvider>
    </Router>
  );
}

export default App;
