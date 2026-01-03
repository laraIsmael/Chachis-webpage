import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../styles/calendar.css"; // optional: override calendar colors
import BookingModal from "../components/BookingModal";

const Schedule: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [showModal, setShowModal] = useState(false);

  // Handle date selection from calendar
  const handleDateChange = (
    value: Date | Date[],
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    // If a range is returned, pick the first date
    const date = Array.isArray(value) ? value[0] : value;
    setSelectedDate(date);
    setShowModal(true);
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-center text-yellow-800 mb-4">
        Book Your Appointment
      </h1>

      {/* Intro text */}
      <p className="text-center text-yellow-900 mb-10 max-w-xl mx-auto">
        Select a date below to begin scheduling your session. Available times
        will sync with my Google Calendar.
      </p>

      {/* Calendar */}
      <div className="bg-orange-50 border border-yellow-200 rounded-lg shadow-sm p-6 flex justify-center">
        <Calendar onChange={handleDateChange} value={selectedDate} />
      </div>

      {/* Modal for booking info */}
      {showModal && selectedDate && (
        <BookingModal
          selectedDate={selectedDate}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default Schedule;
