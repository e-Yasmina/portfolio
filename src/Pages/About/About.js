import React, { useEffect } from 'react';
import 'swiper/swiper-bundle.css';
import './About.css';

import '../../Components/ImgHolder/ImgHolder';
import ImgHolder from '../../Components/ImgHolder/ImgHolder';
import Content from '../../Components/AboutContent/AboutContent';

const About = () => {

  return (
    <div className="About">
      <div className="About__wrp ">
        <div className="About__item ">
          <ImgHolder/>
          <Content/>
        </div>
        </div>
    </div>
  );
};

export default About;
