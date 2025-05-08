import React from "react";
import LaptopMockup from '../../Components/Laptop/Laptop';
import "./ProjectCard.css";

const Card = (props) => {
  return (
    
    <div className="project-card" onClick={props.onClick}>
      <div className="pc-container">
        <div className="pc-up-section">
          <div>
            <h2>{props.title}</h2>
            <p>
              {props.description}
            </p>
          </div>
          <LaptopMockup videoUrl={props.url} />  
        </div>
        <p>
          {props.details}
        </p>
      </div>
    </div>
  );
};

export default Card;
