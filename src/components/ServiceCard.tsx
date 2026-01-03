import React from "react";
import { useNavigate } from "react-router-dom";

interface ServiceCardProps {
  title: string;
  duration: string;
  price: string;
  description?: string;
  imageUrl?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  duration,
  price,
  description,
  imageUrl,
}) => {
  const navigate = useNavigate();

  return (
    <div className="bg-emerald-50 rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow flex flex-col">
      {imageUrl && (
        <img
          src={imageUrl}
          alt={title}
          className="rounded-t-lg mb-4 w-full h-40 object-cover"
        />
      )}

      <h3 className="text-teal-900 text-xl font-semibold mb-2">{title}</h3>
      {description && <p className="text-teal-900 mb-2">{description}</p>}
      <p className="text-teal-600 mb-1">Duration: {duration}</p>
      <p className="text-teal-600 mb-4">Price: {price}</p>

      <button
        onClick={() => navigate("/schedule")}
        className="mt-auto bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-900 transition"
      >
        Book Now
      </button>
    </div>
  );
};

export default ServiceCard;
