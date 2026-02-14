import React from "react";
import "../assets/App.css";

function Hero() {
    return (
        <div className="container">
            <div className="card mb-5">
                <div className="row g-0">
                    <div className="col-md-4 p-3 page-pop">
                        <img src="assets/me.jpg" className="img-fluid rounded-start my-pic" alt="profile-img"></img>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h3 className="card-title">Hello!</h3>
                            <h1>I'm <span style={{ color: "white" }}>Shreya</span></h1>
                            <p className="card-text"></p>
                            <p className="card-text fs-5"><small className="text-body-secondary">a third-year B.Tech student majoring in Information Technology. I’m passionate about . . . </small><a href="/about" className="fs-6" style={{ textDecoration: "none", color: "#ffb8e4" }}>Read more</a></p>
                            <div className="buttons">
                                <form action="/contact"><button className="btn btn-primary">Contact me</button></form>
                                <form action="/temp-resume.pdf"><button className="btn btn-primary">Resume</button></form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;