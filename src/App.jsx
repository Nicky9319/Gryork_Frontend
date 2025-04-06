import React from 'react';
import Navbar from './components/Navbar';
// import HeroSection from './components/HeroSection';
// import ProblemSection from './components/ProblemSection';
// import AIPoweredSection from './components/AIPoweredSection';
// import ServicesSection from './components/ServicesSection';
// import FeaturesSection from './components/FeaturesSection';
import Footer from './components/Footer';
import MainPage from './Views/MainPage/mainpage'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-gray-50 text-gray-800">
      <Navbar />

      {/* <HeroSection />
      <ProblemSection />
      <AIPoweredSection />
      <ServicesSection />
      <FeaturesSection />
      <SpeedSection /> */}


      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
