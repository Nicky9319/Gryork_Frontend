import React from 'react';

// Reusable FeatureCard component
const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-lg p-10 text-center flex-1 shadow-md transition-transform transform hover:-translate-y-1">
      <div className="w-16 h-16 mx-auto mb-5 flex justify-center items-center">
        <img src={icon} alt={title} className="w-15 h-15" />
      </div>
      <h3 className="text-xl font-bold mb-4 text-black">{title}</h3>
      <p className="text-sm leading-relaxed text-gray-600">{description}</p>
    </div>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      icon: '/src/Images/flash.svg',
      title: 'SPEED',
      description: 'Get credit in a day with full transparency',
    },
    {
      icon: 'src/Images/bank.svg',
      title: 'Backed by',
      description: 'NBFC & Bank collaborations and automation',
    },
    {
      icon: 'src/Images/verified.svg',
      title: 'Reliable',
      description: 'Repayments secured with automatic deductions',
    },
  ];

  return (
    <div className="flex justify-center items-center gap-8 py-16 px-5 max-w-[1200px] mx-auto flex-wrap">
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </div>
  );
};

export default FeaturesSection;
