import React, { useEffect } from "react";
import { motion } from "framer-motion";

const DisputeResolution = () => {
  useEffect(() => {
    // Add animation library if needed
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/aos@next/dist/aos.js';
    script.async = true;
    document.body.appendChild(script);
    
    script.onload = () => {
      window.AOS.init({
        duration: 800,
        once: false,
      });
    };
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  
  // Animation variants for Framer Motion
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };
  
  return (
    <div className="w-full bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Hero Section - Full Width */}
      <div className="relative w-full h-[60vh] bg-gradient-to-r from-green-800 to-green-600 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f')] bg-cover bg-center opacity-20"></div>
        
        <div className="absolute top-0 left-0 w-32 h-32 bg-green-400 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-yellow-300 rounded-full filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
        
        <div className="container mx-auto h-full flex items-center px-4 sm:px-8 lg:px-16">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 [text-shadow:_0_2px_4px_rgba(0,0,0,0.3)]">
              Dispute Resolution
            </h1>
            <div className="w-32 h-2 bg-yellow-400 mb-8 rounded-full"></div>
            <p className="text-xl md:text-2xl text-white leading-relaxed [text-shadow:_0_1px_2px_rgba(0,0,0,0.2)]">
              At <span className="font-bold text-yellow-300">GRYORK</span>, we believe in fair and accessible justice for
              everyone in the industry, with faster resolutions and lower costs than traditional legal processes.
            </p>
          </motion.div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
            <path fill="#ffffff" fillOpacity="1" d="M0,224L80,208C160,192,320,160,480,170.7C640,181,800,235,960,234.7C1120,235,1280,181,1360,154.7L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg>
        </div>
      </div>

      {/* Quote Section - Offset */}
      <div className="container mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
        <div className="bg-white shadow-xl rounded-xl p-8 -mt-20 border-l-8 border-purple-500" data-aos="fade-up">
          <div className="flex items-start">
            <div className="text-purple-500 mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
              </svg>
            </div>
            <p className="text-lg md:text-xl text-gray-800 italic">
              "Whether you're a subcontractor, worker, or industry professional, you can
              resolve conflicts efficiently and fairly—all within a trusted digital platform designed to
              protect your rights and bring you peace of mind."
            </p>
          </div>
        </div>
      </div>

      {/* Benefits Grid - Colorful Cards */}
      <div className="w-full py-20 px-4 sm:px-8 lg:px-16">
        <div className="container mx-auto" data-aos="fade-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-600">Key Benefits</span>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-green-400 to-blue-400"></div>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Fair Justice",
                description: "At GRYORK, we ensure fair and accessible justice for all.",
                icon: "M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z",
                color: "from-green-400 to-green-600",
                delay: 0
              },
              {
                title: "Strategic Partnership",
                description: "Partnered with e-Courts for quick, affordable resolutions.",
                icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
                color: "from-blue-400 to-blue-600",
                delay: 0.1
              },
              {
                title: "Cost-Effective",
                description: "Hassle-free process – no need for expensive legal help.",
                icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                color: "from-purple-400 to-purple-600",
                delay: 0.2
              },
              {
                title: "For Everyone",
                description: "Ideal for subcontractors and workers facing disputes.",
                icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
                color: "from-yellow-400 to-yellow-600",
                delay: 0.3
              },
              {
                title: "Digital Justice",
                description: "Justice, simplified and digital.",
                icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                color: "from-red-400 to-red-600",
                delay: 0.4
              },
              {
                title: "Quick Resolution",
                description: "Most cases resolved in weeks, not months or years.",
                icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                color: "from-pink-400 to-pink-600",
                delay: 0.5
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: benefit.delay, duration: 0.5 }}
                className="relative group"
                whileHover={{ scale: 1.03 }}
              >
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${benefit.color} blur-sm group-hover:blur opacity-70 group-hover:opacity-100 transition-all duration-300`}></div>
                <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 h-full flex flex-col">
                  <div className={`bg-gradient-to-r ${benefit.color} w-16 h-16 rounded-full flex items-center justify-center mb-6`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={benefit.icon} />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section - Interactive Timeline */}
      <div className="w-full bg-gray-50 py-20 px-4 sm:px-8 lg:px-16">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div className="lg:w-5/12 mb-10 lg:mb-0" data-aos="fade-right">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-800">
                <span className="relative">
                  How It Works
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-blue-500"></span>
                </span>
              </h2>
              <p className="text-xl text-gray-600 mb-10">
                Our streamlined dispute resolution process is designed to be simple, fast, and effective. Here's how we help you get the justice you deserve with minimal hassle.
              </p>
              
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-blue-500" data-aos="zoom-in" data-aos-delay="300">
                <h3 className="text-2xl font-bold mb-4 text-blue-600">Ready to get started?</h3>
                <p className="text-gray-600 mb-6">
                  Our team is ready to help you navigate this process from start to finish. We'll be with you every step of the way.
                </p>
                <button className="bg-gradient-to-r from-blue-600 to-blue-800 text-white font-bold py-3 px-6 rounded-lg hover:shadow-lg transform hover:translate-y-[-2px] transition-all duration-300">
                  Start Your Case Today
                </button>
              </div>
            </div>
            
            <div className="lg:w-6/12 relative" data-aos="fade-left">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-green-400 via-blue-500 to-purple-600 ml-6 md:ml-8 rounded-full"></div>
              {[
                { title: "File Your Complaint", description: "Submit your dispute through our simple online form", color: "bg-green-500", icon: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" },
                { title: "Initial Assessment", description: "Our team reviews your case and assigns it to an e-Court", color: "bg-blue-500", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" },
                { title: "Digital Hearing", description: "Present your case virtually - no travel required", color: "bg-indigo-500", icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" },
                { title: "Quick Resolution", description: "Receive a fair decision much faster than traditional courts", color: "bg-purple-500", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
              ].map((step, index) => (
                <motion.div 
                  key={index} 
                  className="relative flex items-start mb-12 last:mb-0"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                >
                  <div className={`absolute left-0 flex items-center justify-center h-16 w-16 rounded-full ${step.color} text-white text-xl font-bold z-10 shadow-lg transform transition-all duration-300 hover:scale-110`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={step.icon} />
                    </svg>
                  </div>
                  <div className="ml-24 bg-white p-6 rounded-xl shadow-md border-l-4 border-r-4 border-transparent hover:border-l-4 hover:border-l-green-400 hover:border-r-4 hover:border-r-blue-400 transition-all duration-300">
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section - Accordion Style */}
      <div className="w-full py-20 px-4 sm:px-8 lg:px-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto" data-aos="fade-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-red-500">
              Frequently Asked Questions
            </span>
          </h2>
          
          <div className="max-w-4xl mx-auto">
            {[
              { 
                question: "How much does it cost?", 
                answer: "Our dispute resolution services are significantly more affordable than traditional legal proceedings, with transparent fee structures based on the nature of your case." 
              },
              { 
                question: "How long does the process take?", 
                answer: "Most cases are resolved within 2-4 weeks, compared to months or years in traditional courts." 
              },
              { 
                question: "Is the decision legally binding?", 
                answer: "Yes, all decisions made through our e-Courts partnership are legally binding and enforceable." 
              },
              { 
                question: "What types of disputes can be handled?", 
                answer: "We handle a wide range of construction industry disputes, including payment disagreements, contract disputes, quality issues, and professional liability cases." 
              },
              { 
                question: "Do I need a lawyer to use this service?", 
                answer: "No, our platform is designed to be accessible without legal representation, though you're welcome to involve a legal advisor if you prefer." 
              },
            ].map((faq, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="mb-6 last:mb-0"
              >
                <details className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
                  <summary className="flex justify-between items-center font-semibold cursor-pointer list-none p-6 text-xl">
                    <span>{faq.question}</span>
                    <span className="transition group-open:rotate-180">
                      <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <div className="px-6 pb-6 text-gray-600">
                    <p>{faq.answer}</p>
                  </div>
                </details>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section - Full Width Colorful */}
      <div className="w-full relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-blue-700"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-300 rounded-full filter blur-3xl opacity-10 animate-pulse" style={{animationDelay: '1.5s'}}></div>
        
        <div className="container mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white [text-shadow:_0_2px_4px_rgba(0,0,0,0.3)]">
              Ready to Resolve Your Dispute?
            </h2>
            <p className="text-xl mb-10 max-w-3xl mx-auto text-white opacity-90">
              Our digital dispute resolution platform offers you a faster, more affordable way to get the justice you deserve.
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-700 font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-xl border-2 border-white transition duration-300 text-xl"
            >
              Start Your Case Today
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default DisputeResolution;
