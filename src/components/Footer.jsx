import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from 'react-router-dom';

const FooterSection = ({ title, isOpen, toggle, content }) => {
  const isTrustAndSafety = title.toLowerCase() === 'trust & safety';
  
  return (
    <div className="border-b border-green-600">
      <div 
        className={`py-4 px-4 flex justify-between items-center ${isTrustAndSafety ? 'cursor-pointer' : ''}`}
        onClick={isTrustAndSafety ? toggle : undefined}
      >
        <h3 className="text-white text-sm font-medium">{title}</h3>
        {isTrustAndSafety && (
          <ChevronDown 
            className={`text-white transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`} 
            size={20} 
          />
        )}
      </div>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="px-4 pb-4">
          {content}
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  const [openSection, setOpenSection] = useState(null);
  
  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };
  
  const footerSections = [
    "ABOUT US",
    "GRYOK Explained",
    "Product",
    "social platform",
    "dispute resolution",
    "Contact us",
  ];
  
  const getTrustAndSafetyContent = () => (
    <div className="text-white">
      <p className="text-xl font-bold mb-4">You're Always Secure</p>
      <p className="text-base leading-relaxed mb-4">
        At <span className="font-bold">GRYORK</span>, we are committed to
        building a safe and secure tech infrastructure that prioritizes your
        privacy and data protection at every level.
      </p>
      <p className="text-base leading-relaxed mb-4">
        Our cutting-edge security measures ensure that your information
        remains confidential and protected at all times.
      </p>
      <p className="text-base leading-relaxed">
        Soon, we will be officially recognized by top government agencies
        for our industry-leading safety and security standards—giving you
        even more confidence in the platform you trust.
      </p>
    </div>
  );

  // Define navigation items with proper routing
  const navigationItems = [
    { name: "Home", path: "/", isExternal: false },
    { name: "Product", path: "/product", isExternal: false },
    { name: "Gryork explained", path: "/gryork-explained", isExternal: false },
    { name: "Dispute resolution", path: "/dispute-resolution", isExternal: false },
    { name: "About us", path: "/about-us", isExternal: false },
    { name: "Contact us", path: "/help-support", isExternal: false },
  ];

  // Handle navigation with both internal and external links
  const renderNavLink = (item, index) => {
    if (item.isExternal) {
      return (
        <a 
          href={item.path}
          className="text-white text-2xl hover:text-gray-200 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          {item.name}
        </a>
      );
    } else {
      return (
        <Link 
          to={item.path}
          className="text-white text-2xl hover:text-gray-200 transition-colors"
        >
          {item.name}
        </Link>
      );
    }
  };

  return (
    <section className="bg-[#268044] text-white">
      {/* Mobile Version */}
      <div className="md:hidden w-full max-w-md mx-auto">
        {footerSections.map((section, index) => (
          <FooterSection 
            key={index}
            title={section}
            isOpen={openSection === index}
            toggle={() => toggleSection(index)}
            content={section.toLowerCase() === 'trust & safety' ? getTrustAndSafetyContent() : null}
          />
        ))}
        
        <div className="py-6 px-4">
          <p className="text-[#CFF063] font-medium">Follow us</p>
          <div className="flex gap-4 mt-4">
            <a
              href="#"
              className="bg-[#CFF063] text-[#268044] w-10 h-10 rounded-full flex justify-center items-center"
            >
              <FaFacebookF className="text-xl" />
            </a>
            <a
              href="#"
              className="bg-[#CFF063] text-[#268044] w-10 h-10 rounded-full flex justify-center items-center"
            >
              <FaInstagram className="text-xl" />
            </a>
            <a
              href="#"
              className="bg-[#CFF063] text-[#268044] w-10 h-10 rounded-full flex justify-center items-center"
            >
              <FaLinkedinIn className="text-xl" />
            </a>
          </div>
        </div>
        
        <div className="flex justify-center pb-8 pt-16">
          <h1 className="text-[#CFF063] text-6xl font-bold">GRYORK</h1>
        </div>
      </div>

      {/* Desktop Version */}
      <div className="hidden md:flex flex-col py-16 px-[10%] min-h-[850px] justify-between">
        {/* First Row: Menu and Trust & Safety */}
        <div className="flex flex-wrap mb-5">
          
          <div className="w-[30%]">
            <h2 className="text-4xl font-bold text-[#CFF063] mb-8">Company</h2>
            <ul className="list-none space-y-6">
              {navigationItems.map((item, index) => (
                <li key={index} className="mb-2">
                  {renderNavLink(item, index)}
                </li>
              ))}
            </ul>
          </div>

          {/* Trust & Safety Content */}
          <div className="w-[70%]">
            <h2 className="text-4xl font-bold text-[#CFF063] mb-8">Trust & safety</h2>
            <p className="text-3xl font-bold mb-8 text-white">You're Always Secure</p>
            <p className="text-2xl leading-relaxed mb-8 text-white">
              At <span className="font-bold">GRYORK</span>, we are committed to
              building a safe and secure tech infrastructure that prioritizes your
              privacy and data protection at every level.
            </p>
            <p className="text-2xl leading-relaxed mb-8 text-white">
              Our cutting-edge security measures ensure that your information
              remains confidential and protected at all times.
            </p>
            <p className="text-2xl leading-relaxed text-white">
              Soon, we will be officially recognized by top government agencies
              for our industry-leading safety and security standards—giving you
              even more confidence in the platform you trust.
            </p>
          </div>
        </div>

        {/* Second Row: Social and Logo */}
        <div className="flex flex-row mt-32">
          {/* Social Column */}
          <div className="w-[50%]">
            <h2 className="text-4xl font-bold text-[#CFF063] mb-8">Social</h2>
            <div className="flex gap-6 mt-4">
              <a
                href="#"
                className="bg-[#CFF063] text-[#268044] w-14 h-14 rounded-full flex justify-center items-center"
              >
                <FaFacebookF className="text-[28px]" />
              </a>
              <a
                href="#"
                className="bg-[#CFF063] text-[#268044] w-14 h-14 rounded-full flex justify-center items-center"
              >
                <FaInstagram className="text-[28px]" />
              </a>
              <a
                href="#"
                className="bg-[#CFF063] text-[#268044] w-14 h-14 rounded-full flex justify-center items-center"
              >
                <FaLinkedinIn className="text-[28px]" />
              </a>
            </div>
          </div>

          {/* Logo Column */}
          <div className="w-[50%] flex justify-end items-center">
            <div className="text-[120px] font-bold text-[#CFF063]">GRYORK</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
