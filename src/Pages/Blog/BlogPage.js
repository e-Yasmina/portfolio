import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Blog.css"; 
import BlogPost from "../../Components/BlogCard/BlogCard";
import BlogContent from "../../Components/BlogContent/BlogContent";
import { s } from "framer-motion/client";

const BlogPage =() =>{ 
  const [showMore, setShowMore] = useState(false);
  const [showLess, setShowLess] = useState(true);
  const [blog, setBlog] = useState(0);
  const navigate = useNavigate();
  
  const handleReadMore = (blogId) => {
    setBlog(blogId);
    setShowLess(false);
    setShowMore(true);
    
  };
  const handleBackB = () => {
    if (showLess){
      // Navigate back in history if there is a previous page
    if (window.history.length > 1) {
      navigate(-1); // Go back to the previous page
    } else {
      navigate("/menu"); // Fallback to a specific route if no history exists
    }
    }
    else{
      setShowLess(true);
      setShowMore(false);
    }
  };

    return (
        <div className="container">
          <button className="back-button" onClick={handleBackB}>
              &larr; Back
          </button>
        {showLess && <div className="blogs-card">
          
          <BlogPost
              image={`${process.env.PUBLIC_URL}/BlogImgs/image1.png`}
              date="28 Mars 2025"
              title="From Junior to Senior"
              description="The key difference between juniors and seniors isn’t just knowing a programming language it’s about handling real-world projects effectively."
              handleReadMore={() => handleReadMore(1)}
          />
          <BlogPost
              image={`${process.env.PUBLIC_URL}/BlogImgs/image2.png`}
              date="27 Mars 2025"
              title="Blog Card"
              description="The position property specifies the type of positioning method used for an element (static, relative, absolute, fixed, or sticky)."
              link="#"
          />
        </div>}
        {showMore && blog===1 && <div className="blogs">
          {/* <button className="back-button" onClick={handleBackB}>
            &larr; Back
          </button> */}
          <BlogContent
              mainImage={`${process.env.PUBLIC_URL}/BlogImgs/junior-senior-symbol.png`}
              title="Bridging the Gap: How Juniors Can Think and Work Like Senior Developers"
              link="#"
              sections={[
                {
                  subtitle: "Introduction",
                  textBlocks: [{text: "The tech industry is booming, yet many junior developers struggle to land their first job or progress in their careers. Why? Because companies aren’t just looking for people who know how to write code—they want engineers who can <strong> solve problems, design scalable systems, and work within real-world constraints</strong>.<br>The biggest difference between junior and senior developers isn’t just years of experience—it’s about how they approach software development. A junior might focus on writing code that works, while a senior ensures the code is scalable, maintainable, and efficient.<br>So, if you’re a beginner or an early-career developer, how can you stand out and bridge this gap quickly? It starts by mastering the skills that matter most in real-world projects."
                },]},
                {
                  subtitle: "The Key Differences Between Junior and Senior Developers",
                  textBlocks: [
                    {listText:"<strong>1. Problem-Solving Mindset</strong>",
                  text: [
                    "Juniors often rely on tutorials, Stack Overflow, and trial-and-error.",
                    "Seniors analyze issues deeply, debug efficiently, and use past experience to find optimal solutions.",
                  ]},
                  {listText:"<strong>2. Understanding of Codebases</strong>",
                    text: [
                      "Juniors struggle to navigate large, existing projects and often fear breaking things.",
                      "Seniors can read, understand, and improve legacy code without hesitation.",
                  ]},
                  {listText:"<strong>3. Code Quality and Maintainability</strong>",
                      text: [
                        "Juniors focus on writing code that works.",
                        "Seniors ensure their code is clean, modular, and easy to extend for future development.",
                  ]},
                  {listText:"<strong>4. System Design & Architecture</strong>",
                    text: [
                      "Juniors focus on writing individual features.",
                      "Seniors think about scalability, databases, APIs, caching, and deployments before writing any code.",
                 ]},
                 {listText:"<strong>6. Deployment & DevOps</strong>",
                  text: [
                    "Juniors rarely handle deployments and CI/CD.",
                    "Seniors understand Docker, Kubernetes, CI/CD pipelines, and cloud services to ensure smooth production releases.",
                 ]},
                 {listText:"<strong>7. Communication & Documentation</strong>",
                  text: [
                    "Juniors write code without explaining their thought process.",
                    "Seniors document their work properly, making it easier for teams to collaborate.",
                 ]}
                ],},
                {
                  subtitle: "Why Mastering These Skills Matters",
                  textBlocks: [{text:"Many junior developers focus too much on coding languages and frameworks but neglect the skills that make them valuable in real-world projects. Companies expect developers to read existing codebases, debug issues, optimize performance, and contribute beyond just writing code.<br>If you want to stand out, you need to think beyond syntax and libraries—you need to learn how to handle real-world software development.",
                  }]
                }
              ]}
          />
        </div>} 
        {/* {showMore && blog==2 && <div className="blogs">
          <BlogContent
              mainImage={`${process.env.PUBLIC_URL}/BlogImgs/junior-senior-symbol.png`}
              title="From Junior to Senior: A Roadmap to Real-World Engineering Skills"
              link="#"
              sections={[
                {
                  subtitle: "Introduction",
                  text: `The difference between a junior and a senior software engineer isn’t just about knowing more programming languages or frameworks. It’s about understanding how to handle real-world projects, debugging complex systems, and designing scalable architectures. If you’re a beginner looking to stand out, you need to focus on mastering the skills that companies value most.
                  This article marks the beginning of a structured journey—an actionable roadmap—to help you bridge the gap from junior to senior developer.`
                },
                {
                  subtitle: "Why This Roadmap?",
                  listText:"Many aspiring engineers believe that mastering syntax and algorithms is enough to land high-paying jobs. However, companies expect more than just coding ability. They need engineers who can:",
                  text: [
                    "Navigate and improve legacy codebases.",
                    "Design scalable and maintainable systems.",
                    "Debug and optimize code effectively.",
                    "Deploy and manage production-ready applications.",
                  ],
                  listAfterText:" This roadmap is designed to help you develop these high-impact skills, even if you don’t have years of experience.",
                  image: `${process.env.PUBLIC_URL}/BlogImgs/beginnerToExpert.png`,
                },
                {
                  subtitle: "Phase 1: Mastering Legacy Code",
                  listText:"Why it matters: In most jobs, you won’t start with a fresh codebase. Instead, you’ll be maintaining or improving existing systems. Understanding legacy code is a must-have skill. \nHow to practice:",
                  text: [
                    "Clone open-source projects and explore the code structure.",
                    "Debug an unfamiliar codebase and try to fix issues.",
                    "Read Git history and documentation to understand past decisions.",
                  ],
                  // listAfterText:" This roadmap is designed to help you develop these high-impact skills, even if you don’t have years of experience.",
                  // image: `${process.env.PUBLIC_URL}/BlogImgs/image.png`,
                },
                {
                  subtitle: "Phase 2: Learning System Design & Architecture",
                  listText:"Why it matters: Juniors write code that works. Seniors design systems that scale. Understanding system architecture makes you a valuable asset to any team.\nHow to practice:",
                  text: [
                    "Study microservices vs. monolithic architectures.",
                    "Implement caching strategies (Redis, Memcached).",
                    "Build a mini-system with different services (e.g., an e-commerce platform with separate user, order, and payment services).",
                  ],
                  // listAfterText:" This roadmap is designed to help you develop these high-impact skills, even if you don’t have years of experience.",
                  image: `${process.env.PUBLIC_URL}/BlogImgs/SysImage.png`,
                },
                {
                  subtitle: "Phase 3: Writing Maintainable & Scalable Code",
                  listText:"Why it matters: Clean, maintainable code reduces technical debt and makes scaling easier. Following best practices ensures your code is readable and extensible.\nHow to practice:",
                  text: [
                    "Learn SOLID principles and apply them to your projects.",
                    "Refactor old code to improve readability and maintainability.",
                    "Study design patterns and implement them where appropriate.",    
                  ],
                  // listAfterText:" This roadmap is designed to help you develop these high-impact skills, even if you don’t have years of experience.",
                  //image: `${process.env.PUBLIC_URL}/BlogImgs/SysImage.png`,
                },
                {
                  subtitle: "Phase 3: Writing Maintainable & Scalable Code",
                  listText:"<strong>Why it matters</strong>: Clean, maintainable code reduces technical debt and makes scaling easier. Following best practices ensures your code is readable and extensible.\nHow to practice:",
                  text: [
                    "Learn SOLID principles and apply them to your projects.",
                    "Refactor old code to improve readability and maintainability.",
                    "Study design patterns and implement them where appropriate.",    
                  ],
                  // listAfterText:" This roadmap is designed to help you develop these high-impact skills, even if you don’t have years of experience.",
                  image: `${process.env.PUBLIC_URL}/BlogImgs/debugging.png`,
                },
              ]}
          />
        </div>} */}
        </div>
        );
};
export default BlogPage;
