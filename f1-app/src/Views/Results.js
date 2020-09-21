import React from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../Components/Loader'
import { useAxiosGet } from '../Hooks/HttpRequests'
import ResultCard from '../Components/ResultCard'

function Results() {
  const { seasonId, resultsId } = useParams()
  const url = `http://ergast.com/api/f1/${seasonId}/${resultsId}/results.json`

  let results= useAxiosGet(url)
  let currentRace= null
  let content = null

  if (results.error) {
    content = <p>There was an error please refresh or try again later.</p>
  }

  if (results.loading) {
    content = <Loader />
  }

  if (results.data) {
    content =

      results.data.MRData.RaceTable.Races[0].Results.map((result, key) =>
        <div key={key}>

          <ResultCard
            result={result}
          />
        </div>
      )
      currentRace = results.data.MRData.RaceTable.Races[0].raceName
  }

  return(
    <div>
      <h3 className="pb-3 text-2xl font-bold text-center border-b border-gray-600">
        {currentRace}
      </h3>
    {content}
  </div>
  )

}

export default Results
