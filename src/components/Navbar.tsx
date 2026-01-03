import React from "react";
import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-orange-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Name */}
        <NavLink to="/" className="text-xl font-semibold text-yellow-700">
          Healing Through Feeling with Chachi
        </NavLink>

        {/* Navigation Links */}
        <div className="flex gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-yellow-700 hover:text-yellow-900 transition ${
                isActive ? "font-semibold text-yellow-900" : ""
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `text-yellow-700 hover:text-yellow-900 transition ${
                isActive ? "font-semibold text-yellow-900" : ""
              }`
            }
          >
            Contact
          </NavLink>

          <NavLink
            to="/schedule"
            className={({ isActive }) =>
              `text-yellow-700 hover:text-yellow-900 transition ${
                isActive ? "font-semibold text-yellow-900" : ""
              }`
            }
          >
            Book a Session
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
