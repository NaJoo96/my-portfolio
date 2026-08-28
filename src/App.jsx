import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Mindset from "./pages/Mindset";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";
import "./styles/terminal.css";

function App() {
  return (
    <BrowserRouter>
      <div className="terminal-container">
        {/* Навигация — теперь она будет sticky */}
        <nav className="terminal-nav">
          <Link to="/" className="nav-link">
            [~]
          </Link>
          <Link to="/skills" className="nav-link">
            skills
          </Link>
          <Link to="/mindset" className="nav-link">
            mindset
          </Link>
          <Link to="/projects" className="nav-link">
            projects
          </Link>
          <Link to="/contacts" className="nav-link">
            contacts
          </Link>
        </nav>

        {/* Контент теперь будет скроллиться под навигацией */}
        <div className="terminal-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/mindset" element={<Mindset />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
