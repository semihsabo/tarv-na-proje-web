import React from "react";
import { FaTimes } from "react-icons/fa";

export default function UpgradePlanModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center px-4 sm:px-6">
      <div className="bg-white p-6 sm:p-8 rounded-lg w-full max-w-md relative shadow-xl">
        {/* Kapatma butonu */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-black transition"
          aria-label="Close modal"
        >
          <FaTimes />
        </button>

        <h2 className="text-xl sm:text-2xl font-semibold mb-3">
          Update Payment Method
        </h2>
        <p className="text-sm text-gray-500 mb-5">
          Add or update your payment information below.
        </p>

        <form className="space-y-4 text-sm">
          {/* Kart Numarası */}
          <div>
            <label className="block text-gray-700 mb-1">Card Number</label>
            <input
              type="text"
              placeholder="1234 5678 9012 3456"
              className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Tarih ve CVC */}
          <div className="flex flex-col sm:flex-row gap-2">
            <div className="flex-1">
              <label className="block text-gray-700 mb-1">Expiry Date</label>
              <input
                type="text"
                placeholder="MM/YY"
                className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div className="flex-1">
              <label className="block text-gray-700 mb-1">CVC</label>
              <input
                type="text"
                placeholder="123"
                className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          {/* İsim */}
          <div>
            <label className="block text-gray-700 mb-1">Cardholder Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Butonlar */}
          <div className="flex justify-end gap-2 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm text-gray-600 border border-gray-300 rounded hover:bg-gray-100 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-black text-white px-4 py-2 text-sm rounded hover:bg-gray-900 transition"
            >
              Update Payment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
