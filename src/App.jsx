import React from 'react';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import MainPage from './Views/MainPage/mainpage'

import DisputeResolution from './Views/MoreInfo/disputeresolution';
import Grylink from './Views/MoreInfo/grylink';
import AboutUs from './Views/MoreInfo/aboutus';
import GryorkExplained from './Views/MoreInfo/gryorkexplained';

import CWC from './Views/MoreInfo/cwc';
import CwcVestInfo from './Views/MoreInfo/cwcVest';
import Team from './Views/MoreInfo/team';
import Supervisor from './Views/MoreInfo/supervisor';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-gray-50 text-gray-800">

      {/* <HeroSection />
      <ProblemSection />
      <AIPoweredSection />
      <ServicesSection />
      <FeaturesSection />
      <SpeedSection /> */}
      <Router>


        <Navbar />

        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/dispute-resolution" element={<DisputeResolution />} />
          <Route path="/grylink" element={<Grylink />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/gryork-explained" element={<GryorkExplained />} />
          <Route path="/cwc" element={<CWC/>}/>
          <Route path="/cwc-vest" element={<CwcVestInfo />} />
          <Route path="/team" element={<Team />} />
          <Route path="/supervisor" element={<Supervisor />} />
        </Routes>


        <Footer />


      </Router>

    </div>
  );
}

export default App;
