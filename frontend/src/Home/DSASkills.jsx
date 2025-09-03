import React from "react";
import "../assets/App.css";

function DSAskills() {
    return (
        <div className="container page-pop">
            <div className="row p-5 align-items-center d-flex">
                <div className="col-6 text-col">
                    <h2 className="mb-4">DSA</h2>
        
                    <p className="para desktop-para">
                        Building the backbone of efficient solutions: My journey through DSA has been filled with logic, optimization, and consistency. From acing arrays to mastering graphs, I love solving real-world problems one algorithm at a time.
                        <br /><br />
                        <i>Click this planet to explore the depths of my problem-solving universe!</i>
                    </p>

                    <p className="para mobile-para">
                        <i>Click this planet to explore the depths of my problem-solving universe!</i>
                    </p>
                </div>
                
                <div className="col-6 text-center">
                    <a href="/DSASkills" className="img-icon">
                        <img src="assets/earth.png" alt="earth-icon" className="planet-img" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default DSAskills;
