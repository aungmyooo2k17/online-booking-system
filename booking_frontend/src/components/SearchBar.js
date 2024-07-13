// src/components/SearchBar.js
import React from 'react';

const SearchBar = () => {
  return (
    <div className="bg-white p-4 shadow-md flex justify-between items-center">
      <input 
        type="text" 
        placeholder="Pick-up Location" 
        className="p-2 rounded border border-gray-400 w-1/3" 
      />
      <input 
        type="date" 
        className="p-2 rounded border border-gray-400" 
      />
      <input 
        type="date" 
        className="p-2 rounded border border-gray-400" 
      />
      <button className="bg-blue-600 text-white p-2 rounded">Search</button>
    </div>
  );
};

export default SearchBar;
