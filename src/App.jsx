import React from "react";
import { Store } from "./store/store";
import { Router } from "react-router";
import Routes from "./routes";
import history from "./services/history";
// import {redux} from 'redux';
const redux = require("redux");

function App() {
  return (
    <div>
      <Router history={history}>
        <Routes />
      </Router>
    </div>
  );
}

export default App;
