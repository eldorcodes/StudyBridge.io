import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import AppSection from './components/AppSection';
import Footer from './components/Footer';
import Contact from './components/Contact';

import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import EULA from './pages/EULA';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Features />
              <HowItWorks />
              <Testimonials />
              <AppSection />
              <Contact />
            </>
          }
        />
        {/* Legal Pages */}
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/eula" element={<EULA />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;