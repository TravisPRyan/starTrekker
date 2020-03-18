import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import Trekkers from "./trekker/pages/Trekkers";
import NewDest from "./destinations/pages/NewDest";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact={true}>
          <Trekkers />
        </Route>
        <Route path="/destinations/new" exact={true}>
          <NewDest />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
