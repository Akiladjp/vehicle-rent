import React from 'react';

const Alert = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded shadow-lg text-center w-80">
        <p className="text-lg font-semibold">{message}</p>
        <button
          className="mt-4 px-4 py-2 bg-yellow-300 text-black font-semibold rounded hover:bg-yellow-400"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Alert;
