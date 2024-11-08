import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import MagwdPage from "../pages/MagwdPage";

import "./App.css";

const App = () => {
  console.log("app.js")
  return (
  <Router>
    <Switch>
      <Route path="/" component={MagwdPage} />
      <Route path="/magwd" component={MagwdPage} />
    </Switch>
  </Router>
)};

export default App;
