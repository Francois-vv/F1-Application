import React from 'react'
import {Link} from 'react-router-dom'

function RaceCard(props){
    return(
        <Link to={`/results/${props.race.season}/${props.race.round}`}>
            <div className="mb-4 overflow-hidden border border-gray-600 rounded">
            <div className="p-3">
                <h3 className="mb-2 text-xl font-bold">
                    {props.race.raceName}
                </h3>
                <div className="font-semibold text-l">
                    {props.race.Circuit.circuitName}
                    <p className="text-base font-normal">Date: {props.race.date}</p>
                </div>
            </div>
        </div>
        </Link>


    )
}

export default RaceCard