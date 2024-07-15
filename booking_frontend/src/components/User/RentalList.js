import React from "react";
import RentalCard from "./RentalCard";
import { useGetCarsQuery } from "../../services/cars";

const RentalList = () => {
  const { data, error, isLoading, isSuccess, isError } = useGetCarsQuery();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  const renderCars = () => {
    if (isSuccess && data) {
      return data.map((car) => <RentalCard car={car} key={car.id} />);
    } else {
      return <p>No cars available</p>; // Handle case when data is empty or null
    }
  };

  return (
    <div className="w-full lg:w-4/4 lg:ml-8">
      <h1 className="text-2xl font-bold mb-4">Available Cars</h1>
      <div className="grid gap-4">
        {renderCars()}
      </div>
    </div>
  );
};

export default RentalList;
