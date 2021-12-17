import { Switch, Route } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Republic from "../pages/Republic";
import Signup from "../pages/Signup";
import CreateRep from "../pages/CreateRep";
import About from "../pages/About";
import Profile from "../pages/Profile";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Dashboard />
      </Route>
      <Route exact path="/republic/:id">
        <Republic />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/register">
        <Signup />
      </Route>
      <Route exact path="/republic">
        <CreateRep />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
      <Route exact path="/profile">
        <Profile />
      </Route>
    </Switch>
  );
};

export default Routes;
