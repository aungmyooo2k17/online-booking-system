// src/components/CarTypes.js
import React from 'react';

const carTypes = [
  { type: 'Small', price: 64.36 },
  { type: 'Medium & Large', price: 68.38 },
  { type: 'Premium', price: 132.58 },
  { type: 'SUV', price: 72.41 },
  { type: 'Van', price: 169.25 },
];

const CarTypes = () => {
  return (
    <div className="bg-white p-4 shadow-md flex space-x-4 overflow-x-auto">
      {carTypes.map((carType, index) => (
        <div key={index} className="p-4 border rounded">
          <h3>{carType.type}</h3>
          <p>From S${carType.price}</p>
        </div>
      ))}
    </div>
  );
};

export default CarTypes;
