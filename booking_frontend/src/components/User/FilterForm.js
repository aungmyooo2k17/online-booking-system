import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const FilterForm = ({ isVisible, handleFilterClick, close }) => {
  const years = Array.from(
    { length: new Date().getFullYear() - 1990 + 1 },
    (_, index) => 1990 + index
  );

  return (
    <div
      className={`fixed top-0 left-0 right-0 ${
        isVisible ? "z-20" : ""
      } bg-white p-4 transition-transform transform ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } lg:static lg:transform-none lg:w-1/3 lg:shadow-md`}
    >
      <div className="flex justify-between mb-4 lg:hidden">
        <h2 className="text-xl font-bold">Filters</h2>
        <button
          className="text-gray-500 hover:text-gray-600 focus:outline-none"
          onClick={close}
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
      <h2 className="text-xl font-bold mb-4 hidden lg:block">Filters</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Enter Model</label>
        <input
          type="text"
          className="block w-full mt-1 bg-[#f4f4f4] rounded-md shadow-sm p-2"
          placeholder="Enter model"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Vehicle Type</label>
        <select className="block w-full mt-1 bg-[#f4f4f4] rounded-md shadow-sm p-2">
          <option>Select type</option>
          <option value="petrol">Petrol</option>
          <option value="hybrid">Hybrid</option>
          <option value="electric">Electric</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Number of Seaters</label>
        <select className="block w-full mt-1 bg-[#f4f4f4] rounded-md shadow-sm p-2">
          <option>Select number of seats</option>
          <option>2</option>
          <option>4</option>
          <option>5</option>
          <option>7</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Engine Horsepower</label>
        <input
          type="number"
          className="block w-full mt-1 bg-[#f4f4f4] rounded-md shadow-sm p-2"
          min="100"
          max="10000"
          placeholder="Enter horsepower"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Select Year</label>
        <select className="block w-full mt-1 bg-[#f4f4f4] rounded-md shadow-sm p-2">
          <option>Select year</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={handleFilterClick}
      >
        Filter
      </button>
    </div>
  );
};

export default FilterForm;
