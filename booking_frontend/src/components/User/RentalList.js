import React, { useState } from "react";
import RentalCard from "./RentalCard";
import { useGetCarsQuery } from "../../services/cars";
import FilterForm from "./FilterForm";
import { useSelector, useDispatch } from "react-redux";
import { closeModal, openModal } from "../../services/modalSlice";

const RentalList = () => {
  const [filters, setFilters] = useState({
    type: "",
    no_of_seater: "",
    engine_litre: "",
    model_year: "",
    price__lte: "",
  });

  const {
    data,
    refetch,
    error,
    isLoading,
    isSuccess,
    isError,
  } = useGetCarsQuery(filters);
  const modalOpen = useSelector((state) => state.modal.modalOpen);
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const dispatch = useDispatch();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  const renderCars = () => {
    if (isSuccess && data) {
      return data.map((car) => <RentalCard car={car} key={car.id} />);
    } else {
      return <p>No cars available</p>; // Handle case when data is empty or null
    }
  };

  const handleSubmitFilter = (formData) => {
    console.log(formData);
    const newFilters = {
      type: formData.type || "",
      no_of_seater: formData.no_of_seater || "",
      engine_litre: formData.engine_litre || "",
      model_year: formData.model_year || "",
      price__lte: formData.price || "",
    };

    setFilters(newFilters);
    refetch();
  };

  const handleFilterClick = () => {
    isFilterVisible ? dispatch(closeModal()) : dispatch(openModal());
    setIsFilterVisible(!isFilterVisible);
  };

  return (
    <div className="lg:p-8 flex flex-col lg:flex-row">
      <FilterForm handleFilterSubmit={handleSubmitFilter} />
      <div className="w-full lg:w-4/4 lg:ml-8">
        <h1 className="text-2xl font-bold mb-4">Available Cars</h1>
        <div className="grid gap-4">{renderCars()}</div>
      </div>
    </div>
  );
};

export default RentalList;
