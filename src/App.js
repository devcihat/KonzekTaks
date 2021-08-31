import React, { useEffect, useState } from "react";
import "./App.css";
import DataTable from "react-data-table-component";
import axios from "axios";
import FilterComponent from "./component/FilterComponent";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory
} from "react-router-dom";
import DataDetails from "./component/DataDetails";

const columns = [
  {
    name: "Username",
    selector: (row) => row.name,
    sortable: true,
  },
  {
    name: "Email",
    selector: (row) => row.email,
  },
  {
    name: "Gender",
    selector: (row) => row.gender,
  },
  {
    name: "Status",
    selector: (row) => row.status,
  },
];

function App() {
  const [dataKonzek, setDataKonzek] = useState([]);
  let history = useHistory();

  useEffect(() => {
    // POST request using axios inside useEffect React hoo
    axios
      .get("https://gorest.co.in/public-api/users")
      .then((response) => setDataKonzek(response.data.data));

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
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
          <DataTable
            title="Konzek Task"
            columns={columns}
            data={filteredItems}
            pagination
            selectableRows
            persistTableHead
            subHeader={true}
            subHeaderComponent={subHeaderComponentMemo}
            onRowClicked={(row) => history.push(`/posts/${row.id}`)}
          />
        </Route>
        <Route exact path="/posts/:id">
          <DataDetails data={dataKonzek} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
