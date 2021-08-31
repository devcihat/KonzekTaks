import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DataDetails from "./component/DataDetails";
import Table from "./component/Table";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Table />
        </Route>
        <Route exact path="/posts/:id">
          <DataDetails />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
