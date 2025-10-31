import React from "react";

function Projects() {
    return (
        <div className="container page-pop">
            <div className="row p-5 align-items-center d-flex">
                {/* Planet Column */}
                <div className="col-6 text-center">
                    <a href="/projects" className="img-icon">
                        <img
                            src="assets/jupiter.png"
                            alt="jupiter-icon"
                            className="planet-img"
                        />
                    </a>
                </div>

                {/* Text Column */}
                <div className="col-6 text-col">
                    <h2 className="mb-4">My Projects</h2>

                    {/* Full paragraph for desktop/tablet */}
                    <p className="para desktop-para">
                        Every project I build is a step toward turning ideas into impactful, functional solutions.
                        From full-stack web apps to data-driven dashboards, I love combining creativity with clean, efficient code.
                        <br></br><br></br>
                        Each project reflects my curiosity, growth, and the thrill of solving real-world problems through technology.
                        <br></br>
                        <i> Click on Jupiter to land on a new page and discover passion fueled with technology. </i>
                    </p>

                    {/* Short paragraph for mobile */}
                    <p className="para mobile-para">
                        <i>Click the planet to explore my skills!</i>
                    </p>
                </div>
            </div>
        </div >
    )
}

export default Projects;
