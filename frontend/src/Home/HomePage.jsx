import { useState } from 'react';
import "../assets/App.css";

import NavBar from '../NavBar';
import Hero from './Hero';
import Skills from './Skills';
import DSASkills from './DSASkills';
import Projects from './Projects';
import Experience from './Experience';
import Contact from './Contact';
import Footer from '../Footer';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      <Hero/>
      <DSASkills/>
      <Skills/>
      <Projects/>
      <Experience/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App;
