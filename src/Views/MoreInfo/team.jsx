import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import FeatureItem from "./components/featureItem";
import { Users, Smartphone, TrendingUp, BarChart3, MoveUpRight } from "lucide-react";

// Animation variants reused from the CWC component
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6 } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

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
    <div className="w-full py-10 space-y-10 bg-gradient-to-b from-white via-gray-50 to-gray-100 overflow-hidden">
      {/* Feature Items with Staggered Animation */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div variants={fadeInUp} className="transform transition duration-300 hover:scale-105">
          <FeatureItem icon={Smartphone} title="Connect & Grow" reverse={false} />
        </motion.div>
        <motion.div variants={fadeInUp} className="transform transition duration-300 hover:scale-105">
          <FeatureItem icon={Users} title="Join & Succeed" reverse={true} />
        </motion.div>
        <motion.div variants={fadeInUp} className="transform transition duration-300 hover:scale-105">
          <FeatureItem icon={MoveUpRight} title="Earn More, Learn More" reverse={false} />
        </motion.div>
        <motion.div variants={fadeInUp} className="transform transition duration-300 hover:scale-105">
          <FeatureItem icon={TrendingUp} title="Multiply Your Income" reverse={true} />
        </motion.div>
        <motion.div variants={fadeInUp} className="transform transition duration-300 hover:scale-105">
          <FeatureItem icon={BarChart3} title="Explore Without Limits" reverse={false} />
        </motion.div>
      </motion.div>

      {/* Call-to-Action Section with Enhanced Animation and Styling */}
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="w-full text-center mt-16 bg-gradient-to-b from-gray-50 to-gray-100 py-14 shadow-inner relative overflow-hidden"
      >
        <div className="relative z-10">
          <p className="text-3xl md:text-5xl font-medium text-gray-700 mb-6 drop-shadow-sm">
            Explore more about <span className="text-[#268044]">TEAM</span>
          </p>
          <motion.button 
            className="bg-[#268044] hover:bg-green-800 transition-all duration-300 text-white text-xl md:text-2xl px-12 md:px-16 py-3 rounded-[23px] shadow-lg hover:shadow-xl"
            onClick={toggleDropdown}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? "Show Less" : "Learn More"}
          </motion.button>
        </div>
      </motion.div>

      {/* Animated Dropdown Section */}
      <div 
        className="overflow-hidden transition-all duration-500 ease-in-out mb-16"
        style={{ height: `${height}px` }}
      >
        <div ref={contentRef} className="bg-gradient-to-b from-white via-gray-50 to-white py-16 px-12 w-full max-w-[1440px] mx-auto rounded-3xl shadow-2xl font-sans text-gray-800 border border-gray-100">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            className="text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-12 leading-tight"
          >
            Introducing Team by <span className="text-blue-600">Gryork</span> – Building Your Skilled Workforce
          </motion.h2>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            className="text-xl leading-relaxed max-w-5xl mx-auto text-center text-gray-700 mb-10"
          >
            <p>
              <span className="font-semibold text-gray-900">
                Build a skilled workforce, deliver top-quality work, and unlock new opportunities with ease!
              </span>
            </p>
          </motion.div>
          
          <motion.h3 
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            className="text-2xl font-semibold text-center text-blue-600 mb-12"
          >
            Build Your Skilled Workforce & Unlock Limitless Opportunities
          </motion.h3>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            className="flex flex-col lg:flex-row gap-10"
          >
            <div className="flex-1 space-y-10">
              <motion.div variants={fadeInUp} className="flex items-start gap-5">
                <span className="text-green-500 text-3xl pt-1">•</span>
                <p className="text-xl text-gray-700 leading-relaxed">
                  <span className="font-semibold text-yellow-600">Connect & Grow –</span> Bring skilled workers together, create your own team, and discover work that matches your expertise while opening doors to new opportunities.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex items-start gap-5">
                <span className="text-green-500 text-3xl pt-1">•</span>
                <p className="text-xl text-gray-700 leading-relaxed">
                  <span className="font-semibold text-yellow-600">Join & Succeed –</span> Join existing teams, collaborate on projects, and gain hands-on experience.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex items-start gap-5">
                <span className="text-green-500 text-3xl pt-1">•</span>
                <p className="text-xl text-gray-700 leading-relaxed">
                  <span className="font-semibold text-yellow-600">Form, Learn, Shine –</span> Start as a worker, evolve into a leader, and eventually become a job provider.
                </p>
              </motion.div>
            </div>

            <div className="flex-1 space-y-10">
              <motion.div variants={fadeInUp} className="flex items-start gap-5">
                <span className="text-green-500 text-3xl pt-1">•</span>
                <p className="text-xl text-gray-700 leading-relaxed">
                  <span className="font-semibold text-yellow-600">Multiply Your Impact –</span> Increase your earnings up to 5X by working smarter, seizing the right projects, and leveraging teamwork.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex items-start gap-5">
                <span className="text-green-500 text-3xl pt-1">•</span>
                <p className="text-xl text-gray-700 leading-relaxed">
                  <span className="font-semibold text-yellow-600">Explore More –</span> Find jobs, manage your team, track performance, and unlock better opportunities—all from one place.
                </p>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.p 
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            className="text-center text-xl text-blue-700 font-semibold mt-12"
          >
            Take the first step toward success—Build Your Team Today!
          </motion.p>
        </div>
      </div>
    </div>
  );
}
