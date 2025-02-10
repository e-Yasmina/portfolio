import React from "react";
import "./ProjectCard.css";

const Card = (props) => {
  return (
    <div className="body">
    <div className="card" onClick={props.onClick}>
      <div className="container">
        <img
          className="project-image"
          src={props.image}
          alt={props.ImgT}
        />
        <h2>{props.title}</h2>
        <p>
          {props.description}
        </p>
      </div>
    </div>
    </div>
  );
};

export default Card;
