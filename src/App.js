import React,{useEffect,useState} from "react";
import "./App.css";
import DataTable from "react-data-table-component";
import axios from "axios"

const columns = [
  {
    name: "Username",
    selector: (row) => row.name,
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

  const [dataKonzek,setDataKonzek] = useState([])

  useEffect(() => {
    // POST request using axios inside useEffect React hoo
    axios.get('https://gorest.co.in/public-api/users')
        .then(response => setDataKonzek(response.data.data));

// empty dependency array means this effect will only run once (like componentDidMount in classes)
}, []);

  return (
    <div className="bg-red-600">
      <DataTable className='mx-auto items-center' title="Konzek Task" columns={columns} data={dataKonzek} pagination />
    </div>
  );
}

export default App;
