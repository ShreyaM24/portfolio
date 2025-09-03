import React from "react";
import "./assets/App.css";
function NavBar() {
    return (
        <div className="nav-container fs-3 px-5 fixed-top">
            <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid">
                    <div className="logo"><a href="/" style={{textDecoration:"none"}}><span style={{ color: "white" }}>My</span><span>Portfolio</span></a></div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item px-2">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item px-2">
                                <a className="nav-link active" aria-current="page" href="/about">About</a>
                            </li>

                            <li className="nav-item px-2">
                                <a className="nav-link active" aria-current="page" href="/resume">Resume</a>
                            </li>

                            <li className="nav-item px-2">
                                <a className="nav-link" href="/contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;