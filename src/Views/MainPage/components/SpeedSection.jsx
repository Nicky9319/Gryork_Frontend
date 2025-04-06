import React from 'react';

const SpeedSection = () => {
  return (
    <>
      <section className="flex items-center justify-between max-w-[1400px] mx-auto py-16 gap-16 md:flex-row md:text-left md:py-19">
        <div className="flex-[1.2]">
          <h2 className="text-6xl font-bold text-[#268044] mb-8 leading-tight">
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
                className="mb-6 text-3xl relative pl-14 before:content-['✓'] before:absolute before:left-2 before:top-0 before:text-[#268044] before:text-3xl before:font-bold"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex-1 flex justify-end">
          <div className="relative">
            <div className="feature-icon-bank">
              <img
                src="src/Images/banking.svg"
                alt="Banking"
                className="w-[530px] h-[450px]"
              />
            </div>
          </div>
        </div>
      </section>


      <br /><br />

    </>
  );
};

export default SpeedSection;
