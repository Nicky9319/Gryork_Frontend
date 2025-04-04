import React from 'react';

const ProblemSection = () => {
  return (
    <section className="bg-[#1a1e21] text-white py-10 px-3 relative text-center min-h-[220px] sm:py-20 sm:px-5">
      {/* Left Circle */}
      <div className="absolute bg-[#b6e634] rounded-full z-0"
        style={{
          width: window.innerWidth < 640 ? '120px' : '280px',
          height: window.innerWidth < 640 ? '120px' : '280px',
          left: window.innerWidth < 640 ? '-55px' : '-140px',
          top: window.innerWidth < 640 ? '30px' : '20px',
        }}>
      </div>
      
      <div className="max-w-[800px] mx-auto relative z-10">
        <br />
        <h2 className="text-4xl mb-5 leading-normal sm:text-5xl sm:leading-tight">
          <strong>pending bills?</strong><br />
          <span className="text-[#b6e634] font-bold"><strong>unpaid workers?</strong></span><br />
          <strong>delayed work?</strong>
        </h2>
      </div>
      
      {/* Right Circle */}
      <div className="absolute right-0 bottom-0 z-0">
        <div className="relative bg-[#b6e634] rounded-full"
          style={{
            width: window.innerWidth < 640 ? '120px' : '300px',
            height: window.innerWidth < 640 ? '120px' : '300px',
            right: window.innerWidth < 640 ? '-40px' : '-110px',
            bottom: window.innerWidth < 640 ? '-20px' : '-110px',
          }}>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
