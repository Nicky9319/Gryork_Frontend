import React from 'react';
import { useNavigate } from 'react-router-dom';

// Reusable Service Card component
const ServiceCard = ({ title, icon, description, urlLink, onNavigate }) => {
  return (
    <div className="relative w-[450px] h-[450px] flex flex-col items-center md:w-[380px] md:h-[380px] mb-8 sm:w-[300px] sm:h-[300px]">
      <div className="absolute -top-[55px] left-1/2 transform -translate-x-1/2 z-10" style={{ background: 'none' }}>
        <img src={icon} alt={title} className="w-36 h-36 sm:w-28 sm:h-28" />
      </div>
      
      <div className="w-full h-full rounded-full overflow-hidden relative shadow-md">
        <div className="before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-1/2 before:bg-white before:z-[1] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1/2 after:bg-[#268044] after:z-[1]">
          <div className="relative z-[2] w-full h-full flex flex-col justify-center items-center p-12 text-center">
            <br /><br />
            <h3 className="text-5xl font-bold uppercase z-[2] mb-3 mt-10 sm:text-4xl">{title}<w/h3>
            <br />
            <p className="text-2xl leading-snug text-black z-[2] relative -top-[15%] md:text-xl sm:text-lg text-white">
              {description}
            </p>
          </div>
        </div>
      </div>
      
      <a href={urlLink || "/"} onClick={(e) => onNavigate(urlLink || "/", e)} className="absolute -bottom-[25px] left-1/2 transform -translate-x-1/2 bg-[#CFF063] py-4 px-10 rounded-full text-black no-underline text-xl font-bold z-10 shadow-sm sm:text-lg sm:py-3 sm:px-8">
        learn more
      </a>
    </div>
  );
};

const ServicesSection = () => {
  const navigate = useNavigate();
  
  const handleNavigation = (path, e) => {
    e.preventDefault();
    navigate(path);
    window.scrollTo(0, 0); // Scroll to the top of the page after navigation
  };

  const services = [
    {
      title: 'CWC',
      icon: '/src/Images/rupee (1).svg',
      description: 'Short Term credit Solution for subcontractors',
      urlLink: '/cwc'
    },
    {
      title: 'CWC VEST',
      icon: '/src/Images/verified.svg',
      description: 'Your projects\'s finance safety against payment delays',
      urlLink: '/cwc-vest'
    },
    {
      title: 'SUPERVISOR',
      icon: '/src/Images/learning (1).svg',
      description: 'An AI-powered tool that automate your workflow',
      urlLink: '/supervisor'
    },
    {
      title: 'TEAMS',
      icon: '/src/Images/hierarchy-structure.svg',
      description: 'Build and grow a skilled work balance',
      urlLink: '/team'
    },
    {
      title: 'GRYLINK',
      icon: '/src/Images/grylink.svg',
      description: 'Smarter Credit Decisions. Seamless Integration',
      urlLink: '/grylink'
    }
  ];

  return (
    <div className="max-w-[1600px] mx-auto my-12 px-8 sm:px-4">
      <div className="flex flex-col space-y-50">
          <div className="flex justify-evenly md:flex-wrap md:justify-center md:gap-45 sm:gap-10">
            {services.slice(0, 3).map((service, index) => (
              <div key={index} className="flex justify-center">
                <ServiceCard {...service} onNavigate={handleNavigation} />
              </div>
            ))}
          </div>
          
          <div className="flex justify-evenly md:flex-wrap md:justify-center md:gap-45 sm:gap-10">
            {services.slice(3).map((service, index) => (
              <div key={index} className="flex justify-center">
                <ServiceCard {...service} onNavigate={handleNavigation} />
              </div>
            ))}
          </div>
      </div>
    </div>
  );
};

export default ServicesSection;
