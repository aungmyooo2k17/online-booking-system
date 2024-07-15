import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faTimes } from "@fortawesome/free-solid-svg-icons";

const SuccessModal = ({ message, onClose }) => {
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center">
        <div className="fixed inset-0 bg-gray-500 opacity-75"></div>
        <div className="relative bg-white rounded-lg shadow-lg max-w-md w-full p-4">
          <div className="flex justify-between mb-4">
            <h2 className="text-lg font-bold text-gray-800">Success</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-600 focus:outline-none"
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
          <div className="text-center">
            <FontAwesomeIcon
              icon={faCheckCircle}
              className="text-green-500 text-4xl mb-4"
            />
            <p className="text-gray-700">{message}</p>
          </div>
          <div className="mt-6">
            <button
              onClick={onClose}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
