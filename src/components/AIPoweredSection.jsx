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
      <br /><br /><br /><br />

      {/* Mobile Layout: Heading and Image Side by Side */}
      {windowWidth <= 640 ? (
        <div className="flex flex-row justify-between items-center mb-6">
          <h1 className="font-bold text-gray-800 text-xl leading-tight mr-4 w-3/5">
            {/* Heading takes 60% width */}
            AI-Powered Financing &amp; Workforce Management for the Infrastructure Industry
          </h1>
          <div className="relative flex justify-center w-2/5">
            {/* Image takes 40% width */}
            <div
              className="absolute bg-[#b6e026] rounded-full z-10"
              style={{
                width: '28vw',
                height: '28vw',
                top: '55%', // Adjusted to originate a little lower
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            ></div>
            <div className="relative z-20 max-w-[50vw]">
              <svg className="w-full h-auto" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
                <image
                  href="src/Images/laptop.svg"
                  alt="Laptop illustration"
                  x="-190"
                  y="-50"
                  width="200%"
                  height="140%"
                />
              </svg>
            </div>
          </div>
        </div>
      ) : (
        // Desktop Layout: Adjusted Circle and Image Size
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="w-full md:w-1/2 mb-8 md:mb-0 text-center md:text-left md:pl-8">
            <h1 className="font-bold text-gray-800 mb-4 leading-tight text-7xl">
              AI-Powered<br />
              Financing &amp; Workforce Management for the Infrastructure Industry
            </h1>

            <div className="w-full md:w-1/2 text-center md:text-left mt-4">
              <p className={`leading-relaxed text-gray-700 mb-6 ${windowWidth <= 640 ? 'text-base' : 'text-xl'}`}>
          Empowering subcontractors with smart credit solutions, real-time payments, and seamless workflow management.
              </p>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center md:justify-start">
          <a
            href="#"
            className="bg-[#268044] text-white px-8 py-3 sm:px-10 sm:py-4 rounded-[18px] font-semibold cursor-pointer text-center transition-all duration-300 hover:bg-[#1e6a36] shadow-md shadow-gray-500/50 text-lg"
          >
            Get started
          </a>
          <a
            href="#"
            className="bg-white text-gray-800 px-8 py-3 sm:px-10 sm:py-4 rounded-[18px] font-semibold border border-gray-300 cursor-pointer text-center transition-all duration-300 hover:bg-gray-200 shadow-md shadow-gray-500/50 text-lg"
          >
            Learn more
          </a>
              </div>
            </div>
          </div>

          <div className="relative w-full md:w-1/2 flex justify-center">
            <div
              className="absolute bg-[#268044] rounded-full z-10"
              style={{
          width: '500px',
          height: '500px',
          top: '45%', // Adjusted to add padding to the top
          left: '50%',
          transform: 'translate(-50%, -50%)',
              }}
            ></div>
            <div className="relative z-20" style={{ width: '600px', height: '600px' }}>
              <svg className="w-full h-full" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
                <image
                  href="src/Images/laptop.svg"
                  alt="Laptop illustration"
                  x="-200"
                  y="-100"
                  width="200%"
                  height="150%"
                />
              </svg>
            </div>
          </div>
          
        </div>

      )}

      {/* Text and Buttons Section */}
      <br /> <br />
    </section>
  );
};

export default AIPoweredSection;
