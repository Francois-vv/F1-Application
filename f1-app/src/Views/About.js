import React from 'react'

function About() {
    return (
        <div className="h-auto">
            <h3 className="pb-3 text-2xl font-bold text-center">
                Development Information
            </h3>
            <div className="flex p-4 bg-gray-700 rounded-md">
                <ul className="list-inside">
                    <li className="pb-2">
                        This application is being developed to display the
                        current F1 schedule, race results and driver standings.
                    </li>
                    <li className="pb-2">
                        Additional features may be added as development
                        continues.
                    </li>
                    <li className="pb-2">
                        Please note that this project is for learning purposes
                        only.
                    </li>
                    <li className="pb-2">
                        Using the Ergast Developer API as the data source.
                    </li>
                    <li className="pb-2">
                        URL:{' '}
                        <a
                            className="text-blue-600 underline "
                            href="https://ergast.com/mrd/"
                        >
                            https://ergast.com/mrd/
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default About
