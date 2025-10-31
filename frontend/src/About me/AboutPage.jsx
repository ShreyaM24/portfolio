import React from 'react';
import '../assets/App.css';
import Navbar from '../NavBar.jsx';
import Footer from '../Footer.jsx';
import Hero from './Hero.jsx';
import bgVideo from "/public/assets/bg-dark.mp4";

function AboutPage() {
  return (
    <div className="app-container">
      {/* Background video */}
      <video autoPlay loop muted playsInline className="background-video">
        <source src={bgVideo} type="video/mp4" />
      </video>

      {/* Page content */}
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}

export default AboutPage;
