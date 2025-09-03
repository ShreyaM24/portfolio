import React from "react";

function Projects() {
    return (
        <div className="container page-pop">
            <div className="row p-5 align-items-center d-flex">
                {/* Text Column */}
                <div className="col-6 text-col">
                    <h2 className="mb-4">Projects</h2>

                    {/* Full paragraph for desktop/tablet */}
                    <p className="para desktop-para">
                        Crafted with passion and purpose: My projects blend creativity with real-world 
                        problem solving. From intuitive web apps to impactful hackathon builds, 
                        each one reflects my journey as a developer.
                        <br /><br />
                        <i>
                            Click the planet to explore the stories, challenges, 
                            and technologies behind them.
                        </i>
                    </p>

                    {/* Short paragraph for mobile */}
                    <p className="para mobile-para">
                        <i>
                            Click the planet to explore my projects!
                        </i>
                    </p>
                </div>

                {/* Planet Column */}
                <div className="col-6 text-center">
                    <a href="/projects" className="img-icon">
                        <img 
                            src="assets/saturn.png" 
                            alt="saturn-icon" 
                            className="planet-img"
                            style={{width:"110%", padding: "0", margin:"0"}}
                        />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Projects;
