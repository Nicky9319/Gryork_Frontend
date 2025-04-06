import React from "react";

const DisputeResolution = () => {
  return (
    <div className="mx-auto py-10 px-25">
      <h2 className="text-7xl font-semibold text-green-600 mb-6 text-left">Dispute resolution</h2>
      <p className="text-2xl text-gray-700 mb-10 text-left ml-4 mr-50">
        At <span className="font-bold text-gray-800">GRYORK</span>, we believe in fair and accessible justice for
        everyone in the industry. Through our partnership with e-Courts, we provide a fast,
        affordable, and hassle-free dispute resolution system for those who can’t afford traditional
        legal processes. Whether you’re a subcontractor, worker, or industry professional, you can
        resolve conflicts efficiently and fairly—all within a trusted digital platform designed to
        protect your rights and bring you peace of mind.
      </p>

      <br />

      <div className="mt-14">
        <h3 className="text-5xl font-semibold mb-6 flex items-center text-left">
          <span className="mr-2">📝</span> Overall points
        </h3>
        <br />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="p-6 border rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300 text-left text-lg">
            At <span className="font-bold text-gray-800">GRYORK</span>, we ensure fair and accessible justice for all.
          </div>
          <div className="p-6 border rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300 text-left text-lg">
            <span className="font-bold text-gray-800">Partnered with e-Courts</span> for quick, affordable resolutions.
          </div>
          <div className="p-6 border rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300 text-left text-lg">
            Hassle-free process – no need for <span className="font-semibold">expensive legal help</span>.
          </div>
          <div className="p-6 border rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300 text-left text-lg">
            Ideal for subcontractors and <span className="font-semibold">workers facing disputes</span>.
          </div>
          <div className="p-6 border rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300 text-left text-lg">
            <span className="font-semibold">Justice, simplified and digital</span>.
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisputeResolution;
