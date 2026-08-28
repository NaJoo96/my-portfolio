import React from "react";
import avatar from "../assets/avatar.png";

const Home = () => {
  return (
    <div className="terminal-page home-page">
      {" "}
      {/* Добавили класс для кастомизации */}
      <div className="avatar-container">
        <img src={avatar} alt="My avatar" className="avatar" />
      </div>
      <div className="greeting">
        <p className="prompt"> whoami</p>
        <p
          className="output"
          style={{ fontSize: "1.3rem", fontWeight: "bold" }}
        >
          Привет! Я — разработчик, который:
        </p>
        <ul className="output-list">
          <li>Делает интерфейсы, которые работают</li>
          <li>Понимает, как устроен бэкенд</li>
          <li>Говорит на языках людей и машин</li>
          <li>И да, я водила трактор</li>
        </ul>
        <p className="prompt"> echo "Готова к новым задачам"</p>
        <p className="output">Готова к новым задачам</p>
      </div>
    </div>
  );
};

export default Home;
