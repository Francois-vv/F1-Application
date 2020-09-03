import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Loader from "../Components/Loader";

function Season() {
  const { seasonId } = useParams();
  const url = `http://ergast.com/api/f1/${seasonId}.json`;
  const [season, setSeason] = useState({
    loading: false,
    data: null,
    error: false
  });

  let content = null;

  useEffect(() => {
    setSeason({
      loading: true,
      data: null,
      error: false
    });
    axios
      .get(url)
      .then(response => {
        setSeason({
          loading: false,
          data: response.data,
          error: false
        });
      })
      .catch(() => {
        setSeason({
          loading: false,
          data: null,
          error: true
        });
      });
  }, [url]);

  if (season.error) {
    content = <p>There was an error please refresh or try again later.</p>;
  }

  if (season.loading) {
    content = <Loader />;
  }

  if (season.data) {
    content = (
      <div>
        <h1 className="text-2xl font-bold mb-3">
          F1 {season.data.MRData.RaceTable.season} Season
        </h1>
        <div className="font-bold text-xl mb-3">
          Results: {season.data.MRData.total}
        </div>
      </div>
    );
  }

  return <div>{content}</div>;
}

export default Season;
