import React,{useState} from 'react';
import { motion, AnimatePresence } from "framer-motion";
import Card from '../../Components/ProjectCard/ProjectCard';
import { projects } from '../../constants';
import { useNavigate } from 'react-router-dom';
import './Projects.css';
import {  } from 'framer-motion/client';



const Projects = () => { 
    // Track the hovered card 
    const [hoveredCard, setHoveredCard] = useState(null);
    const navigate = useNavigate();
    
     
  const handleDotsMouseEnter = (id) => {
    setHoveredCard(id); // Set the hovered card ID when dots are hovered
  };

  const handleArrowsMouseEnter = () => {
    setHoveredCard(null); // Reset the hovered card ID when arrows are hovered
  }
  const handleBackB = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/menu");
    }
  };
  
    return (
      <>
      <div class="image-container" onClick={handleBackB}>
       <img src={`${process.env.PUBLIC_URL}/Icons/back-arrow-1.png`} alt="Blue Arrow" class="image blue-arrow" />
       <img src={`${process.env.PUBLIC_URL}/Icons/back-arrow-b.png`} alt="Pink Arrow" class="image pink-arrow" />
       <img src={`${process.env.PUBLIC_URL}/Icons/back-arrow-bb.png`} alt="Pink Arrow" class="image both-arrow" />
      </div>

      
      <div className="projects-container">
        {projects.map((project) => (
        hoveredCard === project.id || !hoveredCard ? (
          <div key={project.id} className={`card-div ${hoveredCard === project.id ? "hovered" : ""}`}>
              <Card
                title={project.title}
                type={project.type}
                url={project.url}
                description={project.description}
                details={project.details}
                moreInfo={project.moreInfo}
                tech={project.tech}
                link={project.link}
                sourceCode={project.sourceCode}
                houvered={hoveredCard === project.id}
              />
              {!hoveredCard && <div
              className="hover-indicator"
              onMouseEnter={() => handleDotsMouseEnter(project.id)}>
              <div className="dots">
                <span>•</span>
                <span>•</span>
                <span>•</span>
              </div>
              <span className="tooltip">Hover for more info</span>
              </div>}
              {hoveredCard && <div
              className="out"
              onMouseEnter={() => handleArrowsMouseEnter()}>
              <div className="arrows">
                <span>‹</span>
                <span>‹</span>
                <span>‹</span>
              </div>
              <span className="tooltip">close the project</span>
              </div>}
          </div>
        ): null
        ))}
      </div>
</>
);
}


export default Projects;