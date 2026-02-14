import { useParams } from "react-router-dom";
import Navbar from "../NavBar.jsx";
import Footer from "../Footer.jsx";

export default function ProjectDetails() {
  const { id } = useParams();

  return (
    <div className="project-page">
        <Navbar/>
      {/* VIDEO BACKGROUND */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="project-video"
      >
        <source src="/assets/jupiter-rot.mp4" type="video/mp4" />
      </video>

      {/* CONTENT */}
      <div className="project-content">
        <h1 className="title">WanderLust – Airbnb Inspired Project</h1>
        <div className="row">
            <div className="col-6">
                <img src="/assets/WanderLust-project.png" className="project-img"></img>
            </div>

            <div className="col-6">
                
            </div>
        </div>
      </div>

    <Footer/>
    </div>
  );
}
