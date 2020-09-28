import React from 'react'
import { Link } from 'react-router-dom'

function RaceCard(props) {
    let content = null

    let currentDate = new Date()

    let yesterday =
        currentDate.getFullYear() +
        '-' +
        (currentDate.getMonth() + 1) +
        '-' +
        (currentDate.getDate() - 1)

    // Temporary code for appending zeroes to date
    // Will get rid of this if I find a better way to do it
    if (currentDate.getMonth() + 1 < 10 && currentDate.getDate() - 1 < 10) {
        yesterday =
            currentDate.getFullYear() +
            '-' +
            0 +
            (currentDate.getMonth() + 1) +
            '-' +
            0 +
            (currentDate.getDate() - 1)
    } else if (currentDate.getMonth() + 1 < 10) {
        yesterday =
            currentDate.getFullYear() +
            '-' +
            0 +
            (currentDate.getMonth() + 1) +
            '-' +
            (currentDate.getDate() - 1)
    } else if (currentDate.getDate() < 10) {
        yesterday =
            currentDate.getFullYear() +
            '-' +
            (currentDate.getMonth() + 1) +
            '-' +
            0 +
            (currentDate.getDate() - 1)
    }

    content = (
        <div className="mb-4 overflow-hidden bg-gray-700 rounded-md">
            <div className="p-3">
                <h3 className="mb-2 text-xl font-bold">
                    {props.race.raceName}
                </h3>
                <div className="font-semibold text-l">
                    {props.race.Circuit.circuitName}
                    <p className="text-base font-normal">
                        Date: {props.race.date}
                    </p>
                </div>
            </div>
        </div>
    )
    //If the race has been completed - link to the race results
    if (props.race.date <= yesterday) {
        content = (
            <Link to={`/results/${props.race.season}/${props.race.round}`}>
                <div className="mb-4 overflow-hidden bg-gray-700 rounded-md">
                    <div className="p-3">
                        <h3 className="mb-2 text-xl font-bold">
                            {props.race.raceName}
                        </h3>
                        <div className="font-semibold text-l">
                            {props.race.Circuit.circuitName}
                            <p className="text-base font-normal">
                                Date: {props.race.date}
                            </p>
                        </div>
                    </div>
                </div>
            </Link>
        )
    }

    return <div>{content}</div>
}

export default RaceCard
