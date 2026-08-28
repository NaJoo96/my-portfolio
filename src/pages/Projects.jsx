import React from "react";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <div className="terminal-page projects-page">
      <p className="prompt"> ls -la /projects</p>
      <div className="output projects-list">
        <p>
          <span className="highlight">├── anime-tracker/</span> — приложение для
          поиска и отслеживания аниме (React + Jikan API)
        </p>
        <p>
          <span className="highlight">├── terminal-resume/</span> — это моё
          резюме в стиле терминала (React + Framer Motion)
        </p>
        <p>
          <span className="highlight">└── marketplace-app/</span> — прототип
          маркетплейса на React Native (навигация, анимация)
        </p>
        <p style={{ marginTop: "12px", color: "#8f8" }}>
          {" "}
          Больше проектов можно посмотреть на GitHub
        </p>
      </div>

      {/* Блок-ссылка на GitHub, стилизованный как аватар */}
      <a
        href="https://github.com/NaJoo96"
        target="_blank"
        rel="noopener noreferrer"
        className="github-link-container"
        title="Перейти на GitHub"
      >
        <div className="github-icon-wrapper">
          <FaGithub className="github-icon" />
        </div>
        <span className="github-label">github.com/NaJoo96</span>
      </a>
    </div>
  );
};

export default Projects;
