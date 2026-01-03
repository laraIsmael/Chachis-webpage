import React, { useState } from "react";

interface BookingModalProps {
  selectedDate: Date;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({
  selectedDate,
  onClose,
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-orange-50 rounded-lg shadow-lg max-w-md w-full p-6 border border-yellow-200">
        {/* Header */}
        <h2 className="text-xl font-semibold text-yellow-800 mb-2">
          Booking Details
        </h2>
        <p className="text-sm text-yellow-700 mb-4">
          Appointment date: <strong>{selectedDate.toDateString()}</strong>
        </p>

        {/* Form */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-yellow-900 mb-1">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-md border border-yellow-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-700"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-yellow-900 mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-md border border-yellow-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-700"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-yellow-900 mb-1">
              What’s bringing you in?
            </label>
            <textarea
              rows={4}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full rounded-md border border-yellow-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-700"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 text-yellow-800 hover:underline"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              console.log({ name, email, notes, selectedDate });
              onClose();
            }}
            className="px-4 py-2 bg-teal-800 text-orange-50 rounded-md hover:bg-teal-700 transition"
          >
            Request Booking
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
