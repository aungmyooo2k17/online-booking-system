// src/components/Filters.js
import React from 'react';

const Filters = () => {
  return (
    <div className="bg-white p-4 shadow-md">
      <h2 className="text-xl">Filters</h2>
      <div>
        <h3 className="text-lg">Supplier</h3>
        <div className="space-y-2">
          {['Thrifty', 'Hertz', 'Avis'].map((supplier, index) => (
            <div key={index} className="flex items-center">
              <input type="checkbox" id={supplier} name={supplier} />
              <label htmlFor={supplier} className="ml-2">{supplier}</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filters;
