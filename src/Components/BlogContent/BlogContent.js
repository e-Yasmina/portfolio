import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./BlogContent.css"; // Add styles for BlogContent

const BlogContent = ({title, image, content}) => {
  const navigate = useNavigate();
  const location = useLocation();
  //const { title, content, image } = location.state || {};

  return (
    <div className="blog-content-container">
      <button className="back-button" onClick={() => navigate(-1)}>
        &larr; Back
      </button>
      <div className="blog-content">
        <img src={image} alt={title} className="blog-content-image" />
        <h1 className="blog-content-title">{title}</h1>
        <div className="blog-content-body">{content}</div>
      </div>
    </div>
  );
};

export default BlogContent;