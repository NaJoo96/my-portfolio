import React from "react";

const Contacts = () => {
  return (
    <div className="terminal-page">
      <p className="prompt"> cat contacts.txt</p>
      <div className="output">
        <p>
          <span className="highlight">GitHub:</span>{" "}
          <a
            href="https://github.com/NaJoo96"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/NaJoo96
          </a>
        </p>
        <p>
          <span className="highlight">Telegram:</span>{" "}
          <a
            href="https://t.me/ваш_ник"
            target="_blank"
            rel="noopener noreferrer"
          >
            @ваш_ник
          </a>
        </p>
        <p>
          <span className="highlight">Email:</span>{" "}
          <span
            onClick={() => navigator.clipboard.writeText("ваш_email@mail.ru")}
            style={{ cursor: "pointer", textDecoration: "underline" }}
          >
            ваш_email@mail.ru (нажми, чтобы скопировать)
          </span>
        </p>
        <p style={{ marginTop: "10px", color: "#8f8" }}>
          {" "}
          Ответ приходит быстрее, чем вы читаете эту строку
        </p>
      </div>
    </div>
  );
};

export default Contacts;
