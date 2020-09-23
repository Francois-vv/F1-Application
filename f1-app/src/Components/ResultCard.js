import React from 'react'
import { findFlagUrlByNationality } from 'country-flags-svg'

function ResultCard(props){

    const flagUrl = findFlagUrlByNationality(props.result.Driver.nationality)
    let content = null
    let flContent = null
    let raceStatus = props.result.status
    let flRank = null

    // Check if a fastest lap exists
    if (props.result.FastestLap){
        flRank = parseInt(props.result.FastestLap.rank)
        // Check if the driver set the fastest lap of the race
        if (flRank === 1)
        {
            flContent =
                <p className="text-base font-semibold text-left text-purple-500">
                    {props.result.FastestLap.Time.time}
                </p>
        } else {
            flContent =
                <p className="text-base font-normal text-left">
                    {props.result.FastestLap.Time.time}
                </p>
        }
    } else {
        flContent =
        <p className="text-base font-normal text-left">
            N/A
        </p>
    }

    // Check if driver has completed the race
    if (raceStatus === "Finished"){
        content =
            <div className="overflow-hidden border-b border-gray-600">
                <div className="flex flex-row w-screen p-3">
                    <div className="w-3/4 ">
                        <img src={flagUrl} alt={props.result.Driver.nationality}
                        className="float-left object-scale-down object-center w-10 h-10 pb-2 mr-2"></img>
                        <h3 className="text-xl font-bold text-left">
                            {props.result.Driver.givenName} {props.result.Driver.familyName} #{props.result.number}
                        </h3>
                    </div>
                    <div className="w-1/4 ">
                        <h3 className="pr-6 text-xl font-bold text-right">
                            {props.result.position}
                        </h3>
                    </div>
                </div>
                <div className="p-3 mb-1 ml-2 mr-2 bg-gray-700 rounded-md">
                    <h4 className="pb-1 text-lg font-bold text-center">
                        {props.result.Constructor.name}
                    </h4>
                    <div className="flex flex-row">
                        <div className="w-1/2" >
                            <p className="text-base font-bold">
                                Time:
                            </p>
                            <p className="text-base font-bold">
                                Grid Position:
                            </p>
                            <p className="text-base font-bold">
                                Fastest Lap:
                            </p>
                            <p className="text-base font-bold">
                                Laps Completed:
                            </p>
                            <p className="text-base font-bold">
                                Points:
                            </p>
                        </div>
                        <div className="w-1/2" >
                            <p className="text-base font-normal">
                                {props.result.Time.time}
                            </p>
                            <p className="text-base font-normal">
                                {props.result.grid}
                            </p>
                            {flContent}
                            <p className="text-base font-normal">
                                {props.result.laps}
                            </p>
                            <p className="text-base font-normal">
                                {props.result.points}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="p-2 text-center">
                    <button className="w-full px-4 py-2 font-semibold text-white border border-black rounded-md bg-tomato-900 hover:bg-black">
                        View Driver
                    </button>
                </div>
            </div>
    } else {
        content =
            <div className="overflow-hidden border-b border-gray-600">
                <div className="flex flex-row w-screen p-3">
                    <div className="w-3/4 ">
                        <img src={flagUrl} alt={props.result.Driver.nationality}
                        className="float-left object-scale-down object-center w-10 h-10 pb-2 mr-2"></img>
                        <h3 className="pb-1 text-xl font-bold text-left">
                            {props.result.Driver.givenName} {props.result.Driver.familyName} #{props.result.number}
                        </h3>
                    </div>
                    <div className="w-1/4 ">
                        <h3 className="pb-1 pr-6 text-xl font-bold text-right">
                            {props.result.position}
                        </h3>
                    </div>
                </div>
                <div className="p-3 mb-1 ml-2 mr-2 bg-gray-700 rounded-md">
                    <h4 className="pb-1 text-lg font-bold text-center">
                        {props.result.Constructor.name}
                    </h4>
                    <div className="flex flex-row">
                        <div className="w-1/2" >
                            <p className="text-base font-bold">
                                Status:
                            </p>
                            <p className="text-base font-bold">
                                Grid Position:
                            </p>
                            <p className="text-base font-bold">
                                Fastest Lap:
                            </p>
                            <p className="text-base font-bold">
                                Laps Completed:
                            </p>
                            <p className="text-base font-bold">
                                Points:
                            </p>
                        </div>
                        <div className="w-1/2" >
                            <p className="text-base font-normal">
                                {props.result.status}
                            </p>
                            <p className="text-base font-normal">
                                {props.result.grid}
                            </p>
                            {flContent}
                            <p className="text-base font-normal">
                                {props.result.laps}
                            </p>
                            <p className="text-base font-normal">
                                {props.result.points}
                            </p>
                            </div>
                        </div>
                </div>
                <div className="p-2 text-center">
                    <button className="w-full px-4 py-2 font-semibold text-white border border-black rounded-md bg-tomato-900 hover:bg-black">
                        View Driver
                    </button>
                </div>
            </div>

    }
    return(
        <div>
            {content}
        </div>
    )
}

export default ResultCard