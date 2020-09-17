import React from 'react'
import Loader from '../Components/Loader'
import RaceCard from '../Components/RaceCard'
import { useAxiosGet } from '../Hooks/HttpRequests'

function Home() {

  const url = `http://ergast.com/api/f1/current.json`

  let schedule= useAxiosGet(url)

  let content = null

  if (schedule.error) {
    content = <p>There was an error please refresh or try again later.</p>
  }

  if (schedule.loading) {
    content = <Loader />
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
      <h1 className="pb-3 text-2xl font-bold text-center">Race Schedule</h1>
      {content}
    </div>
  )
}

export default Home
