import React from 'react'
import { findFlagUrlByNationality } from 'country-flags-svg'

function StandingCard(props) {
    const flagUrl = findFlagUrlByNationality(props.standing.Driver.nationality)
    let content = null

    content = (
        <div className="overflow-hidden border-b border-gray-600">
            <div className="flex flex-row w-screen p-3">
                <div className="w-3/4 ">
                    <img
                        src={flagUrl}
                        alt={props.standing.Driver.nationality}
                        className="float-left object-scale-down object-center w-10 h-10 pb-2 mr-2"
                    ></img>
                    <h3 className="text-xl font-bold text-left">
                        {props.standing.Driver.givenName}{' '}
                        {props.standing.Driver.familyName} #
                        {props.standing.Driver.permanentNumber}
                    </h3>
                </div>
                <div className="w-1/4 ">
                    <h3 className="pr-6 text-xl font-bold text-right">
                        {props.standing.position}
                    </h3>
                </div>
            </div>
            <div className="p-3 mb-1 ml-2 mr-2 bg-gray-700 rounded-md">
                <h4 className="pb-1 text-lg font-bold text-center">
                    {props.standing.Constructors[0].name}
                </h4>
                <div className="flex flex-row">
                    <div className="w-1/2">
                        <p className="text-base font-bold">Points:</p>
                        <p className="text-base font-bold">Wins:</p>
                    </div>
                    <div className="w-1/2">
                        <p className="text-base font-normal">
                            {props.standing.points}
                        </p>
                        <p className="text-base font-normal">
                            {props.standing.wins}
                        </p>
                    </div>
                </div>
            </div>
            <a href={props.standing.Driver.url}>
                <div className="p-2 text-center">
                    <button className="w-full px-4 py-2 font-semibold text-white border border-black rounded-md bg-tomato-900 hover:bg-black">
                        Driver Wikipedia
                    </button>
                </div>
            </a>
        </div>
    )
    return <div>{content}</div>
}

export default StandingCard
