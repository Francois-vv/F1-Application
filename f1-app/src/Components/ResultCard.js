import React from 'react'

function ResultCard(props){

    console.log(props.result.FastestLap.rank)

    let flRank = parseInt(props.result.FastestLap.rank)
    let flContent = null
    // Check if drivers fastest lap is the fastest lap of the race
    if (flRank === 1)
    {
        flContent =
            <p className="text-base font-normal text-left">
                <span className="font-bold">Fastest Lap: </span>
                <span className="font-semibold text-purple-500">
                    {props.result.FastestLap.Time.time}
                </span>
            </p>
    } else {
        flContent =
            <p className="text-base font-normal text-left">
                <span className="font-bold">Fastest Lap: </span>
                {props.result.FastestLap.Time.time}
            </p>
    }

    return(
        <div className="overflow-hidden border-b border-gray-600">
            <div className="flex flex-row w-screen p-3">
                <div className="w-1/2 ">
                    <h3 className="pb-2 text-xl font-bold text-left">
                        {props.result.Driver.givenName} {props.result.Driver.familyName}
                    </h3>
                        <p className="pb-1 text-lg font-bold">
                            {props.result.Constructor.name}
                        </p>
                        <p className="text-base font-normal">
                            <span className="font-bold">
                                Time:
                            </span> P{props.result.grid}
                        </p>
                        <p className="text-base font-normal">
                            <span className="font-bold">
                                Started:
                            </span> P{props.result.grid}
                        </p>
                </div>

                {/* Final race position displayed on the bottom left */}
                <div className="w-1/2 ">
                    <h3 className="pb-2 pr-6 text-xl font-bold text-right">
                        {props.result.position}
                    </h3>
                    <p className="pb-1 text-lg font-bold">
                            #{props.result.number}
                    </p>
                    {flContent}
                </div>

            </div>
        </div>


    )
}

export default ResultCard