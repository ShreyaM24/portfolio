import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "WanderLust",
    image: "/assets/wanderlust.png",
    technologies: "Technologies Used : MongoDB, Express, Node, Leaflet, CSS",
    live: "https://wanderlust-yfkx.onrender.com/",
    github: "https://github.com/ShreyaM24/wanderlust-by-apnacollege",
    summary:
      "WanderLust is my first full-stack web application, inspired by Airbnb. It’s a travel listing platform where users can explore, filter, and manage stays with interactive maps and responsive UI.",
  },
  {
    id: 2,
    title: "ShreyaGPT",
    image: "/assets/ShreyaGPT.png",
    technologies: "Technologies Used : React, Context API, OpenAI API, Express, MongoDB, CSS",
    live: null,
    github: "https://github.com/ShreyaM24/ShreyaGPT",
    summary:
      "A full-stack ChatGPT-inspired web application built using the MERN stack and integrated with the OpenAI API.",
  },
  {
    id: 3,
    title: "Zerodha Clone",
    image: "/assets/zerodha.png",
    technologies: "Technologies Used : React, Axios, CSS, Node, Express, MongoDB",
    live: null,
    github: "https://github.com/ShreyaM24/ZerodhaClone",
    summary:
      "A simplified clone of the Zerodha Kite trading platform, built using the MERN stack. This project focuses on creating a clean, fast, and interactive trading dashboard while exploring fintech concepts like portfolios, positions, and real-time data handling.",
  },
  {
    id: 4,
    title: "Vritti",
    image: "/assets/Vritti.png",
    technologies: "Technologies Used : React, Tailwind CSS, Node, Express, MongoDB, i18next, Recharts, Vite, OpenAI API",
    live: null,
    github: "https://github.com/ShreyaM24/Vritti",
    summary:
      "Vritti, our prototype for the Smart India Hackathon problem statement, is a web-based platform designed to support the mental well-being of students through mood tracking, clinical assessments, AI-guided help, and counsellor integration. It offers anonymous, secure, and stigma-free support to encourage early detection and timely intervention. In this project, I worked as a Backend Developer, where I contributed to building the server-side logic, database handling, and API integration to ensure secure and efficient data management.",
  },
  {
    id: 5,
    title: "Project California",
    image: "/assets/Project-california.png",
    technologies: "Technologies Used : Python, Pandas, Scikit-learn, Matplotlib, Numpy, HTML, CSS, Flask",
    live: null,
    github: "https://github.com/ShreyaM24/Project-California",
    summary:
      "Project California is a data science project focused on analyzing and extracting insights from real-world data related to California. The goal of this project is to perform data preprocessing, exploratory data analysis, feature engineering, and model building to derive meaningful conclusions and predictions.",
  },
];

export default function ProjectCarousel() {

  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((prev) => (prev - 1 + projects.length) % projects.length);

  const next = () =>
    setCurrent((prev) => (prev + 1) % projects.length);

  const getIndex = (offset) =>
    (current + offset + projects.length) % projects.length;

  const activeProject = projects[current];

  return (
    <div className="carousel-container">

      <button className="nav-btn left" onClick={prev}>‹</button>

      <div className="carousel">
        {[-1, 0, 1].map((offset) => {
          const project = projects[getIndex(offset)];
          return (
            <div
              key={project.id}
              className={`carousel-card ${offset === 0 ? "active" : "inactive"}`}
            >
              <div className="image-wrapper">
                <img src={project.image} alt={project.title}/>
              </div>

              <h3>{project.title}</h3>
            </div>
          );
        })}
      </div>

      <button className="nav-btn right" onClick={next}>›</button>

      <div className="summary">

        <h2 className="title">{activeProject.title}</h2>
        
        <div className="tech-stack">
          <p className="tech-text">{activeProject.technologies}</p>
        </div>

        <p>{activeProject.summary}</p>

        <div className="project-buttons">

          {activeProject.live && (
            <a href={activeProject.live} target="_blank" rel="noreferrer">
              <button className="live-btn">Live Demo</button>
            </a>
          )}

          <a href={activeProject.github} target="_blank" rel="noreferrer">
            <button className="github-btn">GitHub</button>
          </a>

        </div>

      </div>
    </div>
  );
}
