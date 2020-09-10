import React from 'react'

function ResultCard(props){
    return(
        <div className="mb-2 overflow-hidden border-b border-gray-600 rounded">
            <div className="p-3">
                <h3 className="mb-3 text-xl font-bold">
                    {props.result.Driver.givenName} {props.result.Driver.familyName}
                </h3>
                <div className="font-semibold text-l">
                    <p className="text-base font-normal">Started: P{props.result.grid}</p>
                </div>
                <h3 className="mb-1 text-2xl font-bold text-right">
                    {props.result.position}
                </h3>
            </div>
        </div>


    )
}

export default ResultCard