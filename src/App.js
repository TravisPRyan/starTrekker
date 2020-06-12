import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import Trekkers from "./trekker/pages/Trekkers";
import NewDest from "./destinations/pages/NewDest";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import TrekkerDest from "./destinations/pages/TrekkerDest";

const App = () => {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/" exact>
            <Trekkers />
          </Route>

          <Route path="/:userId/destinations" exact>
            <TrekkerDest />
          </Route>

          <Route path="/destinations/new" exact>
            <NewDest />
          </Route>

          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
