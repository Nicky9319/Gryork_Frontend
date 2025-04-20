import React, { useEffect, useState } from 'react';
import ConstructionImage from '../../../Images/construction.jpg'; // Adjust the path as necessary

export default function WelcomeToGryork() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Trigger animations after component mounts
    setIsVisible(true);
  }, []);

  return (
    <div className="w-full font-sans bg-white">
      {/* Desktop layout */}
      <div className="hidden md:flex md:flex-col md:px-8 lg:px-6 xl:px-6 2xl:px-32 w-full">
        {/* First row: Welcome text and image */}
        <div className="flex flex-row items-center justify-between py-8 md:py-12">
          {/* Welcome text */}
          <div className={`md:w-1/2 lg:w-2/5 md:pr-8 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
            <h1 className="text-6xl font-extrabold text-gray-800 md:text-7xl lg:text-[80px]">
              Welcome to
              <br />
              Gryork
            </h1>
            <p className={`text-gray-600 mt-8 text-xl lg:text-2xl transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            Gryork enhances construction workflows
            by connecting contractors and workers through an advanced tech-driven platform.
            </p>
          </div>
          
          {/* Image */}
          <div className={`md:w-1/2 lg:w-3/5 flex items-center justify-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <div className="relative">
              <div className={`bg-green-100 rounded-full absolute inset-0 w-80 h-80 lg:w-[500px] lg:h-[500px] xl:w-[600px] xl:h-[600px] -z-0 transition-all duration-1500 transform ${isVisible ? 'scale-100' : 'scale-0'}`}></div>
              <img 
                src={ConstructionImage} 
                alt="Construction site illustration" 
                className={`relative z-10 md:w-[400px] lg:w-[550px] xl:w-[600px] transition-all duration-1000 delay-300 transform ${isVisible ? 'scale-100 rotate-0' : 'scale-95 rotate-3'}`}
              />
            </div>
          </div>
        </div>
        
        {/* Second row: Problems and Grow your work */}
        <div className="flex flex-row items-start justify-between py-8 md:py-12">
          {/* Problems */}
          <div className={`md:w-1/2 lg:w-2/5 md:pr-8 transition-all duration-1000 delay-600 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
            <div className="flex flex-col gap-6">
              <div className="bg-gray-800 rounded-lg p-8 min-h-[120px] lg:min-h-[160px] flex items-center transform transition-all duration-500 hover:scale-105 hover:shadow-xl">
                <h2 className="text-yellow-300 text-2xl lg:text-3xl font-bold">Pending bills?</h2>
                {/* <p className="text-gray-200 text-sm mt-2">many of us face by this problemgjkjnjnnsnv sjncn</p> */}
              </div>
              
              <div className="flex gap-6">
                <div className="bg-green-600 rounded-lg p-8 flex-1 min-h-[140px] lg:min-h-[180px] flex items-center transform transition-all duration-500 hover:scale-105 hover:shadow-xl">
                  <h2 className="text-white font-bold text-2xl lg:text-3xl">Unpaid workers?</h2>
                </div>
                
                <div className="bg-gray-800 rounded-lg p-8 flex-1 min-h-[140px] lg:min-h-[180px] flex items-center transform transition-all duration-500 hover:scale-105 hover:shadow-xl">
                  <h2 className="text-white font-bold text-2xl lg:text-3xl">Delayed work?</h2>
                </div>
              </div>
            </div>
          </div>
          
          {/* Grow your work */}
          {/* <div className={`md:w-1/2 lg:w-3/5 flex items-center justify-center transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <h2 className="text-6xl font-extrabold text-gray-700 lg:text-7xl xl:text-8xl bg-clip-text text-transparent bg-gradient-to-b from-gray-700 to-gray-500 hover:from-green-700 hover:to-gray-700 transition-all duration-700">
              Grow
              your work
            </h2>
          </div>
        </div> */}

        <div className={`md:w-1/2 lg:w-3/5 flex items-center justify-center transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <h2 className="text-6xl font-extrabold text-gray-700 lg:text-7xl xl:text-8xl transition-all  duration-700">
              Grow
              <br />
              your work
            </h2>
          </div>
        </div>


      </div>
      
      {/* Mobile layout with animations */}
      <div className="md:hidden max-w-md mx-auto">
        <div className={`pt-10 pb-6 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          <h1 className="text-5xl font-bold text-gray-800 text-center">
            Welcome to
            <br />
            Gryork
          </h1>
        </div>
        
        <div className="flex flex-col gap-6 mx-4">
          <div className={`bg-gray-800 rounded-lg p-5 transform transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0 hover:scale-105' : 'opacity-0 -translate-x-10'}`} style={{height: "180px"}}>
            <h2 className="text-yellow-300 text-xl font-bold">Pending bills?</h2>
            {/* <p className="text-gray-200 text-sm">many of us face by this problemgjkjnjnnsnv sjncn</p> */}
          </div>
        
          <div className={`grid grid-cols-2 gap-4 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="bg-green-600 rounded-lg p-5 transform transition-all duration-500 hover:scale-105" style={{height: "220px", minHeight: "100px"}}>
              <h2 className="text-white font-bold text-xl">Unpaid workers?</h2>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-5 transform transition-all duration-500 hover:scale-105" style={{height: "220px", minHeight: "100px"}}>
              <h2 className="text-white font-bold text-xl">Delayed work?</h2>
            </div>
          </div>

          {/* Construction Image section */}
          <div className={`px-4 mb-8 transition-all duration-1000 delay-600 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="max-w-lg mx-auto w-full bg-green-50 rounded-lg p-6 relative">
              <h1 className="text-4xl font-bold text-gray-700 text-center mb-4">Grow your work</h1>
            
              <div className="relative mb-6">
                <img 
                  src={ConstructionImage} 
                  alt="Construction site illustration" 
                  className={`w-full rounded-lg relative z-10 transition-all duration-1000 transform ${isVisible ? 'scale-100' : 'scale-90'}`}
                />
                {/* Green tint overlay */}
                <div className="absolute inset-0 bg-green-400 opacity-30 rounded-lg"></div>
              </div>
              
              {/* Text below the image */}
              <p className={`text-center text-gray-600 mt-2 transition-all duration-700 delay-900 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              Gryork enhances construction workflows
              by connecting contractors and workers through an advanced tech-driven platform.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}