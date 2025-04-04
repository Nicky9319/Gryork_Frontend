import React from 'react';

const SpeedSection = () => {
  return (
    <section className="flex items-center justify-between max-w-[1200px] mx-auto py-16 px-8 gap-12 md:flex-row md:text-left md:py-8 md:px-4">
      <div className="flex-1">
        <h2 className="text-4xl font-bold text-[#b3d334] mb-8 leading-tight">
          Speed, transparency, and reliability you can trust
        </h2>
        <ul className="list-none">
          {[
            'CWC funds disbursed in days',
            'AI-driven automation from approvals to repayment',
            'Transparent processes to eliminate headaches'
          ].map((item, index) => (
            <li 
              key={index} 
              className="mb-6 text-xl relative pl-8 before:content-[''] before:absolute before:left-0 before:top-[6px] before:w-4 before:h-4 before:bg-[#b3d334] before:rounded-full"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      
      <div className="flex-1 flex justify-center">
        <div className="relative">
          <div className="feature-icon-bank">
            <img 
              src="src/Images/banking.svg" 
              alt="Banking" 
              className="w-[300px] h-[280px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeedSection;
