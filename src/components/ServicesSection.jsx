import React from 'react';

// Reusable Service Card component
const ServiceCard = ({ title, icon, description }) => {
  return (
    <div className="relative w-[250px] h-[250px] flex flex-col items-center md:w-[220px] md:h-[220px] mb-8">
      <div className="absolute -top-[35px] left-1/2 transform -translate-x-1/2 z-10" style={{ background: 'none' }}>
        <img src={icon} alt={title} className="w-20 h-20" />
      </div>
      
      <div className="w-full h-full rounded-full overflow-hidden relative shadow-md">
        <div className="before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-1/2 before:bg-white before:z-[1] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1/2 after:bg-[#b0d12a] after:z-[1]">
          <div className="relative z-[2] w-full h-full flex flex-col justify-center items-center p-5 text-center">
            <br />
            <h3 className="text-xl font-bold uppercase z-[2] mb-1 mt-6">{title}</h3>
            <br />
            <p className="text-base leading-snug text-black z-[2] relative -top-[15%] md:text-sm">
              {description}
            </p>
          </div>
        </div>
      </div>
      
      <a href="#" className="absolute -bottom-[15px] left-1/2 transform -translate-x-1/2 bg-[#f1f8b5] py-1.5 px-4 rounded-full text-black no-underline text-sm font-bold z-10 shadow-sm">
        learn more
      </a>
    </div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      title: 'CWC',
      icon: '/src/Images/rupee (1).svg',
      description: 'Short Term credit Solution for subcontractors'
    },
    {
      title: 'CWC VEST',
      icon: '/src/Images/verified.svg',
      description: 'Your projects\'s finance safety against payment delays'
    },
    {
      title: 'SUPERVISOR',
      icon: '/src/Images/learning (1).svg',
      description: 'An AI-powered tool that automate your workflow'
    },
    {
      title: 'TEAMS',
      icon: '/src/Images/hierarchy-structure.svg',
      description: 'Build and grow a skilled work balance'
    }
  ];

  return (
    <div className="max-w-[1200px] mx-auto my-12 flex flex-wrap justify-center gap-8 md:gap-10">
      <div className="flex flex-wrap justify-center gap-8 mb-12 md:gap-10">
        {services.slice(0, 3).map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
      
      <div className="flex justify-center gap-8 mb-12 md:gap-10">
        {services.slice(3).map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
