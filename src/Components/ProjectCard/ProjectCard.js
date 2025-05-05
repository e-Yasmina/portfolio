import React from "react";
import LaptopMockup from '../../Components/Laptop/Laptop';
import "./ProjectCard.css";

const Card = (props) => {
  return (
    <div className="body">
    <div className="card" onClick={props.onClick}>
      <div className="container">
        <div className="up-section">
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
    </div>
  );
};

export default Card;
