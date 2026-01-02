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
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow flex flex-col">
      {imageUrl && (
        <img
          src={imageUrl}
          alt={title}
          className="rounded-t-lg mb-4 w-full h-40 object-cover"
        />
      )}

      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      {description && <p className="text-gray-500 mb-2">{description}</p>}
      <p className="text-gray-600 mb-1">Duration: {duration}</p>
      <p className="text-gray-600 mb-4">Price: {price}</p>

      <button
        onClick={() => navigate("/schedule")}
        className="mt-auto bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        Book Now
      </button>
    </div>
  );
};

export default ServiceCard;
