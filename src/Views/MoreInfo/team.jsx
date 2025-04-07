import React, { useState, useRef, useEffect } from "react";
import FeatureItem from "./components/featureItem";
import { Users, Smartphone, TrendingUp, BarChart3, Globe2, MoveUpRight } from "lucide-react";

export default function Team() {
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
        icon={Smartphone}
        title="Connect & Grow"
        reverse={false}
      />
      <FeatureItem
        icon={Users}
        title="Join & succeed"
        reverse={true}
      />
      <FeatureItem
        icon={MoveUpRight}
        title="Earn more, learn more"
        reverse={false}
      />
      <FeatureItem
        icon={TrendingUp}
        title="Multiply your income"
        reverse={true}
      />
      <FeatureItem
        icon={BarChart3}
        title="Explore Without limits"
        reverse={false}
      />

      <br /><br />

      <div className="w-full text-center mt-16">
        <p className="text-[60px] font-medium text-gray-700 mb-4">Explore more about CWC VEST</p>
        <button 
          className="bg-[#268044] hover:bg-green-800 transition-colors text-white text-[25px] px-6 py-2 rounded-[23px] px-20 mb-20"
          onClick={toggleDropdown}
        >
          {isOpen ? "show less" : "learn more"}
        </button>
      </div>

      <div 
        className="overflow-hidden transition-all duration-500 ease-in-out mb-20"
        style={{ height: height, opacity: height ? '1' : '0', marginTop: height ? '2rem' : '0' }}
      >
        <div ref={contentRef} className="bg-gradient-to-b from-white via-gray-50 to-white py-16 px-12 w-full max-w-[1440px] mx-auto rounded-3xl shadow-2xl font-sans text-gray-800">
          <h2 className="text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-12 leading-tight">
            Introducing Team by <span className="text-blue-600">Gryork</span> – Building Your Skilled Workforce
          </h2>

          <div className="text-xl leading-relaxed max-w-5xl mx-auto text-center text-gray-700 mb-10">
            <p>
              <span className="font-semibold text-gray-900">
                Build a skilled workforce, deliver top-quality work, and unlock new opportunities with ease!
              </span>
            </p>
          </div>

          <h3 className="text-2xl font-semibold text-center text-blue-600 mb-12">
            Build Your Skilled Workforce & Unlock Limitless Opportunities
          </h3>

          <ul className="space-y-10 max-w-5xl mx-auto">
            <li className="flex items-start gap-5">
              <span className="text-green-500 text-3xl pt-1">•</span>
              <p className="text-xl text-gray-700 leading-relaxed">
                <span className="font-semibold text-yellow-600">Connect & Grow –</span> Bring skilled workers together, create your own team, and discover work that matches your expertise while opening doors to new opportunities.
              </p>
            </li>

            <li className="flex items-start gap-5">
              <span className="text-green-500 text-3xl pt-1">•</span>
              <p className="text-xl text-gray-700 leading-relaxed">
                <span className="font-semibold text-yellow-600">Join & Succeed –</span> Don't have a team yet? No worries! Join existing teams, collaborate on projects, and gain hands-on experience to build your skills.
              </p>
            </li>

            <li className="flex items-start gap-5">
              <span className="text-green-500 text-3xl pt-1">•</span>
              <p className="text-xl text-gray-700 leading-relaxed">
                <span className="font-semibold text-yellow-600">Form, Learn, Shine –</span> Start as a worker, evolve into a leader, and become a job provider. Expand your expertise while building a future where you create opportunities for others.
              </p>
            </li>

            <li className="flex items-start gap-5">
              <span className="text-green-500 text-3xl pt-1">•</span>
              <p className="text-xl text-gray-700 leading-relaxed">
                <span className="font-semibold text-yellow-600">Multiply Your Impact –</span> Increase your earnings up to 5X by working smarter, seizing the right projects, and leveraging teamwork to boost productivity.
              </p>
            </li>

            <li className="flex items-start gap-5">
              <span className="text-green-500 text-3xl pt-1">•</span>
              <p className="text-xl text-gray-700 leading-relaxed">
                <span className="font-semibold text-yellow-600">Explore More –</span> Find jobs, manage your team, track performance, and unlock better opportunities—all from one place.
              </p>
            </li>
          </ul>

          <p className="text-center text-xl text-blue-700 font-semibold mt-12">
            Take the first step toward success—Build Your Team Today!
          </p>
        </div>
      </div>
    </div>
  );
}
