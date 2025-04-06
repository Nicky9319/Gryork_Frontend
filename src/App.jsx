import React from 'react';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import MainPage from './Views/MainPage/mainpage'

import DisputeResolution from './Views/MoreInfo/disputeresolution';
import Grylink from './Views/MoreInfo/grylink';
import AboutUs from './Views/MoreInfo/aboutus';
import GryorkExplained from './Views/MoreInfo/gryorkexplained';

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
          <Route path="/dispute-resolution" element={<DisputeResolution />} />
          <Route path="/grylink" element={<Grylink />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/gryork-explained" element={<GryorkExplained />} />
        </Routes>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
