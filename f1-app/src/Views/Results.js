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
        <h1 className="text-2xl font-bold mb-3">
          F1 {results.data.MRData.RaceTable.season} Season
        </h1>
        <div className="font-bold text-xl mb-3">
          {results.data.MRData.RaceTable.Races[0].raceName}
        </div>
      </div>
    );
  }

  return <div>{content}</div>;
}

export default Results;
