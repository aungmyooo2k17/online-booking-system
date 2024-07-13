// src/components/CarCard.js
import React from "react";
import { Link } from "react-router-dom";

const CarCard = ({ car }) => {
  return (
    <div className="border p-4 rounded shadow-md flex space-x-4">
      <img src={car.image} alt={car.model} className="w-1/3 rounded" />
      <div className="flex flex-col justify-between">
        <div>
          <h2 className="text-xl">{car.model}</h2>
          <p className="text-gray-600">{car.type}</p>
          <p className="text-blue-600">${car.price} / day</p>
        </div>
        <Link to={`/car/${car.id}`}>
          <button className="bg-blue-600 text-white p-2 rounded">
            Book Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CarCard;
