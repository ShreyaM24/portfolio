import React from "react";

const skillsTimeline = [
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
  }
];

const skillsTimeline2 = [
  {
    title: "C",
    description: "Began my journey into coding and problem-solving through C.",
  },
  {
    title: "Java",
    description: "Learned Java to understand object-oriented programming concepts like classes, inheritance, and interfaces. Mainly use Java from problem solving",
  },
  {
    title: "Python",
    description: "Explored Python for basic scripting, loops, conditionals.",
  }
];

const skillsTimeline3 = [
  {
    title: "Language used",
    description: "Mainly use Java to solve problems.",
  },
  {
    title: "Badges",
    description: "Earned teo badges till now in Leetcode for consistency.",
  }
];

function Hero() {
  return (
    <section className="skills-container page-pop">
      <video
        className="skills-container-video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="assets/jupiter-rot.mp4" type="video/mp4" />
      </video>

      <div className="overlay-content">
        <div className="overlay-box">
          <h1 className="overlay-title">My Tech Superpowers</h1>
          <p className="overlay-subtitle">
            Here’s what’s in my dev toolkit — the tools and technologies that
            help me bring ideas to life:
          </p>
        </div>

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
          <form action="/DSASkills">
            <button type="submit" className="btn btn-primary explore">Explore more here</button>
          </form>


        </div>

        <h2 className="mb-5">Programmimg Languages</h2>
        <div className="timeline">
          {skillsTimeline2.map((item, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-dot" />
              <div className="timeline-content">
                <h4>{item.title}</h4>
                <p className="fs-5">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
