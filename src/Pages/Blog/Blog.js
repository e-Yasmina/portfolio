import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Blog.css";
import BlogPost from "../../Components/BlogCard/BlogCard";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

// Framer Motion imports
import { motion } from "framer-motion";
import { alternateSlideIn } from "../../utils/animationVariants";

const BlogPage = () => {
  const [blog, setBlog] = useState(0);
  const navigate = useNavigate();

  const handleReadMore = (blogId) => {
    setBlog(blogId);
  };

  const handleBackB = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/menu");
    }
  };

  const blogPosts = [
    {
      image: `${process.env.PUBLIC_URL}/BlogImgs/image1.png`,
      date: "28 Mars 2025",
      title: "From Junior to Senior",
      description:
        "The key difference between juniors and seniors isn’t just knowing a programming language it’s about handling real-world projects effectively.",
    },
    {
      image: `${process.env.PUBLIC_URL}/BlogImgs/image2.png`,
      date: "27 Mars 2025",
      title: "Blog Card",
      description:
        "The position property specifies the type of positioning method used for an element (static, relative, absolute, fixed, or sticky).",
    },
    {
      image: `${process.env.PUBLIC_URL}/BlogImgs/image2.png`,
      date: "27 Mars 2025",
      title: "Blog Card",
      description:
        "The position property specifies the type of positioning method used for an element (static, relative, absolute, fixed, or sticky).",
    },
  ];

  return (
    <div className="container">
      <button className="back-button" onClick={handleBackB}>
        &larr; Back
      </button>

      <div className="blogs-card">
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={0}
          slidesPerView={2}
          slidesPerGroup={2}
          loop={false}
        >
          {blogPosts.map((post, index) => (
            <SwiperSlide key={index}>
              {/* Wrap each BlogPost with motion.div */}
              <motion.div {...alternateSlideIn(index)}>
                <BlogPost
                  image={post.image}
                  date={post.date}
                  title={post.title}
                  description={post.description}
                  handleReadMore={() => handleReadMore(index)}
                />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BlogPage;
