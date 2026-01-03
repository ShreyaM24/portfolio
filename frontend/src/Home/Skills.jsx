import React from "react";
import "../assets/App.css";

function Skills() {
    return (
        <div className="container page-pop">
            <div className="row p-5 align-items-center d-flex">
                <div className="col-6 text-col">
                    <h2 className="mb-4">My Skills</h2>
        
                    <p className="para desktop-para">
                        Creativity powered by code: I thrive at the intersection of logic and imagination — 
                        whether it's designing intuitive user interfaces or building full-stack web applications.
                        <br /><br />
                        I’ve explored many technologies and I’m still boldly venturing into new ones.
                        <br /><br />
                        <i> Click on Earth to land on a new page and discover what fuels my passion. </i>
                    </p>

                    <p className="para mobile-para">
                        <i>Click this planet to explore the depths of my problem-solving universe!</i>
                    </p>
                </div>
                
                <div className="col-6 text-center">
                    <a href="/skills" className="img-icon">
                        <img src="assets/earth.png" alt="earth-icon" className="planet-img" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Skills;
