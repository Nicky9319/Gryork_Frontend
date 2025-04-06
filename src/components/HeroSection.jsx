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
        className={`font-bold text-[#4A4A4A] text-center mb-4 relative z-10 px-4 shadow-text absolute ${
          window.innerWidth <= 640 ? 'text-8xl top-6' : 'text-9xl top-10'
        }`}
      >
        Grow your work
      </h1>

      <div
        className={`relative z-10 flex shadow-md mt-auto mb-auto ${
          window.innerWidth <= 640
            ? 'w-3/5 max-w-[250px]'
            : 'w-2/5 max-w-[800px] justify-center'
        }`}
      >
        <div
          className={`flex-grow flex items-center border-none outline-none bg-gray-200 rounded-full placeholder-gray-500 text-gray-700 ${
            window.innerWidth <= 640 ? 'py-1 px-3 text-sm' : 'py-2 px-4 text-base'
          }`}
        >
          <input
            type="text"
            className="flex-grow bg-transparent outline-none placeholder-gray-500 text-gray-700 w-3/4 pl-10"
            placeholder="enter your company name"
            style={{ fontSize: window.innerWidth <= 640 ? '1rem' : '1.25rem' }}
          />
          <button
            className={`border-none rounded-full bg-[#268044] text-white cursor-pointer transition-colors duration-300 hover:bg-green-900 ${
              window.innerWidth <= 640 ? 'py-1 px-3 text-lg' : 'py-2 px-10 text-xl'
            }`}
          >
            submit
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
