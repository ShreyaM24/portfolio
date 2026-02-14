import React from "react";
import Navbar from "../NavBar.jsx";
import Footer from "../Footer.jsx";
import Hero from "./Hero.jsx";

function ProjectsPage() {
  return (
    <>
      <Navbar />

      {/* Video Background Section */}
      <section className="projects-video-wrapper">
        <video
          className="projects-video-bg"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/public/assets/neptune-rot.mp4" type="video/mp4" />
        </video>

        <div className="experience-content">
          <Hero />
        </div>
      </section>

      <Footer />
    </>
  );
}

export default ProjectsPage;
