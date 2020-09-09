import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Loader from "../Components/Loader";

function Results() {
  const { seasonId, resultsId } = useParams();
  const url = `http://ergast.com/api/f1/${seasonId}/${resultsId}/results.json`;
  const [results, setResults] = useState({
    loading: false,
    data: null,
    error: false
  });

  let content = null;

  useEffect(() => {
    setResults({
      loading: true,
      data: null,
      error: false
    });
    axios
      .get(url)
      .then(response => {
        setResults({
          loading: false,
          data: response.data,
          error: false
        });
      })
      .catch(() => {
        setResults({
          loading: false,
          data: null,
          error: true
        });
      });
  }, [url]);

  if (results.error) {
    content = <p>There was an error please refresh or try again later.</p>;
  }

  if (results.loading) {
    content = <Loader />;
  }

  if (results.data) {
    content = (
      <div>
        <h1 className="mb-3 text-2xl font-bold">
          Results
        </h1>
        <div className="mb-3 text-xl font-bold">
          {results.data.MRData.RaceTable.Races[0].raceName}
        </div>
        <table className="table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2"></th>
          </tr>
        </thead>

        </table>
      </div>
    );
  }

  return <div>{content}</div>;
}

export default Results;
