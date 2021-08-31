import React, { useEffect, useState } from "react";
import "./App.css";
import DataTable from "react-data-table-component";
import axios from "axios";
import FilterComponent from "./component/FilterComponent";

const columns = [
  {
    name: "Username",
    selector: (row) => row.name,
    sortable: true,
  },
  {
    name: "email",
    selector: (row) => row.email,
  },
  {
    name: "gender",
    selector: (row) => row.gender,
  },
  {
    name: "statüs",
    selector: (row) => row.status,
  },
];

function App() {
  const [dataKonzek, setDataKonzek] = useState([]);

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
    <div>
      <DataTable
        title="Konzek Task"
        columns={columns}
        data={filteredItems}
        pagination
        selectableRows
        persistTableHead
        subHeader={true}
        subHeaderComponent={subHeaderComponentMemo}
        persistTableHead
      />
    </div>
  );
}

export default App;
