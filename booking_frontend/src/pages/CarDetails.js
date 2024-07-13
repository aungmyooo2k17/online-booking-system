// src/pages/CarDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';

const carData = [
  { id: '1', model: 'Chevrolet Spark', type: 'Small', price: 64.36, image: 'https://via.placeholder.com/150', details: 'Some details about Chevrolet Spark' },
  { id: '2', model: 'Toyota Corolla', type: 'Medium', price: 68.38, image: 'https://via.placeholder.com/150', details: 'Some details about Toyota Corolla' },
  { id: '3', model: 'BMW 5 Series', type: 'Premium', price: 132.58, image: 'https://via.placeholder.com/150', details: 'Some details about BMW 5 Series' },
];

const CarDetails = () => {
  const { id } = useParams();
  const car = carData.find(c => c.id === id);

  if (!car) {
    return <div>Car not found</div>;
  }

  return (
    <div className="p-4">
      <img src={car.image} alt={car.model} className="w-full h-64 object-cover rounded" />
      <h2 className="text-2xl mt-4">{car.model}</h2>
      <p className="text-gray-600">{car.type}</p>
      <p className="text-blue-600">${car.price} / day</p>
      <p className="mt-4">{car.details}</p>
    </div>
  );
};

export default CarDetails;
