import React from "react";
import { FaTimes } from "react-icons/fa";

export default function UpgradePlanModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg w-full max-w-md relative shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-black"
        >
          <FaTimes />
        </button>
        <h2 className="text-xl font-semibold mb-4">Update Payment Method</h2>
        <p className="text-sm text-gray-500 mb-4">
          Add or update your payment information.
        </p>
        <form className="space-y-4">
          <div>
            <label className="block text-sm text-gray-700 mb-1">
              Card Number
            </label>
            <input
              type="text"
              placeholder="1234 5678 9012 3456"
              className="w-full border px-3 py-2 rounded outline-none"
            />
          </div>
          <div className="flex gap-2">
            <div className="flex-1">
              <label className="block text-sm text-gray-700 mb-1">
                Expiry Date
              </label>
              <input
                type="text"
                placeholder="MM/YY"
                className="w-full border px-3 py-2 rounded outline-none"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm text-gray-700 mb-1">CVC</label>
              <input
                type="text"
                placeholder="123"
                className="w-full border px-3 py-2 rounded outline-none"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-1">
              Cardholder Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full border px-3 py-2 rounded outline-none"
            />
          </div>
          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm text-gray-600 border rounded hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-black text-white px-4 py-2 text-sm rounded hover:opacity-90"
            >
              Update Payment Method
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
