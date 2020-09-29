import React, { useState } from 'react'
import Loader from '../Components/Loader'
import { useAxiosGet } from '../Hooks/HttpRequests'
import DriverStandingCard from '../Components/DriverStandingCard'
import ConstructorStandingCard from '../Components/ConstructorStandingCard'

function Standings() {
    const driverStandingsUrl = `http://ergast.com/api/f1/current/driverStandings.json`
    const constructorStandingsUrl = `http://ergast.com/api/f1/current/constructorStandings.json`
    const [isConstructor, setIsConstructor] = useState(false)

    let driverStandings = useAxiosGet(driverStandingsUrl)
    let constructorStandings = useAxiosGet(constructorStandingsUrl)
    let currentSeason = null
    let content = null
    let heading = null
    let tabContent = null

    if (driverStandings.error || constructorStandings.error) {
        content = <p>There was an error please refresh or try again later.</p>
    }

    if (driverStandings.loading || constructorStandings.loading) {
        content = <Loader />
    }

    if (driverStandings.data && constructorStandings.data) {
        currentSeason = driverStandings.data.MRData.StandingsTable.season
        heading = (
            <h3 className="pb-3 text-2xl font-bold text-center">
                {currentSeason} Season
            </h3>
        )

        if (!isConstructor) {
            tabContent = (
                <ul className="flex border-b border-gray-600 list-reset">
                    <li className="mr-1 -mb-px">
                        <button className="inline-block px-4 py-2 font-semibold bg-gray-800 border-t border-l border-r border-gray-600 rounded-t text-blue-dark">
                            Drivers
                        </button>
                    </li>
                    <li className="mr-1">
                        <button
                            className="inline-block px-4 py-2 font-semibold bg-gray-800 rounded-t text-blue hover:text-blue-darker"
                            onClick={() => setIsConstructor(true)}
                        >
                            Constructors
                        </button>
                    </li>
                </ul>
            )
            content = driverStandings.data.MRData.StandingsTable.StandingsLists[0].DriverStandings.map(
                (standing, key) => (
                    <div key={key}>
                        <DriverStandingCard standing={standing} />
                    </div>
                )
            )
        } else {
            tabContent = (
                <ul className="flex border-b border-gray-600 list-reset">
                    <li className="mr-1">
                        <button
                            className="inline-block px-4 py-2 font-semibold bg-gray-800 rounded-t text-blue hover:text-blue-darker"
                            onClick={() => setIsConstructor(false)}
                        >
                            Drivers
                        </button>
                    </li>
                    <li className="pb-px mr-1">
                        <button className="inline-block px-4 py-2 font-semibold bg-gray-800 border-t border-l border-r border-gray-600 rounded-t text-blue-dark">
                            Constructors
                        </button>
                    </li>
                </ul>
            )
            console.log({ constructorStandings })
            content = constructorStandings.data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings.map(
                (standing, key) => (
                    <div key={key}>
                        <ConstructorStandingCard standing={standing} />
                    </div>
                )
            )
        }
    }

    return (
        <div>
            {heading}
            {tabContent}
            {content}
        </div>
    )
}

export default Standings
