import React, { useEffect } from 'react';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import MainPage from './Views/MainPage/mainpage'

import DisputeResolution from './Views/MoreInfo/disputeResolution';
import Grylink from './Views/MoreInfo/grylink';
import AboutUs from './Views/MoreInfo/aboutUs';
import GryorkExplained from './Views/MoreInfo/gryorkExplained';

import CWC from './Views/MoreInfo/cwc';
import CwcVestInfo from './Views/MoreInfo/cwcVest';
import Team from './Views/MoreInfo/team';
import Supervisor from './Views/MoreInfo/supervisor';

import ContactUs from './Views/ContactUs/contactUs';


import usePageTracking from './components/usePageTracking';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Get the base URL from the import.meta.env (injected by Vite)
const baseUrl = import.meta.env.BASE_URL || '/';

function App() {

  usePageTracking();



  return (
    <div className="min-h-screen overflow-x-hidden bg-gray-50 text-gray-800">
      <Router basename={baseUrl}>
        <ScrollToTop />
        <Navbar />

        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/dispute-resolution" element={<DisputeResolution />} />
          <Route path="/grylink" element={<Grylink />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/gryork-explained" element={<GryorkExplained />} />
          <Route path="/cwc" element={<CWC />} />
          <Route path="/cwc-vest" element={<CwcVestInfo />} />
          <Route path="/team" element={<Team />} />
          <Route path="/supervisor" element={<Supervisor />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
