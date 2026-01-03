import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "My Project 1",
    image: "/public/assets/me.jpg",
    summary: "A short description of project 1",
  },
  {
    id: 2,
    title: "My Project 2",
    image: "/public/assets/me.jpg",
    summary: "A short description of project 2",
  },
  {
    id: 3,
    title: "My Project 3",
    image: "/public/assets/me.jpg",
    summary: "A short description of project 3",
  },
  {
    id: 4,
    title: "My Project 4",
    image: "/public/assets/me.jpg",
    summary: "A short description of project 4",
  },
];

export default function ProjectCarousel() {
  const [current, setCurrent] = useState(0);

  const prev = () => {
    setCurrent((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const next = () => {
    setCurrent((prev) => (prev + 1) % projects.length);
  };

  const getIndex = (offset) =>
    (current + offset + projects.length) % projects.length;

  const handleClick = (project) => {
    // replace with navigation / modal later
    alert(`Open details for: ${project.title}`);
  };

  return (
    <div className="carousel-container">
      <button className="nav-btn left" onClick={prev}>
        ‹
      </button>

      <div className="carousel">
        {[-1, 0, 1].map((offset) => {
          const project = projects[getIndex(offset)];
          return (
            <div
              key={project.id}
              className={`carousel-card ${offset === 0 ? "active" : "inactive"}`}
              onClick={() => offset === 0 && handleClick(project)}
            >
              <img src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
            </div>
          );
        })}
      </div>

      <button className="nav-btn right" onClick={next}>
        ›
      </button>

      {/* Summary */}
      <div className="summary">
        <h2>{projects[current].title}</h2>
        <p>{projects[current].summary}</p>
        <span className="view-more">Click card to view details →</span>
      </div>
    </div>
  );
}
