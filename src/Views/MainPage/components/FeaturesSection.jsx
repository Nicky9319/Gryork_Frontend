import React from 'react';

// Reusable FeatureCard component
const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-xl p-12 text-center flex-1 shadow-lg transition-transform transform hover:-translate-y-2 min-w-[350px]">
      <div className="w-32 h-32 mx-auto mb-8 flex justify-center items-center">
        <img src={icon} alt={title} className="w-28 h-28" />
      </div>
      <h3 className="text-3xl font-bold mb-6 text-black">{title}</h3>
      <p className="text-lg leading-relaxed text-gray-600">{description}</p>
    </div>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      icon: 'src/Images/flash.svg',
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
    <div className="flex justify-between items-stretch gap-20 py-24 px-16 max-w-[1600px] mx-auto">
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
