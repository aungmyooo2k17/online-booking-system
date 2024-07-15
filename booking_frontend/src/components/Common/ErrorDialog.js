import React from "react";

const ErrorDialog = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white p-4 rounded shadow-lg">
        <p className="text-red-600">{message}</p>
        <button
          onClick={onClose}
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mt-2"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ErrorDialog;
