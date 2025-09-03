import React from 'react';
import '../assets/App.css';
import Navbar from '../NavBar.jsx';
import Footer from '../Footer.jsx';
import Hero from './Hero.jsx';

function AboutPage() {
    return (
        <>
            <Navbar />
            <Hero/>
            <Footer />
        </>
    );
}

export default AboutPage;