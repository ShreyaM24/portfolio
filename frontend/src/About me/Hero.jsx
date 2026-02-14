import React from 'react';
import '../assets/App.css';

function Hero() {
    return (
        <div className='about container mt-5 p-5 page-pop'>

            {/* HEADER */}
            <h1 className='mb-4 about-header text-center text-lg-start'>
                Who am I?
            </h1>

            <div className='row align-items-center'>

                {/* IMAGE (comes first on mobile, right on desktop) */}
                <div className='col-lg-5 offset-lg-1 text-center order-1 order-lg-2 mb-4 mb-lg-0'>
                    <img
                        src='assets/me.jpg'
                        className='me img-fluid'
                        style={{ maxWidth: "420px" }}
                        alt="Shreya Mukherjee"
                    />
                </div>

                {/* TEXT */}
                <div className='col-lg-6 order-2 order-lg-1'>

                    <p className='about-para'>
                        Hello! <b><i>I'm Shreya Mukherjee</i></b>, <br /><br />

                        I’m a third-year B.Tech student majoring in &nbsp;
                        <b>Information Technology in Techno Main Salt Lake, Kolkata, West Bengal</b> —
                        <i>part-time coder, full-time curious mind</i>.
                        <br /><br />

                        I'm passionate about building cool stuff that solves real problems.
                        From writing clean code to debugging like a detective, I enjoy every part of the process.
                        <br /><br />

                        Right now, I’m diving deep into the MERN stack, exploring Data Science and machine learning concepts,
                        grinding Leetcode, and preparing for roles that combine software development with data-driven impact.
                        <br /><br />

                        Off-screen? You’ll catch me binge-watching series, planning travel escapes,
                        or daydreaming about my next getaway.
                        <br /><br />

                        Let’s build, break, learn, and laugh — the journey’s just getting started!

                    </p>

                    {/* BUTTONS OUTSIDE P (IMPORTANT) */}
                    <div className="buttons mt-3">
                        <form action="/contact">
                            <button className="btn btn-primary">Contact me</button>
                        </form>

                        <form action="/temp-resume.pdf" target="_blank">
                            <button className="btn btn-primary">Resume</button>
                        </form>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Hero;
