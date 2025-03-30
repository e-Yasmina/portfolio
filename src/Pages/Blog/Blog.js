import React, { useState } from "react";
import "./Blog.css"; 
import BlogPost from "../../Components/BlogCard/BlogCard";
import BlogContent from "../../Components/BlogContent/BlogContent";

const BlogPage =() =>{ 
  //const [cards, setCards] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [showLess, setShowLess] = useState(true);
  const handleReadMore = () => {
    setShowLess(false);
    setShowMore(true);
  };

    return (
        <div className="container">
        {showLess && <div className="blogs-card">
          <BlogPost
              image={`${process.env.PUBLIC_URL}/BlogImgs/image1.png`}
              date="28 Mars 2025"
              title="From Junior to Senior"
              description="The key difference between juniors and seniors isn’t just knowing a programming language it’s about handling real-world projects effectively."
              handleReadMore ={handleReadMore}
          />
          <BlogPost
              image={`${process.env.PUBLIC_URL}/BlogImgs/image2.png`}
              date="27 Mars 2025"
              title="Blog Card"
              description="The position property specifies the type of positioning method used for an element (static, relative, absolute, fixed, or sticky)."
              link="#"
          />
        </div>}
        {showMore && <div className="blogs">
          <BlogContent
              image={`${process.env.PUBLIC_URL}/BlogImgs/image3.png`}
              title="From Junior to Senior: A Roadmap to Real-World Engineering Skills"
              link="#"
              content="Introduction

The difference between a junior and a senior software engineer isn’t just about knowing more programming languages or frameworks. It’s about understanding how to handle real-world projects, debugging complex systems, and designing scalable architectures. If you’re a beginner looking to stand out, you need to focus on mastering the skills that companies value most.

This article marks the beginning of a structured journey—an actionable roadmap—to help you bridge the gap from junior to senior developer.

Why This Roadmap?

The difference between a junior and a senior software engineer isn’t just about knowing more programming languages or frameworks. It’s about understanding how to handle real-world projects, debugging complex systems, and designing scalable architectures. If you’re a beginner looking to stand out, you need to focus on mastering the skills that companies value most.

This article marks the beginning of a structured journey—an actionable roadmap—to help you bridge the gap from junior to senior developer.

Why This Roadmap?


Yasmina 
"
          />
        </div>}
        </div>
        );
      };
export default BlogPage;
