import React, { useState, useRef, useEffect } from "react";
import FeatureItem from "./components/featureItem";
import { ShieldCheck, Calendar, Hourglass, FileText } from "lucide-react";

const CwcVestInfo = () => {
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
    <div className="w-full py-10 space-y-10 bg-gradient-to-b from-white via-gray-50 to-gray-100 overflow-hidden">
      {/* Feature Section */}
      <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-x-6 gap-y-8">
        <FeatureItem 
          icon={ShieldCheck}
          title="Shield Against Payment"
          description="Get funds when payments are delayed to maintain your operation's momentum"
          reverse={false}
        />
        <FeatureItem 
          icon={Calendar}
          title="Project Insurance"
          description="Secure your business from risks and delays with our redefined protection"
          reverse={true}
        />
        <FeatureItem 
          icon={Hourglass}
          title="Working Capital Backup"
          description="Bridge the gap when bills are approved but still unpaid, keeping your cash flow consistent"
          reverse={false}
        />
        <FeatureItem 
          icon={FileText}
          title="Secure Your Business"
          description="Comprehensive protection for your business, just like you ensure your life"
          reverse={true}
        />
      </div>

      {/* Learn More Section */}
      <div className="w-full text-center mt-16">
        <p className="text-4xl md:text-5xl font-bold text-gray-700 mb-6">Explore more about CWC VEST</p>
        <button 
          className="bg-[#268044] hover:bg-green-800 transition-all duration-300 text-white text-xl md:text-2xl px-12 md:px-16 py-3 rounded-[23px] shadow-lg hover:shadow-xl"
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
            CWC VEST by <span className="text-blue-600">Gryork</span> – Financial Protection for Your Projects
          </h1>

          <div className="flex flex-col lg:flex-row gap-10">
            <div className="flex-1 space-y-10">
              <div className="flex items-start gap-5">
                <span className="text-green-500 text-3xl pt-1">•</span>
                <p className="text-xl leading-relaxed">
                  VEST offers comprehensive financial protection for contractors, ensuring business continuity 
                  even when facing payment delays and project uncertainties.
                </p>
              </div>
              
              <div className="flex items-start gap-5">
                <span className="text-green-500 text-3xl pt-1">•</span>
                <p className="text-xl leading-relaxed">
                  <span className="font-semibold text-yellow-600">Payment Shield Protection</span> – Access funds immediately when client payments 
                  are delayed, ensuring your operational expenses are always covered.
                </p>
              </div>
              
              <div className="flex items-start gap-5">
                <span className="text-green-500 text-3xl pt-1">•</span>
                <p className="text-xl leading-relaxed">
                  <span className="font-semibold text-yellow-600">Project Risk Insurance</span> – Safeguard against unexpected project delays and challenges 
                  with our comprehensive coverage options.
                </p>
              </div>
            </div>
            
            <div className="flex-1 space-y-10">
              <div className="flex items-start gap-5">
                <span className="text-green-500 text-3xl pt-1">•</span>
                <p className="text-xl leading-relaxed">
                  <span className="font-semibold text-yellow-600">Working Capital Solutions</span> – Maintain steady cash flow with quick access to funds 
                  when bills are approved but payment hasn't arrived yet.
                </p>
              </div>
              
              <div className="flex items-start gap-5">
                <span className="text-green-500 text-3xl pt-1">•</span>
                <p className="text-xl leading-relaxed">
                  <span className="font-semibold text-yellow-600">Business Continuity Protection</span> – Complete business protection that works alongside 
                  our CWC solution to ensure your operations never face financial disruption.
                </p>
              </div>
              
              <div className="flex items-start gap-5">
                <span className="text-green-500 text-3xl pt-1">•</span>
                <p className="text-xl leading-relaxed">
                  CWC VEST works with our financing solutions to create a complete safety net for your construction 
                  business, ensuring you're protected from all financial risks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default CwcVestInfo;
