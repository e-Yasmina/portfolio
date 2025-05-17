import React from "react";
import { useState } from "react";
import LaptopMockup from '../../Components/Laptop/Laptop';
import MobileMockup from "../../Components/Mobile/MobileMockup"; // Assuming you have a MobileMockup component
import matchers from "@testing-library/jest-dom/matchers";
import "./ProjectCard.css";

const Card = (props) => {
  
  return  (
    <div
      className={`project-card ${props.houvered ? "hovered" : ""}`}
    >
      <div className="pc-container">
        <div className="pc-up-section">
          <div>
            <h2>{props.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: props.description }}>
            </p>
            {props.houvered && (
            <h3>🛠 Technologies Used</h3>
            )}
            
            {props.houvered && (
            <p dangerouslySetInnerHTML={{ __html: props.tech }} style={{ marginLeft: "40px" }}>
            </p>
            )}
            {props.type === "mobile" && props.houvered && (
              <>
                {props.link && (
                  <div dangerouslySetInnerHTML={{ __html: props.link }}></div>
                )}
                {props.sourceCode && (
                  <div dangerouslySetInnerHTML={{ __html: props.sourceCode }}></div>
                )}
              </>
            )}
          </div>
          {props.type === "laptop" ? (
            <LaptopMockup videoUrl={props.url}/>
          ) : props.type === "mobile" ? (
            <MobileMockup videoUrl={props.url}/>
          ) : null}  
          
          </div>
        
        {props.details && (
         <p dangerouslySetInnerHTML={{ __html: props.details }}></p>
        )}
        {props.houvered && props.moreInfo && (
         <p dangerouslySetInnerHTML={{ __html: props.moreInfo }}></p>
        )}
        {props.type !== "mobile" && props.houvered && props.link && (
          <div dangerouslySetInnerHTML={{ __html: props.link }}></div>
        )}
        {props.type !== "mobile" && props.houvered && props.sourceCode && (
          <div dangerouslySetInnerHTML={{ __html: props.sourceCode }}></div>
        )}
      </div>
    </div> 
  )
};

export default Card;
