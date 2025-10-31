import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import HomePage from './Home/HomePage.jsx';
import AboutPage from './About me/AboutPage.jsx';
import ResumePage from './Resume/ResumePage.jsx';
import ContactPage from './Contact/ContactPage.jsx';
import SkillsPage from './Skills/SkillsPage.jsx';

createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path='/resume' element={<ResumePage />} />
      <Route path='/contact' element={<ContactPage />} />
      <Route path='/skills' element={<SkillsPage />} />
    </Routes>
  </Router>
)
