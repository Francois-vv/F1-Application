import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useTransition, animated } from 'react-spring'
import NavigationMenu from './NavigationMenu'

function Navigation() {
    const [showMenu, setShowMenu] = useState(false)

    const maskTransitions = useTransition(showMenu, null, {
        from: { position: 'absolute', opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    })

    const menuTransitions = useTransition(showMenu, null, {
        from: { opacity: 0, transform: 'translateX(-100%)' },
        enter: { opacity: 1, transform: 'translateX(0%)' },
        leave: { opacity: 0, transform: 'translateX(-100%)' },
    })

    return (
        <nav>
            <span className="text-xl text-right text-tomato-700">
                <FontAwesomeIcon
                    icon={faBars}
                    onClick={() => setShowMenu(!showMenu)}
                />
            </span>
            <div className="text-left">
                {maskTransitions.map(
                    ({ item, key, props }) =>
                        item && (
                            <animated.div
                                key={key}
                                style={props}
                                className="fixed top-0 left-0 z-50 w-full h-screen bg-black-t-50"
                                onClick={() => setShowMenu(false)}
                            ></animated.div>
                        )
                )}
                {menuTransitions.map(
                    ({ item, key, props }) =>
                        item && (
                            <animated.div
                                key={key}
                                style={props}
                                className="fixed top-0 left-0 z-50 w-3/5 h-full bg-gray-900 shadow"
                            >
                                <NavigationMenu
                                    closeMenu={() => setShowMenu(false)}
                                />
                            </animated.div>
                        )
                )}
            </div>
        </nav>
    )
}

export default Navigation
