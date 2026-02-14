import React from "react";
import Navbar from "../NavBar.jsx";
import Footer from "../Footer.jsx";
import ProjectCarousel from "./ProjectCarousel.jsx";

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
          <source src="/assets/jupiter-rot.mp4" type="video/mp4" />
        </video>

        <div className="projects-content">
          <ProjectCarousel />
        </div>
      </section>

      <Footer />
    </>
  );
}

export default ProjectsPage;
