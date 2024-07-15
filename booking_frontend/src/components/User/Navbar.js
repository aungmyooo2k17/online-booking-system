import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faUser } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

const Navbar = ({ handleFilterClick, handleLogout }) => {
  const currentUser = useSelector((state) => state.currentUser.currentUser);
  const location = useLocation();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Check if the current location is the home page ("/")
  const isHomePage = location.pathname === "/";

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <div className="flex items-center">
        <Link to="/">
          <h1 className="text-xl font-bold mr-4">Car Rentals</h1>
        </Link>
      </div>
      <div className="flex items-center">
        {isHomePage && (
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded lg:hidden mr-4"
            onClick={handleFilterClick}
          >
            <FontAwesomeIcon icon={faFilter} /> Filter
          </button>
        )}
        {currentUser && (
          <div className="relative">
            <button
              className="flex items-center text-gray-800 hover:text-blue-600 transition duration-300"
              onClick={toggleDropdown}
            >
              <FontAwesomeIcon icon={faUser} className="mr-2" />
              <span>Account</span>
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-md z-10">
                <Link
                  to="/mybookings"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  onClick={() => setDropdownOpen(false)}
                >
                  My Bookings
                </Link>
                <button
                  className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
                  onClick={() => {
                    handleLogout();
                    setDropdownOpen(false);
                  }}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
        {!currentUser && (
          <Link
            to="/login"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
