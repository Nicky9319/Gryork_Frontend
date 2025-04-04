import React, { useState, useEffect } from 'react';

const AIPoweredSection = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="flex flex-col px-4 py-8 sm:px-6 lg:px-16 xl:px-24 lg:py-16 bg-gray-50">
      {/* Mobile Layout: Heading and Image Side by Side */}
      {windowWidth <= 640 ? (
        <div className="flex flex-row justify-between items-center mb-6">
          <h1 className="font-bold text-gray-800 text-xl leading-tight mr-4 w-3/5">
            {/* Heading takes 60% width */}
            AI-Powered Financing &amp; Workforce Management for the Infrastructure Industry
          </h1>
          <div className="relative flex justify-center w-2/5">
            {/* Image takes 40% width */}
            <div className="absolute bg-[#b6e026] rounded-full z-10 w-[30vw] h-[30vw]"></div>
            <div className="relative z-20 max-w-[50vw]">
              <svg className="w-full h-auto" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
                <image href="src/Images/laptop.svg" alt="Laptop illustration" x="-190" y="-50" width="200%" height="140%" />
              </svg>
            </div>
          </div>
        </div>
      ) : (
        // Desktop Layout: Original Layout
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="w-full md:w-3/5 mb-8 md:mb-0 text-center md:text-left">
            <h1 className="font-bold text-gray-800 mb-4 leading-tight text-5xl">
              AI-Powered Financing &amp; Workforce Management for the Infrastructure Industry
            </h1>
          </div>
          <div className="relative w-full md:w-2/5 flex justify-center">
            <div className="absolute bg-[#b6e026] rounded-full z-10 w-[15vw] h-[15vw]"></div>
            <div className="relative z-20 max-w-[30vw]">
              <svg className="w-full h-auto" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
                <image href="src/Images/laptop.svg" alt="Laptop illustration" x="-90" y="-20" width="150%" height="110%" />
              </svg>
            </div>
          </div>
        </div>
      )}

      {/* Text and Buttons Section */}
      <div className="text-center md:text-left">
        <p
          className={`leading-relaxed text-gray-700 mb-6 ${
            windowWidth <= 640 ? 'text-xs' : 'text-lg'
          }`}
        >
          Empowering subcontractors with smart credit solutions, real-time payments, and seamless workflow management.
        </p>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center md:justify-start">
          <a
            href="#"
            className="bg-[#b6e026] text-black px-4 py-2 sm:px-6 sm:py-3 rounded-full font-semibold cursor-pointer text-center transition-all duration-300 hover:bg-[#a5cc20]"
          >
            Get started
          </a>
          <a
            href="#"
            className="bg-white text-gray-800 px-4 py-2 sm:px-6 sm:py-3 rounded-full font-semibold border border-gray-300 cursor-pointer text-center transition-all duration-300 hover:bg-gray-100"
          >
            Learn more
          </a>
        </div>
      </div>
    </section>
  );
};

export default AIPoweredSection;
