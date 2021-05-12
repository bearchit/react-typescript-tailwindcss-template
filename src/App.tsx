import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Dashboard from "./views/Dashboard";

function Routes() {
  return (
    <Switch>
      <Route path="/dashboard" exact={true} component={Dashboard} />
      <Redirect path="/" to="/dashboard" />
    </Switch>
  );
}

function App() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;
