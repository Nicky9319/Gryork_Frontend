import React from "react";
import { CheckCircle } from "lucide-react";

const AboutUsSection = () => {
  return (
    <div className="w-[1400px] mx-auto px-6 py-12 text-gray-800">
      <h1 className="text-9xl font-semibold text-green-600 mb-12">About us</h1>

      <div className="mb-20">
        <h3 className="text-4xl font-semibold mb-6 flex items-center">
          <span className="mr-2">🛠️</span> The Problem
        </h3>
        <ul className="space-y-4 text-5xl pl-6">
          <li>
            Subcontractors struggle to <strong>pay workers on time</strong>.
          </li>
          <li>
            <strong>Hiring skilled labor</strong> when needed is difficult.
          </li>
          <li>
            Fair rates are hard to secure without strong connections.
          </li>
          <li>
            The industry faces <strong>low wages, job insecurity, and a shortage of skilled workers</strong>.
          </li>
          <li>
            Often <strong>overlooked and undervalued</strong>, construction remains a tough sector to thrive in.
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-4xl font-semibold mb-6 flex items-center">
          <span className="mr-2">💡</span> The GRYORK Solution
        </h3>
        <ul className="space-y-8 text-4xl pl-6">
          <li className="flex items-start">
            <svg className="text-green-600 mr-4 mt-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m-7 8a9 9 0 110-18 9 9 0 010 18z" />
            </svg>
            <span><strong>AI-powered platform</strong> built for modern workforce management</span>
          </li>
          <li className="flex items-start">
            <svg className="text-green-600 mr-4 mt-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m-7 8a9 9 0 110-18 9 9 0 010 18z" />
            </svg>
            <span><strong>CWC bill payment</strong> and on-time worker payouts ensure financial stability.</span>
          </li>
          <li className="flex items-start">
            <svg className="text-green-600 mr-4 mt-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m-7 8a9 9 0 110-18 9 9 0 010 18z" />
            </svg>
            <span><strong>Smart labor matching</strong> helps subcontractors find the right talent fast.</span>
          </li>
          <li className="flex items-start">
            <svg className="text-green-600 mr-4 mt-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m-7 8a9 9 0 110-18 9 9 0 010 18z" />
            </svg>
            <span>Transparent systems enable <strong>fair pricing</strong> and better negotiations.</span>
          </li>
          <li className="flex items-start">
            <svg className="text-green-600 mr-4 mt-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m-7 8a9 9 0 110-18 9 9 0 010 18z" />
            </svg>
            <span><strong>Streamlined operations</strong> reduce friction, errors, and delays.</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutUsSection;
