import React from 'react'
import Loader from '../Components/Loader'
import { useAxiosGet } from '../Hooks/HttpRequests'
import StandingCard from '../Components/StandingCard'

function Standings() {
  const url = `http://ergast.com/api/f1/current/driverStandings.json`

  let standings= useAxiosGet(url)
  let currentSeason= null
  let content = null
  let heading = null

  if (standings.error) {
    content = <p>There was an error please refresh or try again later.</p>
  }

  if (standings.loading) {
    content = <Loader />
  }

  if (standings.data) {
    currentSeason = standings.data.MRData.StandingsTable.season
    heading =
      <h3 className="pb-3 text-2xl font-bold text-center border-b border-gray-600">
        {currentSeason} Driver Standings
      </h3>

    content =
      standings.data.MRData.StandingsTable.StandingsLists[0].DriverStandings.map((standing, key) =>
      <div key={key}>

        <StandingCard
          standing={standing}
        />
      </div>
      )

  }

  return(
    <div>
    {heading}
    {content}
  </div>
  )
}

export default Standings