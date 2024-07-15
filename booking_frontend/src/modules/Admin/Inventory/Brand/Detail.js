import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CarDetail = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);

  useEffect(() => {
    // Fetch car details from your API
    const fetchCar = async () => {
      // Replace with your API call
      const response = await fetch(`/api/cars/${id}`);
      const data = await response.json();
      setCar(data);
    };

    fetchCar();
  }, [id]);

  if (!car) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Car Details</h1>
      <div className="bg-white p-4 rounded-md shadow-md">
        <p><strong>Model Name:</strong> {car.model_name}</p>
        <p><strong>Model Year:</strong> {car.model_year}</p>
        <p><strong>Brand:</strong> {car.brand.name}</p>
        <p><strong>Type:</strong> {car.type}</p>
        <p><strong>Number of Seats:</strong> {car.no_of_seater}</p>
        <p><strong>Engine (Litre):</strong> {car.engine_litre}</p>
        <p><strong>Price:</strong> ${car.price}</p>
      </div>
    </div>
  );
}

export default CarDetail;
