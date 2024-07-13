// src/components/Header.js
import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl">Trip.com</h1>
      <div className="space-x-4">
        <button className="bg-blue-800 p-2 rounded">Sign In / Register</button>
      </div>
    </header>
  );
};

export default Header;
