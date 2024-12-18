import React from 'react';
import './AboutContent.css';

const Content = () => {
  return (
    <div className="About__content">
      <span className="About__subtitle">About</span>
      <div className="About__title">Yasmina Elbernoussi</div>
      <div className="About__text">
        I am a Junior Software Engineer specializing in both mobile and web application development. I have hands-on experience with various technologies, including Ionic and Flutter for mobile development, and HTML, JavaScript, CSS, Spring Boot, and Laravel for web development. I am eager to leverage my versatile skill set in a dynamic environment to deliver innovative software solutions.
      </div>
      <div className="About__text">
        As a dedicated software engineer with a state engineer diploma, I am passionate about advancing digital healthcare technologies and automation. My research interests lie at the intersection of Health IT and AI, with a focus on improving healthcare outcomes through digital transformation.
      </div>
      <a href="#" className="About__button">READ MORE</a>
    </div>
  );
};

export default Content;
