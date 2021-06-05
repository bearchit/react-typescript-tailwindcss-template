import React from 'react';
import {Redirect, Route, Switch,} from "react-router-dom";
import Home from "./views/Home";

export default function Routes() {
  return (
    <Switch>
      <Route path="/home" exact={true} component={Home} />
      <Redirect path="/" to="/home" />
    </Switch>
  );
}
