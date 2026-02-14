import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "WanderLust – Airbnb Inspired Project",
    image: "/public/assets/wanderlust.png",
    summary: "WanderLust is my first full-stack web application, inspired by Airbnb. It’s a travel listing platform where users can explore, filter, and manage stays with interactive maps and responsive UI.",
  },
  {
    id: 2,
    title: "ShreyaGPT",
    image: "/public/assets/ShreyaGPT.png",
    summary: "A full-stack ChatGPT-inspired web application built using the MERN stack and integrated with the OpenAI API. This project demonstrates real-time conversational AI, thread management, and scalable architecture with future plans for user authentication and theming.",
  },
  {
    id: 3,
    title: "Zerodha (Kite) Clone",
    image: "/public/assets/Zerodha.png",
    summary: "A simplified clone of the Zerodha Kite trading platform, built using the MERN stack (MongoDB, Express, React, Node.js). This project focuses on creating a clean, fast, and interactive trading dashboard while exploring fintech concepts like portfolios, positions, and real-time data handling.",
  },
  {
    id: 4,
    title: "Vritti — Digital Mental Health Support System for Students",
    image: "/public/assets/Vritti.png",
    summary: "Vritti is a web-based platform designed to support the mental well-being of students through mood tracking, clinical assessments, AI-guided help, and counsellor integration. It offers anonymous, secure, and stigma-free support to encourage early detection and timely intervention.",
  },

  {
    id: 5,
    title: "Project California ",
    image: "/public/assets/Project-california.png",
    summary: "Project California is a data science project focused on analyzing and extracting insights from real-world data related to California. The goal of this project is to perform data preprocessing, exploratory data analysis, feature engineering, and model building to derive meaningful conclusions and predictions.",
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
              <div className="image-wrapper">
                <img src={project.image} alt={project.title} />

                <div className="overlay">
                  <span>Click card to see details</span>
                </div>
              </div>

              <h3>{project.title}</h3>

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
      </div>
    </div>
  );
}
