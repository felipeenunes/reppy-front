import { Switch, Route } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Republic from "../pages/Republic";

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
    </Switch>
  );
};

export default Routes;
