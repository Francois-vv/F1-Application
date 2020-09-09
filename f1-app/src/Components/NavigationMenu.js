import React from "react";
import { Link } from "react-router-dom";

function NavigationMenu(props) {
  return (
    <div>
      <div className="p-3 text-xl font-bold text-red-700">F1</div>
      <div className="min-h-screen bg-gray-800">
        <ul>
          <li>
            <Link
              to="/"
              className=
              "block p-3 font-semibold text-red-600"
              onClick={props.closeMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="block p-3 font-semibold text-red-600"
              onClick={props.closeMenu}
            >
              About
            </Link>
          </li>
        </ul>
      </div>

    </div>
  );
}

export default NavigationMenu;
