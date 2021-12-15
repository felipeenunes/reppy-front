import { Switch, Route } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Republic from "../pages/Republic";
import Signup from "../pages/Signup";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
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
    </Switch>
  );
};

export default Routes;
