import React from "react";

const Mindset = () => {
  return (
    <div className="terminal-page">
      <p className="prompt"> ./think.sh</p>
      <div className="output">
        <p className="step">[1] Понять, зачем это пользователю</p>
        <p className="step">[2] Придумать, как это должно работать</p>
        <p className="step">[3] Сделать так, чтобы не сломалось</p>
        <p className="step">[4] Убедиться, что это удобно</p>
        <p style={{ marginTop: "10px", color: "#8f8" }}>
          {" "}
          Цикл повторяется, пока не будет идеально
        </p>
      </div>
    </div>
  );
};

export default Mindset;
