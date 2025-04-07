import React, { useState, useRef, useEffect } from "react";
import FeatureItem from "./components/featureItem";
import { CheckCircle, Percent, Banknote, Smartphone, Shield, FileText, Send } from "lucide-react";

import TopicHighlightCard from "./components/topicHighlightCard";

const CWC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const contentRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full py-10 space-y-10">

      <FeatureItem
        icon={Send}
        title="AI-powered Credit Approval"
        reverse={false}
      />
      <FeatureItem
        icon={FileText}
        title="Direct payments to workers"
        reverse={true}
      />
      <FeatureItem
        icon={CheckCircle}
        title="Auto Deduction & Guaranteed repayments"
        reverse={false}
      />
      <FeatureItem
        icon={Shield}
        title="Smart Interest Optimisation"
        reverse={true}
      />
      <FeatureItem
        icon={Percent}
        title="NBFC & Bank collaboration"
        reverse={false}
      />
      <FeatureItem
        icon={Banknote}
        title="Fully digital loan journey"
        reverse={true}
      />
      <FeatureItem
        icon={Smartphone}
        title="Faster, Smarter Financing with AI"
        reverse={false}
      />

      <br /><br />

      <div className="w-full text-center mt-16">
        <p className="text-[60px] font-medium text-gray-700 mb-4">Explore more about CWC</p>
        <button 
          className="bg-[#268044] hover:bg-green-800 transition-colors text-white text-[25px] px-6 py-2 rounded-[23px] px-20 mb-20"
          onClick={toggleDropdown}
        >
          {isOpen ? "show less" : "learn more"}
        </button>
      </div>

      <div 
        className="overflow-hidden transition-all duration-500 ease-in-out mb-20" 
        style={{ height: `${height}px` }}
      >
        <div ref={contentRef} className="bg-gradient-to-b from-white via-gray-50 to-white py-16 px-12 w-full max-w-[1440px] mx-auto rounded-3xl shadow-2xl font-sans text-gray-800">
          <h1 className="text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-12 leading-tight">
            CWC (Credit on Working Capital) by <span className="text-blue-600">Gryork</span> – AI-Powered Smart Financing
          </h1>

          <div className="flex flex-col lg:flex-row gap-10">
            <div className="flex-1 space-y-10">
              <div className="flex items-start gap-5">
                <span className="text-green-500 text-3xl pt-1">•</span>
                <p className="text-xl leading-relaxed">
                  Gryork offers an AI-driven short-term credit facility for contractors,
                  ensuring timely worker wage payments through infrastructure company partnerships and NBFC & bank collaborations.
                </p>
              </div>
              
              <div className="flex items-start gap-5">
                <span className="text-green-500 text-3xl pt-1">•</span>
                <p className="text-xl leading-relaxed">
                  <span className="font-semibold text-yellow-600">AI-Powered Approvals & Partnerships</span> – Fast credit approvals with the support of infrastructure companies.
                </p>
              </div>
              
              <div className="flex items-start gap-5">
                <span className="text-green-500 text-3xl pt-1">•</span>
                <p className="text-xl leading-relaxed">
                  <span className="font-semibold text-yellow-600">Direct Worker Payments</span> – Funds are directly transferred to workers' accounts via bulk payments, ensuring fair and timely wages while preventing misuse.
                </p>
              </div>
            </div>
            
            <div className="flex-1 space-y-10">
              <div className="flex items-start gap-5">
                <span className="text-green-500 text-3xl pt-1">•</span>
                <p className="text-xl leading-relaxed">
                  <span className="font-semibold text-yellow-600">Guaranteed Repayment & Automatic Deductions</span> – Infrastructure companies ensure repayment by deducting the CWC amount from pending bills when funds are available, returning it to Gryork while transferring the remaining balance to subcontractors.
                </p>
              </div>
              
              <div className="flex items-start gap-5">
                <span className="text-green-500 text-3xl pt-1">•</span>
                <p className="text-xl leading-relaxed">
                  <span className="font-semibold text-yellow-600">Smart Interest Models</span> – AI optimizes EMI, factoring, invoice discounting, and interest-based repayment options, ensuring smooth cash flow.
                </p>
              </div>
              
              <div className="flex items-start gap-5">
                <span className="text-green-500 text-3xl pt-1">•</span>
                <p className="text-xl leading-relaxed">
                  <span className="font-semibold text-yellow-600">Seamless Digital Processing</span> – AI automates loan disbursal, tracking, and repayment, making financing effortless.
                </p>
              </div>
              
              <div className="flex items-start gap-5">
                <span className="text-green-500 text-3xl pt-1">•</span>
                <p className="text-xl leading-relaxed">
                  With AI-driven automation and predictive analytics, CWC ensures faster, smarter, and more transparent financing for contractors!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default CWC;

