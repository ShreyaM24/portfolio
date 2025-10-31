import { useState } from 'react';
import "../assets/App.css";

import NavBar from '../NavBar';
import Hero from './Hero';
import Skills from './Skills';
import DSASkills from './Skills';
import Projects from './Projects';
import Experience from './Experience';
import Contact from './Contact';
import Footer from '../Footer';
import bgVideo from "/public/assets/bg-dark.mp4";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app-container">
      {/* Background video */}
      <video autoPlay loop muted playsInline className="background-video">
        <source src={bgVideo} type="video/mp4" />
      </video>
      <NavBar />
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  )
}

export default App;
