import React from "react";
import "./App.css";
import ListDetailScreen from "./ListDetail";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function Routes() {
  return (
    <Switch>
      <Route path="/l/:listID">
        <ListDetailScreen />
      </Route>
      {/*<Route path="/">*/}
      {/*  <Dashboard />*/}
      {/*</Route>*/}
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
