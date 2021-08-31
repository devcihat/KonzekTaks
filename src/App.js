import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import FilterComponent from "./component/FilterComponent";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DataDetails from "./component/DataDetails";
import Table from "./component/Table.jsx";

function App() {
  const [dataKonzek, setDataKonzek] = useState([]);

  useEffect(() => {
    axios
      .get("https://gorest.co.in/public-api/users")
      .then((response) => setDataKonzek(response.data.data));
  }, []);

  const [filterText, setFilterText] = React.useState("");

  const filteredItems = dataKonzek.filter(
    (item) =>
      item.name && item.name.toLowerCase().includes(filterText.toLowerCase())
  );

  const subHeaderComponentMemo = React.useMemo(() => {
    return (
      <FilterComponent
        onFilter={(e) => setFilterText(e.target.value)}
        filterText={filterText}
      />
    );
  }, [filterText]);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Table {...{ filteredItems, subHeaderComponentMemo }} />
        </Route>
        <Route exact path="/posts/:id">
          <DataDetails data={dataKonzek} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
