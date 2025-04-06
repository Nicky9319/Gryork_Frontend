import React from 'react';

const ProblemSection = () => {
  return (
    <section className="bg-[#20282B] text-white py-10 px-3 relative text-center min-h-[900px] sm:py-20 sm:px-5 flex justify-center items-center">
        <div className="absolute bg-[#268044] rounded-full z-0"
          style={{
            width: window.innerWidth < 640 ? '150px' : '350px',
            height: window.innerWidth < 640 ? '150px' : '350px',
            left: window.innerWidth < 640 ? '-70px' : '-160px',
            top: window.innerWidth < 640 ? '50px' : '40px',
          }}>
        </div>
        
        <div className="max-w-[800px] mx-auto relative z-10 flex flex-col justify-center items-center h-full space-y-15">
          <h2 className="text-8xl leading-normal sm:text-8xl sm:leading-tight">
            <strong>pending bills?</strong>
          </h2>
          <h2 className="text-6xl leading-normal sm:text-8xl sm:leading-tight text-[#268044] font-bold">
            <strong>unpaid workers?</strong>
          </h2>
          <h2 className="text-6xl leading-normal sm:text-8xl sm:leading-tight">
            <strong>delayed work?</strong>
          </h2>
        </div>
        
        {/* Right Circle */}
      <div className="absolute right-0 bottom-0 z-0">
        <div className="relative bg-[#268044;] rounded-full"
          style={{
            width: window.innerWidth < 640 ? '150px' : '350px',
            height: window.innerWidth < 640 ? '150px' : '350px',
            right: window.innerWidth < 640 ? '-50px' : '-130px',
            bottom: window.innerWidth < 640 ? '-30px' : '-130px',
          }}>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
