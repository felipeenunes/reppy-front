import { Switch, Route } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Republic from "../pages/Republic";
import Signup from "../pages/Signup";
import CreateRep from "../pages/CreateRep";

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
    </Switch>
  );
};

export default Routes;
