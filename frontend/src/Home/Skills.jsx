import React from "react";

function Skills() {
    return (
        <div className="container page-pop">
            <div className="row p-5 align-items-center d-flex">
                {/* Planet Column */}
                <div className="col-6 text-center">
                    <a href="/skills" className="img-icon">
                        <img 
                            src="assets/jupiter.png" 
                            alt="jupiter-icon" 
                            className="planet-img"
                        />
                    </a>
                </div>

                {/* Text Column */}
                <div className="col-6 text-col">
                    <h2 className="mb-4">Skills</h2>

                    {/* Full paragraph for desktop/tablet */}
                    <p className="para desktop-para">
                        Creativity powered by code: I thrive at the intersection of logic and imagination — 
                        whether it's designing intuitive user interfaces or building full-stack web applications.
                        <br /><br />
                        I’ve explored many technologies and I’m still boldly venturing into new ones. 
                        <i> Click on the planet to land on a new page and discover what fuels my passion. </i>
                    </p>

                    {/* Short paragraph for mobile */}
                    <p className="para mobile-para">
                        <i>Click the planet to explore my skills!</i>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Skills;
