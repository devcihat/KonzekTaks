import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router";

function DataDetails({ data }) {
  const { id } = useParams();
  // console.log(data);
  useEffect(() => {}, [data]);
  const history = useHistory();

  const BackClick = () => {
    history.replace("/");
  };
  return (
    <div>
      <button
        onClick={BackClick}
        className="inline-flex mt-12 ml-8 items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        {" "}
        Back
      </button>
      {data
        .filter((card) => JSON.stringify(card.id) === id)
        .map((card, index) => (
          <div className="mx-auto w-1/2 mt-20">
            <div key={index} className="bg-white shadow overflow-hidden">
              <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                <dl className="sm:divide-y sm:divide-gray-200">
                  <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Full name
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {card.name}
                    </dd>
                  </div>
                  <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Application for
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      Backend Developer
                    </dd>
                  </div>
                  <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Email address
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {card.email}
                    </dd>
                  </div>
                  <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      gender
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {card.gender}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default DataDetails;
