import React from "react";
import { useForm } from "react-hook-form";
import Form from "../Common/Form";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import {
  faGear,
  faGears,
  faRoad,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { faGasPump } from "@fortawesome/free-solid-svg-icons/faGasPump";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import { useAddBookingMutation } from "../../services/bookings";

const BookingModal = ({ car, currentUser, onClose, onSuccess }) => {
  const [addBooking] = useAddBookingMutation();

  const initialState = {
    startDate: "",
    endDate: "",
    car: car.id,
    customer: currentUser.id,
  };

  const methods = useForm({ defaultValues: initialState });
  const { reset, watch } = methods;
  const startDate = watch("start_date");
  const endDate = watch("end_date");

  const fields = [
    {
      label: "Start Date",
      type: "date",
      name: "start_date",
      validation: {
        required: "Start date is required",
        validate: (value) =>
          new Date(value) >= new Date() || "Start date cannot be in the past",
      },
    },
    {
      label: "End Date",
      type: "date",
      name: "end_date",
      validation: {
        required: "End date is required",
        validate: (value) =>
          new Date(value) > new Date(startDate) ||
          "End date must be after start date",
      },
    },
  ];

  const handleSubmit = (formState) => {
    
    // Handle booking logic here, e.g., call an API to book the car

    addBooking(formState).then((response) => {
      if (response.data) {
        reset();
        onSuccess();
      }
    });
  };

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center">
        <div className="fixed inset-0 bg-gray-500 opacity-75"></div>
        <div className="relative bg-white rounded-lg shadow-lg max-w-md w-full p-4">
          <div className="flex justify-between mb-4">
            <h2 className="text-lg font-bold text-gray-800">
              {car.model_name}
            </h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-600 focus:outline-none"
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
          <img
            src={car.image}
            alt={car.model_name}
            className="w-full h-48 object-cover mb-4"
          />
          <h3 className="pb-4 text-lg font-semibold text-green-500">
            SGD 120 / day
          </h3>

          <div className="container bg-green-50 p-4 rounded">
            <div className="grid grid-cols-2">
              <div>
                <FontAwesomeIcon icon={faRoad} />
                <span className="ml-2 text-gray-500">4 seaters</span>
              </div>
              <div>
                <FontAwesomeIcon icon={faGasPump} />
                <span className="ml-2 text-gray-500">Petrol</span>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2">
              <div>
                <FontAwesomeIcon icon={faCalendar} />
                <span className="ml-2 text-gray-500">2000</span>
              </div>
              <div>
                <FontAwesomeIcon icon={faGears} />
                <span className="ml-2 text-gray-500">2000 hp</span>
              </div>
            </div>
          </div>

          <Form
            onSubmit={handleSubmit}
            methods={methods}
            initialState={initialState}
            submitButtonText="Book"
            fields={fields}
          />
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
