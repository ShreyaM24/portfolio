import React from "react";

function Contact() {
    return (
        <div className="container page-pop">
            <div className="row p-5 align-items-center d-flex">
                {/* Planet Column (moved to left) */}
                <div className="col-6 text-center">
                    <a href="/contact" className="img-icon">
                        <img 
                            src="assets/mercury.png" 
                            alt="mercury-icon" 
                            className="planet-img"
                        />
                    </a>
                </div>

                {/* Text Column (moved to right) */}
                <div className="col-6 text-col">
                    <h2 className="mb-4">Contact Me</h2>

                    {/* Full paragraph for desktop/tablet */}
                    <p className="para desktop-para">
                        Have an idea, opportunity, or just want to say hello? I'm always open to conversations, 
                        collaborations, and challenges.
                        <br /><br />
                        <i>Click on Mars to reach out. Let’s connect!</i>
                    </p>

                    {/* Short paragraph for mobile */}
                    <p className="para mobile-para">
                        <i>Click on Mars to contact me!</i>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Contact;
