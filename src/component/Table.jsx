import React from 'react';
import DataTable from 'react-data-table-component';
import { useHistory } from 'react-router-dom';

const columns = [
  {
    name: 'Username',
    selector: (row) => row.name,
    sortable: true,
  },
  {
    name: 'Email',
    selector: (row) => row.email,
  },
  {
    name: 'Gender',
    selector: (row) => row.gender,
  },
  {
    name: 'Status',
    selector: (row) => row.status,
  },
];

const Table = ({ filteredItems, subHeaderComponentMemo }) => {
  const history = useHistory();

  return (
    <DataTable
      title='Konzek Task'
      columns={columns}
      data={filteredItems}
      pagination
      selectableRows
      persistTableHead
      subHeader={true}
      subHeaderComponent={subHeaderComponentMemo}
      onRowClicked={(row) => history.push(`/posts/${row.id}`)}
    />
  );
};

export default Table;
