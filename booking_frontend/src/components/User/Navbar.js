import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ handleFilterClick }) => {
  const location = useLocation();

  // Check if the current location is the home page ("/")
  const isHomePage = location.pathname === "/";

  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <div className="flex items-center">
        <Link to="/">
          <h1 className="text-xl font-bold mr-4">Car Rentals</h1>
        </Link>

        <Link
          to="/bookings"
          className="text-gray-800 hover:text-blue-600 transition duration-300"
        >
          My Bookings
        </Link>
      </div>
      {isHomePage && (
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded lg:hidden"
          onClick={handleFilterClick}
        >
          <FontAwesomeIcon icon={faFilter} /> Filter
        </button>
      )}
    </nav>
  );
};

export default Navbar;
