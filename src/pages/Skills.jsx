import React from "react";
import {
  SiReact,
  SiReactrouter,
  SiTypescript,
  SiJavascript,
  SiPython,
  SiDjango,
  SiFlask,
  SiExpo,
  SiFigma,
  SiGit,
  SiVercel,
  SiYarn,
} from "react-icons/si"; // Иконки для популярных технологий
import { FaCode, FaDatabase, FaNode } from "react-icons/fa"; // Дополнительные

const Skills = () => {
  const skillsData = [
    { id: 1, name: "React", icon: <SiReact /> },
    { id: 2, name: "React Native", icon: <SiReact /> }, // Можно использовать ту же иконку с другим цветом
    { id: 3, name: "TypeScript", icon: <SiTypescript /> },
    { id: 4, name: "JavaScript", icon: <SiJavascript /> },
    { id: 5, name: "Python", icon: <SiPython /> },
    { id: 6, name: "Django", icon: <SiDjango /> },
    { id: 7, name: "Flask", icon: <SiFlask /> },
    { id: 8, name: "Expo", icon: <SiExpo /> },
    { id: 9, name: "Figma", icon: <SiFigma /> },
    { id: 10, name: "Git", icon: <SiGit /> },
    { id: 11, name: "REST API", icon: <FaDatabase /> },
    { id: 12, name: "1C (базовый)", icon: <FaCode /> },
  ];

  return (
    <div className="terminal-page">
      <p className="prompt"> ls -la /tools</p>
      <div className="output skills-grid">
        {skillsData.map((skill) => (
          <div key={skill.id} className="skill-item" title={skill.name}>
            <span className="skill-icon">{skill.icon}</span>
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
      <p className="prompt" style={{ marginTop: "20px" }}>
        {" "}
        echo "И это далеко не всё..."
      </p>
      <p className="output" style={{ color: "#8f8" }}>
        И это далеко не всё...
      </p>
    </div>
  );
};

export default Skills;
