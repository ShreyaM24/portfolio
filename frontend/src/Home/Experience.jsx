import React from "react";

function Experience() {
    return (
        <div className="container page-pop">
            <div className="row p-5 align-items-center d-flex">
                {/* Planet Column */}
                <div className="col-6 text-center">
                    <a href="/experience" className="img-icon">
                        <img 
                            src="assets/neptune.png" 
                            alt="neptune-icon" 
                            className="planet-img" 
                        />
                    </a>
                </div>

                {/* Text Column */}
                <div className="col-6 text-col">
                    <h2 className="mb-4">Experience</h2>

                    {/* Full paragraph for desktop/tablet */}
                    <p className="para desktop-para">
                        Each step in my journey has sharpened my skills and deepened my perspective, 
                        whether through collaborations, or community contributions.
                        <br /><br />
                        <i>
                            Click on the planet to dive into the roles I've taken on, what I built, 
                            and what I learned along the way.
                        </i>
                    </p>

                    {/* Short paragraph for mobile */}
                    <p className="para mobile-para">
                        <i>
                            Click on the planet to dive into my journey!
                        </i>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Experience;
