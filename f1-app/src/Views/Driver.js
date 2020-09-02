import React, { useState, useEffect } from "react";
import axios from "axios";

function Driver() {
  const url = "http://ergast.com/api/f1/current.json";
  const [driver, setDriver] = useState(null);

  useEffect(() => {
    axios.get(url).then(response => {
      setDriver(response.data);
    });
  }, [url]);
  if (driver) {
    return (
      <div>
        <h1>{driver.MRData.RaceTable.season}</h1>
      </div>
    );
  }

  return <div></div>;
}

export default Driver;
