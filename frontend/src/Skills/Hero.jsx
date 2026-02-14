import React, { useEffect, useRef, useState } from "react";

const skillsTimeline = [
    {
        title: "Tech Stack I Use",
        description: "MERN Stack (MongoDB, Express.js, React.js, Node.js) for full-stack web development.",
    },
    {
        title: "Frontend & Basics",
        description: "Learned HTML, CSS, JavaScript and Bootstrap to create responsive web pages.",
    },
    {
        title: "Backend & Full-Stack",
        description: "Built backend with Node.js and Express. Integrated MongoDB to store dynamic data.",
    },
    {
        title: "React",
        description: "Used React.js to build SPAs.",
    },
];

const dataScienceTimeline = [
    {
        title: "Data Analysis & Machine Learning",
        description: "Worked with datasets to clean, analyze, and extract meaningful insights using Python-based workflows.",
    },
    {
        title: "Tools & Libraries",
        description: "Used Pandas, NumPy, Matplotlib, and Scikit-learn for data processing, visualization, and building basic predictive models.",
    }
];



const skillsTimeline3 = [
    {
        title: "Language used",
        description: "Primarily use Java for DSA and C for understanding low-level problem-solving.",
    },
    {
        title: "Badges",
        description: "Earned two badges till now in Leetcode for consistency.",
    },
];

function Hero() {
    const [count, setCount] = useState(0);
    const ref = useRef();
    const hasAnimated = useRef(false);
    const target = 150;

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;
                    let current = 0;
                    const step = Math.ceil(target / 100);
                    const interval = setInterval(() => {
                        current += step;
                        if (current >= target) {
                            setCount(target);
                            clearInterval(interval);
                        } else {
                            setCount(current);
                        }
                    }, 20);
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, [target]);

    return (
        <section className="skills-container page-pop" style={{ marginTop: "50px" }}>
            {/* Background video */}
            <video
                className="skills-container-video"
                autoPlay
                loop
                muted
                playsInline
            >
                <source src="assets/earth-rot.mp4" type="video/mp4" />
            </video>

            {/* Overlay */}
            <div className="overlay-content">
                <div className="overlay-box">
                    <h1 className="overlay-title">My Tech Superpowers</h1>
                    <p className="overlay-subtitle">
                        Here’s what’s in my dev toolkit — the tools and technologies that
                        help me bring ideas to life:
                    </p>
                </div>

                {/* WEB DEVELOPMENT */}
                <h2 className="mb-5">Web Development</h2>
                <div className="timeline">
                    {skillsTimeline.map((item, index) => (
                        <div className="timeline-item" key={index}>
                            <div className="timeline-dot" />
                            <div className="timeline-content">
                                <h4>{item.title}</h4>
                                <p className="fs-5">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* DATA SCIENCE */}
                <h2 className="mb-5">Data Science</h2>
                <div className="timeline">
                    {dataScienceTimeline.map((item, index) => (
                        <div className="timeline-item" key={index}>
                            <div className="timeline-dot" />
                            <div className="timeline-content">
                                <h4>{item.title}</h4>
                                <p className="fs-5">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* DSA */}
                <h2 className="mb-5">Data Structures & Algorithms</h2>
                <div className="timeline">
                    {skillsTimeline3.map((item, index) => (
                        <div className="timeline-item" key={index}>
                            <div className="timeline-dot" />
                            <div className="timeline-content">
                                <h4>{item.title}</h4>
                                <p className="fs-5">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* DSA Stats */}
                <div ref={ref} className="dsa-card mt-5">
                    <h1
                        className="text-center"
                        style={{ color: "#ff66c4ff", textShadow: "0 0 20px #000000ff" }}
                    >
                        Leetcode Progress
                    </h1>
                    <table className="lc-table">
                        <thead>
                            <tr>
                                <th>Problems Solved</th>
                                <th>Language Used</th>
                                <th>Maximum Streak</th>
                                <th>Link <i className="fa-solid fa-arrow-up-right-from-square"></i></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{count}+</td>
                                <td>Java</td>
                                <td>19</td>
                                <td>
                                    <a href="https://leetcode.com/u/Smukherjee24/" target="_blank" rel="noopener noreferrer">
                                        Leetcode
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <h1
                        className="text-center"
                        style={{ color: "#ff66c4ff", textShadow: "0 0 20px #000000ff" }}
                    >
                        Courses Done
                    </h1>
                    <table className="lc-table">
                        <thead>
                            <tr>
                                <th>Course Name</th>
                                <th>Institution</th>
                                <th>Visit <i className="fa-solid fa-arrow-up-right-from-square"></i></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>DSA with Java</td>
                                <td>Apna College</td>
                                <td><a href="/dsa.pdf">Certificate</a></td>
                            </tr>

                            <tr>
                                <td>Data Science Course</td>
                                <td>Code With Harry</td>
                                <td><a href="/data-science.pdf">Certificate</a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}

export default Hero;
