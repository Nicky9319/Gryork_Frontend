import React from 'react';
import ConstructionImage from '../../../Images/construction.jpg'; // Adjust the path as necessary

export default function WelcomeToGryork() {
  return (
    <div className="w-full max-w-md mx-auto font-sans bg-white md:max-w-4xl lg:max-w-6xl">
      {/* Desktop layout */}
      <div className="hidden md:flex md:flex-row md:items-center md:justify-between md:px-8 lg:px-16">
        {/* Left side content */}
        <div className="md:w-1/2 lg:w-2/5">
          <div className="pt-10 pb-6 md:pt-16 md:pb-12">
            <h1 className="text-5xl font-bold text-gray-800 md:text-6xl lg:text-7xl">
              Welcome to
              <br />
              Gryork
            </h1>
          </div>
          
          <div className="mb-8">
            <p className="text-gray-600">
              Streamlining construction worrkflows
              <br />
              Gryork connects contractors and workers
              <br />
              with powerful tools all in one platform.
            </p>
          </div>
          
          <div className="flex flex-col gap-4">
            <div className="bg-gray-800 rounded-lg p-5">
              <h2 className="text-yellow-300 text-xl font-bold">Pending bills?</h2>
              <p className="text-gray-200 text-sm mt-2">many of us face by this problemgjkjnjnnsnv sjncn</p>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-green-600 rounded-lg p-5 flex-1">
                <h2 className="text-white font-bold text-xl">Unpaid workers?</h2>
              </div>
              
              <div className="bg-gray-800 rounded-lg p-5 flex-1">
                <h2 className="text-white font-bold text-xl">Delayed work?</h2>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right side content */}
        <div className="md:w-1/2 lg:w-3/5 flex items-center justify-center">
          <div className="relative">
            <div className="bg-green-100 rounded-full absolute inset-0 w-64 h-64 lg:w-96 lg:h-96 -z-0"></div>
            <img 
              src="/api/placeholder/400/320" 
              alt="Construction site illustration" 
              className="relative z-10"
            />
            <h2 className="text-5xl font-bold text-gray-700 mt-6">
              Grow
              <br />
              your work
            </h2>
          </div>
        </div>
      </div>
      
      {/* Mobile layout - preserved from original */}
      <div className="md:hidden">
        <div className="pt-10 pb-6">
          <h1 className="text-5xl font-bold text-gray-800 text-center">
            Welcome to
            <br />
            Gryork
          </h1>
        </div>
        
        <div className="flex flex-col gap-6 mx-4">
          <div className="bg-gray-800 rounded-lg p-5" style={{height: "180px"}}>
            <h2 className="text-yellow-300 text-xl font-bold">Pending bills?</h2>
            <p className="text-gray-200 text-sm">many of us face by this problemgjkjnjnnsnv sjncn</p>
          </div>
        
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-green-600 rounded-lg p-5" style={{height: "220px", minHeight: "100px"}}>
              <h2 className="text-white font-bold text-xl">Unpaid workers?</h2>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-5" style={{height: "220px", minHeight: "100px"}}>
              <h2 className="text-white font-bold text-xl">Delayed work?</h2>
            </div>
          </div>

          {/* Construction Image section */}
          <div className="px-4 mb-8">
            <div className="max-w-lg mx-auto w-full bg-green-50 rounded-lg p-6 relative">
              <h1 className="text-4xl font-bold text-gray-700 text-center mb-4">Grow your work</h1>
            
              <div className="relative mb-6">
                <img 
                  src={ConstructionImage} 
                  alt="Construction site illustration" 
                  className="w-full rounded-lg relative z-10"
                />
                {/* Green tint overlay */}
                <div className="absolute inset-0 bg-green-400 opacity-30 rounded-lg"></div>
              </div>
              
              {/* Text below the image */}
              <p className="text-center text-gray-600 mt-2">
                Streamlining construction workflows Gryork<br />
                connects contractors and workers with
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}