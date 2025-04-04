import React from 'react';

const HeroSection = () => {
  return (
    <section
      className="relative flex flex-col justify-center items-center overflow-hidden bg-cover bg-center w-full"
      style={{
        backgroundImage: "url('/src/Images/2BuildingImages.jpg')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: window.innerWidth <= 640 ? 'auto' : '85vh',
      }}
    >
      <img
        src="/src/Images/BuildingImages.jpg"
        alt="Background"
        className={`absolute top-0 left-0 w-full h-auto object-cover ${
          window.innerWidth <= 640 ? 'block' : 'hidden'
        }`}
        style={{ visibility: 'hidden', position: 'absolute' }}
        onLoad={(e) => {
          const section = e.target.closest('section');
          if (window.innerWidth <= 640) {
            section.style.height = `${e.target.offsetHeight}px`;
          }
        }}
      />
      <h1
        className={`font-bold text-gray-700 text-center mb-4 relative z-10 px-4 shadow-text absolute ${
          window.innerWidth <= 640 ? 'text-5xl top-6' : 'text-6xl top-10'
        }`}
      >
        Grow your work
      </h1>

      <div
        className={`relative z-10 flex shadow-md mt-auto mb-auto ${
          window.innerWidth <= 640
            ? 'w-4/5 max-w-[300px]'
            : 'w-1/2 max-w-[1000px] justify-center'
        }`}
      >
        <div
          className={`flex items-center bg-white rounded-l-full ${
            window.innerWidth <= 640 ? 'py-2 px-3 text-xs' : 'py-4 px-6 text-base'
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-5 w-5 text-gray-500 ${
              window.innerWidth <= 640 ? 'mr-2' : 'mr-4'
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm21 21l-4.35-4.35"
            />
          </svg>
          <input
            type="text"
            className="flex-grow border-none outline-none bg-white"
            placeholder="enter your company name"
          />
        </div>
        <button
          className={`border-none rounded-r-full bg-[#b6d233] text-white font-bold cursor-pointer transition-colors duration-300 hover:bg-[#a3bc2a] ${
            window.innerWidth <= 640 ? 'py-2 px-4 text-xs' : 'py-4 px-8'
          }`}
        >
          submit
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
