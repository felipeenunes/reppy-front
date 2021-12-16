import { Switch, Route } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Republic from "../pages/Republic";
import Signup from "../pages/Signup";
import CreateRepublic from "../pages/CreateRepublic";
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
      <Route exact path="/newreppy">
        <CreateRepublic />
      </Route>
      <Route>
        <Profile />
      </Route>
    </Switch>
  );
};

export default Routes;
