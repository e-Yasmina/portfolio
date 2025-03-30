import React from "react";
import "./SkillsContent.css"; // Importing the CSS file



export default function SkillsContent(item) {
  return (
    <div className="skills-container">
      <div className="skills-grid">
          <div className="skill-card">
            <p className="skill-text">{item.text.split("\n").map((line, i) => <span key={i}>{line}<br /></span>)}</p>
          </div>
      </div>
    </div>
  );
}
