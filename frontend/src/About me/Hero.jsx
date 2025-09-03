import React from 'react';
import '../assets/App.css';

function Hero() {
    return (
        <div className='about container mt-5 p-5 page-pop'>
            <div className='row'>
                <div className='col-6'>
                    <h1 className='mb-3 about-header'>Who am I?</h1>
                    <p className='p-3 about-para'>Hello! <b><i>I'm Shreya Mukherjee</i></b>, <br /><br /> I’m a third-year B.Tech student majoring in <b>Information Technology in Techno main Salt Lake, Kolkata, West Bengal</b> — <i>part-time coder, full-time curious mind</i>.<br /><br />I'm passionate about building cool stuff that solves real problems. From writing clean code to debugging like a detective, I enjoy every part of the process. You'll often find me juggling DSA questions, brewing backend logic, and styling pixels into place — <i>usually with snacks and music on the side</i>.<br /><br />Right now, I’m diving deep into MERN stack, grinding Leetcode, and preparing for roles that mix engineering with impact. Whether it’s a hackathon, a side project, or an open-source contribution, I love learning by doing and breaking things... then fixing them!<br /><br />Off-screen? You’ll catch me binge-watching series, planning travel escapes (even if it’s just on Google Maps), or daydreaming about my next getaway.<br /><br />Let’s build, break, learn, and laugh — the journey’s just getting started!<br /><br />

                        <div className="buttons">
                            <form action="/contact"><button className="btn btn-primary">Contact me</button></form>
                            <form action="/resume"><button className="btn btn-primary">Resume</button></form>
                        </div>
                    </p>
                </div>
                <div className='col-1'></div>
                <div className='col-5'>
                    <img src='assets/me.jpg' className='me' style={{ width: "90%" }}></img>
                </div>
            </div>
        </div>
    );
}

export default Hero;