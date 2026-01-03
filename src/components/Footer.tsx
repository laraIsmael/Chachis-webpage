import React from "react";
import { NavLink } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-orange-100 border-t border-yellow-200">
      <div className="max-w-6xl mx-auto px-6 py-10">
        {/* Top section */}
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Brand / About */}
          <div>
            <h3 className="text-lg text-yellow-900 font-semibold mb-2">
              Chachi
            </h3>
            <p className="text-yellow-700 max-w-sm">
              Holistic bodywork and compassionate end-of-life support, rooted in
              presence, care, and deep listening.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-yellow-900 font-medium mb-2">Explore</h4>
            <ul className="space-y-1 text-yellow-700">
              <li>
                <NavLink to="/" className="hover:text-yellow-900">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="hover:text-yellow-900">
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink to="/schedule" className="hover:text-yellow-900">
                  Book a Session
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-yellow-900 font-medium mb-2">Get in Touch</h4>
            <p className="text-yellow-700">Email: hello@chachi.com</p>
            <p className="text-yellow-700">Serving locally & remotely</p>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-teal-800 mt-8 pt-4 text-center text-sm text-teal-800">
          © {new Date().getFullYear()} Chachi. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
