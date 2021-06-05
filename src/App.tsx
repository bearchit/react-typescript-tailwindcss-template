import React from "react";
import "./App.css";
import {BrowserRouter as Router,} from "react-router-dom";
import BasicLayout from "./components/layout/BasicLayout";
import Routes from "./Routes";

function App() {
  return (
    <Router>
      <BasicLayout>
        <Routes />
      </BasicLayout>
    </Router>
  );
}

export default App;
