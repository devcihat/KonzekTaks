import React, { useEffect } from "react";
import { useParams } from "react-router";

function DataDetails({ data }) {
  const { id } = useParams();
  console.log(data);
  useEffect(() => {}, [data]);
  return (
    <div>
      {data
        .filter((card) => card.id === id)
        .map((card, index) => (
          <div key={index}>
            <p>{card.email}</p>
          </div>
        ))}
    </div>
  );
}

export default DataDetails;
