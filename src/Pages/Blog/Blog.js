import React from "react";
import "./Blog.css"; // Assuming you save the styles separately in BlogPost.css
import BlogPost from "../../Components/BlogCard/BlogCard";

const BlogPage =() => {
    return (
        <div className="container">
          <BlogPost
              image={`${process.env.PUBLIC_URL}/BlogImgs/image1.png`}
              date="12 January 2019"
              title="CSS Positioning"
              description="The position property specifies the type of positioning method used for an element (static, relative, absolute, fixed, or sticky)."
              link="#"
          />
          <BlogPost
              image="https://pbs.twimg.com/profile_images/890901007387025408/oztASP4n.jpg"
              date="12 January 2019"
              title="CSS Positioning"
              description="The position property specifies the type of positioning method used for an element (static, relative, absolute, fixed, or sticky)."
              link="#"
          />
        </div>
        );
      };
export default BlogPage;
