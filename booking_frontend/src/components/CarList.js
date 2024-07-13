// src/components/CarList.js
import React from 'react';
import CarCard from './CarCard';

const carData = [
  { id: '1', model: 'Chevrolet Spark', type: 'Small', price: 64.36, image: 'https://via.placeholder.com/150' },
  { id: '2', model: 'Toyota Corolla', type: 'Medium', price: 68.38, image: 'https://via.placeholder.com/150' },
  { id: '3', model: 'BMW 5 Series', type: 'Premium', price: 132.58, image: 'https://via.placeholder.com/150' },
];

const CarList = () => {
  return (
    <div className="p-4 space-y-4">
      {carData.map((car, index) => (
        <CarCard key={index} car={car} />
      ))}
    </div>
  );
};

export default CarList;
