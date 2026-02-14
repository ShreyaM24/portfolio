import React from "react";

const achievementsTimeline = [
  {
    title: "GirlScript Summer of Code 2025 — Selected Contributor",
    description:
      "Selected as a contributor for GSSoC 2025, where I worked on open-source projects, collaborated with developers, and contributed to real-world codebases.",
  },
  {
    title: "TCS CodeVita Season 13 — Round 1 Qualified",
    description:
      "Qualified for round 1 of TCS CodeVita Season 13, demonstrating strong problem-solving ability, algorithmic thinking, and coding skills under competitive conditions.",
  },
];

function Hero() {
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
        <source src="assets/neptune-rot.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="overlay-content">
        <div className="overlay-box">
          <h1 className="overlay-title">Experience/Achievements</h1>
          <p className="overlay-subtitle">
            Some milestones from my coding journey, competitive programming,
            and open-source contributions.
          </p>
        </div>

        {/* ACHIEVEMENTS TIMELINE */}
        <div className="timeline mt-5 overlay-box">
          {achievementsTimeline.map((item, index) => (
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
