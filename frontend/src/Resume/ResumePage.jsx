import React from 'react';
import Navbar from '../NavBar.jsx';
import Footer from '../Footer.jsx';
import Hero from './Hero.jsx';
import '../assets/App.css';
import bgVideo from "/public/assets/bg-dark.mp4";

function ResumePage() {
  return (
    <div className="app-container">
      {/* Background video */}
      <video autoPlay loop muted playsInline className="background-video">
        <source src={bgVideo} type="video/mp4" />
      </video>

      {/* Main content */}
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}

export default ResumePage;
