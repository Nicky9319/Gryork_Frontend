import React, { useEffect } from 'react';
import HeroSection from './Components/HeroSection';
import ProblemSection from './Components/ProblemSection';
import AIPoweredSection from './Components/AIPoweredSection';
import ServicesSection from './Components/ServicesSection';
import FeaturesSection from './Components/FeaturesSection';
import SpeedSection from './Components/SpeedSection';

function MainPage() {
  // Add scroll to top effect when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HeroSection />
      <ProblemSection />
      <AIPoweredSection />
      <ServicesSection />
      <FeaturesSection />
      <SpeedSection />
    </>
  );
}
  
export default MainPage;
