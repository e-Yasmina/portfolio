import React, { useEffect } from 'react';
import 'swiper/swiper-bundle.css';
import './About.css';

const About = () => {

  return (
    <div className="blog-slider">
      <div className="blog-slider__wrp swiper-wrapper">
        <div className="blog-slider__item swiper-slide">
          <div className="blog-slider__img">
             <img src="/Myimg1.png" alt="My Image" />
          </div>
          <div className="blog-slider__content">
            <span className="blog-slider__code">26 December 2019</span>
            <div className="blog-slider__title">Lorem Ipsum Dolor</div>
            <div className="blog-slider__text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?
            </div>
            <a href="#" className="blog-slider__button">READ MORE</a>
          </div>
        </div>
        </div>
    </div>
  );
};

export default About;
