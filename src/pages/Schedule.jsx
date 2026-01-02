import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function Schedule() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Book Your Appointment</h1>
      <Calendar />
      <p className="mt-4">Available times will sync with my Google Calendar.</p>
    </div>
  );
}
