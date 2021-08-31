import React from "react";
import { useParams } from "react-router";

function DataDetails({ data }) {
  const { id } = useParams();
  return (
    <div>
      {data
        .filter((card) => card.id === id)
        .map((card, index) => (
          <div key={index}>
            <p>{card.name}</p>
          </div>
        ))}
    </div>
  );
}

export default DataDetails;
