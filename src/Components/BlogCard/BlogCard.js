import React from "react";
import "./BlogCard.css"; // Assuming you save the styles separately in BlogPost.css

const BlogPost = ({ image, date, title, description, link }) => {
  return (
    <div class="blog_post">
      <div class="img_pod">
        <img src={image} alt={title}/>
      </div>
      <div class="card_container">
       <h3>{date}</h3>
       <h1>{title}</h1>
       <p>{description}</p>
       <a class="btn_primary" href={link} target="_blank">Read More</a>
      </div>
    </div>
  );
};

export default BlogPost;
