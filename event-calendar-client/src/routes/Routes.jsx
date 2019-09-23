import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Timeline from "./Timeline/index.jsx";
import Adding from "./Adding/index.jsx";

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/add" component={Adding} />
      <Route exact path="/" component={Timeline} />
      <Route component={() => <div>404 Not found!</div>} />
    </Switch>
  </Router>
);

export default Routes;
