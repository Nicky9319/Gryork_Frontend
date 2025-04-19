import React from 'react';
import ConstructionImage from '../../../Images/construction.jpg'; // Adjust the path as necessary

export default function WelcomeToGryork() {
  return (
    <div className="w-full max-w-md mx-auto font-sans bg-white md:max-w-4xl lg:max-w-6xl">
      <div className="pt-10 pb-6 md:pt-16 md:pb-12">
        <h1 className="text-5xl font-bold text-gray-800 text-center md:text-6xl lg:text-7xl">
          Welcome to
          <br />
          Gryork
        </h1>
      </div>
      
      
      <div className="flex flex-col md:flex-row md:gap-6 md:mx-8 lg:mx-16">
        <div className="bg-gray-800 rounded-lg p-5 mx-4 mb-4 md:mx-0 md:mb-0 md:flex-1" style={{height: "180px", width: "calc(100% - 32px)", maxWidth: "100%"}}>
          <h2 className="text-yellow-300 text-xl font-bold md:text-2xl">Pending bills?</h2>
          <p className="text-gray-200 text-sm md:text-base md:mt-2">many of us face by this problemgjkjnjnnsnv sjncn</p>
        </div>
      
        <div className="grid grid-cols-2 gap-4 mx-4 md:mx-0 md:flex-1 md:grid-cols-1" style={{width: "calc(100% - 32px)", maxWidth: "100%"}}>
          <div className="bg-green-600 rounded-lg p-5 md:mb-4" style={{height: "220px", minHeight: "100px"}}>
            <h2 className="text-white font-bold text-xl md:text-2xl">Unpaid workers?</h2>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-5" style={{height: "220px", minHeight: "100px"}}>
            <h2 className="text-white font-bold text-xl md:text-2xl">Delayed work?</h2>
          </div>
        </div>

    {/* Construction Image section */}
    <div className="px-4 md:px-8 lg:px-16 mb-8">
        <div className="max-w-lg mx-auto w-full bg-green-50 rounded-lg p-6 md:p-8 relative">
                  <h1 className="text-4xl font-bold text-gray-700 text-center mb-4 md:mb-6">Grow your work</h1>
                
                <div className="relative mb-6 md:mb-8">
                    <img 
                        src={ConstructionImage} 
                        alt="Construction site illustration" 
                        className="w-full rounded-lg relative z-10"
                    />
                    {/* Green tint overlay */}
            <div className="absolute inset-0 bg-green-400 opacity-30 rounded-lg"></div>
          </div>
          
          {/* Text below the image */}
          <p className="text-center text-gray-600 mt-2 md:mt-4">
            Streamlining construction workflows Gryork<br />
            connects contractors and workers with
          </p>
        </div>
      </div>

      </div>
    </div>
  );
}