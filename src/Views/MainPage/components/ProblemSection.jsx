import React, { useState, useEffect } from 'react';

const ProblemSection = () => {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getCircleDimensions = (side) => {
    const size = dimensions.width < 640 ? 150 : dimensions.width < 1024 ? 250 : 350;
    
    if (side === 'left') {
      return {
        width: `${size}px`,
        height: `${size}px`,
        left: dimensions.width < 640 ? '-70px' : '-120px',
        top: dimensions.width < 640 ? '50px' : '40px',
      };
    } else {
      return {
        width: `${size}px`,
        height: `${size}px`,
        right: dimensions.width < 640 ? '-50px' : '-120px',
        bottom: dimensions.width < 640 ? '-30px' : '-120px',
      };
    }
  };

  return (
    <section className="bg-[#20282B] text-white py-16 sm:py-20 px-4 sm:px-5 relative text-center min-h-[500px] sm:min-h-[600px] md:min-h-[800px] flex justify-center items-center">
        <div className="absolute bg-[#268044] rounded-full z-0"
          style={getCircleDimensions('left')}>
        </div>
        
        <div className="max-w-[800px] mx-auto relative z-10 flex flex-col justify-center items-center space-y-6 sm:space-y-10 md:space-y-15">
          <h2 className="text-5xl sm:text-7xl md:text-8xl leading-tight">
            <strong>pending bills?</strong>
          </h2>
          <h2 className="text-4xl sm:text-6xl md:text-6xl leading-tight text-[#268044] font-bold">
            <strong>unpaid workers?</strong>
          </h2>
          <h2 className="text-4xl sm:text-6xl md:text-6xl leading-tight">
            <strong>delayed work?</strong>
          </h2>
        </div>
        
        {/* Right Circle */}
        <div className="absolute right-0 bottom-0 z-0">
          <div className="relative bg-[#268044] rounded-full"
            style={getCircleDimensions('right')}>
          </div>
        </div>
    </section>
  );
};

export default ProblemSection;
