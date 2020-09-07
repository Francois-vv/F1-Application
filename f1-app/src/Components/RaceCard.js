import React from 'react'
import {Link} from 'react-router-dom'

function RaceCard(props){
    return(
        <Link to={`/results/${props.race.season}/${props.race.round}`}>
            <div className="border mb-4 rounded overflow-hidden">
            <div className="p-3">
                <h3 className="font-bold text-xl mb-3">
                    {props.race.raceName}
                </h3>
            </div>
        </div>
        </Link>


    )
}

export default RaceCard