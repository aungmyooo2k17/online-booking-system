// src/components/CarCard.js
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { faGear, faGears, faRoad } from "@fortawesome/free-solid-svg-icons";
import { faGasPump } from "@fortawesome/free-solid-svg-icons/faGasPump";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import BookingModal from "./BookingModal";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, openModal } from "../../services/modalSlice";
import SuccessModal from "./SuccessModal";
import { useNavigate } from "react-router-dom";

const RentalCard = ({ car }) => {
  const currentUser  = useSelector((state) => state.currentUser.currentUser);
  const [showSuccessModal, setShowSuccessModal] = useState(false); // State for controlling SuccessModal visibility
  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRentNowClick = () => {
    if(!currentUser) {
      navigate("/login");
    }
    setModalOpen(true);
    dispatch(openModal());
  };

  const closeButton = () => {
    setModalOpen(false);
    dispatch(closeModal());
  };

  const closeSuccess = () => {
    setModalOpen(false);
    setShowSuccessModal(true);
  };

  const successModalClose = () => {
    setShowSuccessModal(false);
    dispatch(closeModal());
  };

  return (
    <div className="flex flex-col lg:flex-row bg-white rounded-lg shadow-md overflow-hidden mb-4">
      <img
        src={car.image}
        alt={car.model_name}
        className="w-full lg:w-1/3 h-48 object-cover"
      />
      <div className="p-4 ml-4 flex-1">
        <div className="flex items-center justify-between">
          <h3 className="pb-4 text-xs font-semibold text-green-500">SGD 120</h3>
          <button
            onClick={handleRentNowClick}
            className="px-4 py-2 text-xs text-green-500 border border-green-500 rounded"
          >
            RENT NOW
          </button>
        </div>
        <span className={`text-lg font-semibold text-gray-900`}>BMW i3</span>
        <div className="pt-4 grid grid-cols-2">
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

      {modalOpen && <BookingModal currentUser={currentUser} car={car} onClose={closeButton} onSuccess={closeSuccess} />}
      {showSuccessModal && <SuccessModal message="Your booking has been successfully submitted!" onClose={successModalClose} />}
    </div>
  );
};

export default RentalCard;
