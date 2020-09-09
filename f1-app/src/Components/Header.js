import React from 'react'
import Navigation from './Navigation'

function Header() {
    return(
        <header className="fixed flex items-center justify-between w-full p-3 bg-gray-900 shadow-sm">
            <span className="text-xl font-bold text-red-700">
                F1
            </span>

            <Navigation />
        </header>
    )
}

export default Header