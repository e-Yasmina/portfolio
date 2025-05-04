import React from "react";
import "./BlogCard.css"; // Assuming you save the styles separately in BlogPost.css

const BlogPost = ({ image, date, title, description, link ,handleReadMore }) => {
  return (
    <div className="blog_post">
      <div className="img_pod">
        <img src={image} alt={title}/>
      </div>
      <div className="card_container">
       <h3>{date}</h3>
       <h1>{title}</h1>
       <p>{description}</p>
       <a className="btn_primary" href={link} target="_blank" onClick={handleReadMore }>Read More</a>
      </div>
    </div>
  );
};

export default BlogPost;
