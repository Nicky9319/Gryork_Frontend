import React from "react";

const Section = ({ title, icon, items, titleSize = "text-2xl", iconSize = "text-3xl", itemSize = "text-lg" }) => {
  return (
    <div className="mb-8">
      <div className={`flex items-center ${titleSize} mb-6`}>
        <span role="img" aria-label={title} className={`mr-3 ${iconSize}`}>
          {icon}
        </span>
        <strong>{title}</strong>
      </div>
      <ul className={`list-none pl-4 space-y-4 ${itemSize}`}>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Section;
