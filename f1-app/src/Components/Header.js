import React from 'react'
import Navigation from './Navigation'

function Header() {
    return(
        <header className="fixed flex flex-row items-center justify-between w-full p-3 bg-gray-900 shadow-sm">
            <div className="w-1/3">
                <span className="text-xl font-bold text-tomato-700">
                    F1
                </span>
            </div>
            <div className="w-1/3 text-xl font-bold text-center">
                Test
            </div>
            <div className="w-1/3 text-right">
                <Navigation />
            </div>
        </header>
    )
}

export default Header