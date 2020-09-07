import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../Components/Loader";
import RaceCard from "../Components/RaceCard";

function Home() {

  const url = `http://ergast.com/api/f1/current.json`;
  const [schedule, setSchedule] = useState({
    loading: false,
    data: null,
    error: false
  });



  useEffect(() => {
    setSchedule({
      loading: true,
      data: null,
      error: false
    });
    axios
      .get(url)
      .then(response => {
        setSchedule({
          loading: false,
          data: response.data,
          error: false
        });
      })
      .catch(() => {
        setSchedule({
          loading: false,
          data: null,
          error: true
        });
      });
  }, [url]);

  let content = null

  if (schedule.error) {
    content = <p>There was an error please refresh or try again later.</p>;
  }

  if (schedule.loading) {
    content = <Loader />;
  }

  if (schedule.data) {
    content =
    schedule.data.MRData.RaceTable.Races.map((race, key) =>
      <div key={key}>
        <RaceCard
          race={race}
        />
      </div>
    )
  }

  return (
    <div>
      <h1 className="font-bold text-2xl">Current F1 Schedule</h1>
      {content}
    </div>
  );
}

export default Home;
