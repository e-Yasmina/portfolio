import React, { useEffect } from 'react';
import 'swiper/swiper-bundle.css';
import './About.css';

const About = () => {

  return (
    <div className="blog-slider">
      <div className="blog-slider__wrp swiper-wrapper">
        <div className="blog-slider__item swiper-slide">
          <div className="blog-slider__img">
             <img src="https://raw.githubusercontent.com/e-Yasmina/Portfolio/f984c5d0d28138e5efc030eca85046b31a0fcb90/public/Myimg1.png" alt="My Image" />
          </div>
          <div className="blog-slider__content">
            <span className="blog-slider__code">About</span>
            <div className="blog-slider__title">Yasmina Elbernoussi</div>
            <div className="blog-slider__text">
            I am a Junior Software Engineer specializing in both mobile and web application development. I have hands-on experience with various technologies, including Ionic and Flutter for mobile development, and HTML, JavaScript, CSS, Spring Boot, and Laravel for web development. I am eager to leverage my versatile skill set in a dynamic environment to deliver innovative software solutions. 
            </div>
            <div className="blog-slider__text">
            As a dedicated software engineer with a state engineer diploma, I am passionate about advancing digital healthcare technologies and automation. My research interests lie at the intersection of Health IT and AI, with a focus on improving healthcare outcomes through digital transformation.
            </div>
            <a href="#" className="blog-slider__button">READ MORE</a>
          </div>
        </div>
        </div>
    </div>
  );
};

export default About;
