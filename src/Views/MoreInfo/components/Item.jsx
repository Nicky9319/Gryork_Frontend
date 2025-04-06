import React from "react";

const Item = ({ icon, title, description }) => {
  return (
    <div className="flex items-start mb-6">
      <img src={icon} alt={`${title} Icon`} className="w-8 h-8 mr-4" />
      <div>
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default Item;
