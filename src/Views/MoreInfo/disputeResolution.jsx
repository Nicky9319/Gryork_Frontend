import React from "react";

const DisputeResolution = () => {
  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 bg-white">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-bold text-green-600 mb-6">Dispute Resolution</h1>
        <div className="w-24 h-1 bg-green-500 mx-auto mb-10"></div>
        <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto">
          At <span className="font-bold text-gray-800">GRYORK</span>, we believe in fair and accessible justice for
          everyone in the industry. Through our partnership with e-Courts, we provide a fast,
          affordable, and hassle-free dispute resolution system for those who can't afford traditional
          legal processes.
        </p>
      </div>

      {/* Quote Section */}
      <div className="bg-green-50 rounded-xl p-8 mb-16">
        <p className="text-lg text-gray-800 italic">
          "Whether you're a subcontractor, worker, or industry professional, you can
          resolve conflicts efficiently and fairly—all within a trusted digital platform designed to
          protect your rights and bring you peace of mind."
        </p>
      </div>

      {/* Benefits Section */}
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-semibold mb-10 text-center">
          <span className="inline-block bg-green-100 text-green-600 rounded-full p-2 mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </span>
          Key Benefits
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transform hover:translate-y-[-5px] transition duration-300 text-center">
            <div className="text-green-500 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Fair Justice</h3>
            <p className="text-gray-600">At <span className="font-bold text-gray-800">GRYORK</span>, we ensure fair and accessible justice for all.</p>
          </div>
          <div className="bg-white p-8 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transform hover:translate-y-[-5px] transition duration-300 text-center">
            <div className="text-green-500 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Strategic Partnership</h3>
            <p className="text-gray-600"><span className="font-bold text-gray-800">Partnered with e-Courts</span> for quick, affordable resolutions.</p>
          </div>
          <div className="bg-white p-8 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transform hover:translate-y-[-5px] transition duration-300 text-center">
            <div className="text-green-500 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Cost-Effective</h3>
            <p className="text-gray-600">Hassle-free process – no need for <span className="font-semibold">expensive legal help</span>.</p>
          </div>
          <div className="bg-white p-8 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transform hover:translate-y-[-5px] transition duration-300 text-center">
            <div className="text-green-500 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">For Everyone</h3>
            <p className="text-gray-600">Ideal for subcontractors and <span className="font-semibold">workers facing disputes</span>.</p>
          </div>
          <div className="bg-white p-8 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transform hover:translate-y-[-5px] transition duration-300 text-center">
            <div className="text-green-500 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Digital Justice</h3>
            <p className="text-gray-600"><span className="font-semibold">Justice, simplified and digital</span>.</p>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-semibold mb-10 text-center">
          <span className="inline-block bg-green-100 text-green-600 rounded-full p-2 mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </span>
          How It Works
        </h2>
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="flex-1 mb-8 md:mb-0 md:mr-6">
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-green-200 ml-6 md:ml-8"></div>
              {[
                { title: "File Your Complaint", description: "Submit your dispute through our simple online form" },
                { title: "Initial Assessment", description: "Our team reviews your case and assigns it to an e-Court" },
                { title: "Digital Hearing", description: "Present your case virtually - no travel required" },
                { title: "Quick Resolution", description: "Receive a fair decision much faster than traditional courts" },
              ].map((step, index) => (
                <div key={index} className="relative flex items-start mb-10">
                  <div className="absolute left-0 flex items-center justify-center h-16 w-16 rounded-full bg-green-500 text-white text-xl font-bold z-10">
                    {index + 1}
                  </div>
                  <div className="ml-24">
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 bg-gray-100 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-6 text-center">Frequently Asked Questions</h3>
            {[
              { question: "How much does it cost?", answer: "Our dispute resolution services are significantly more affordable than traditional legal proceedings, with transparent fee structures based on the nature of your case." },
              { question: "How long does the process take?", answer: "Most cases are resolved within 2-4 weeks, compared to months or years in traditional courts." },
              { question: "Is the decision legally binding?", answer: "Yes, all decisions made through our e-Courts partnership are legally binding and enforceable." },
            ].map((faq, index) => (
              <div key={index} className="mb-6 last:mb-0">
                <h4 className="text-lg font-semibold mb-2">{faq.question}</h4>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-green-600 text-white rounded-xl p-10 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Resolve Your Dispute?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Our digital dispute resolution platform offers you a faster, more affordable way to get the justice you deserve.
        </p>
        <button className="bg-white text-green-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300 text-lg">
          Start Your Case Today
        </button>
      </div>
    </div>
  );
};

export default DisputeResolution;
