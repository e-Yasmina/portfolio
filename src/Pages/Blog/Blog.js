import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Blog.css";
import BlogPost from "../../Components/BlogCard/BlogCard";
import { blogPosts } from "../../constants";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

// Framer Motion imports
import { motion, AnimatePresence } from "framer-motion";
import { alternateSlideIn } from "../../utils/animationVariants";

const BlogPage = () => {
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  const [blog, setBlog] = useState(0);
  const navigate = useNavigate();

  const handleReadMore = (blogId) => {
    setBlog(blogId);
  };

  const handleBackB = () => {
    if (window.history.length > 1) {
      setIsAnimatingOut(true); // Start the exit animation
      setTimeout(() => {
        navigate(-1);
      }, 2000);
      
    } else {
      setIsAnimatingOut(true); // Start the exit animation
      setTimeout(() => {
        navigate("/menu");
      }, 2000);
    }
  };
  

  return (
    <div className="container">
      <div class="image-container" onClick={handleBackB}>
       <img src={`${process.env.PUBLIC_URL}/Icons/back-arrow-b.png`} alt="Blue Arrow" class="image blue-arrow" />
       <img src={`${process.env.PUBLIC_URL}/Icons/back-arrow-2.png`} alt="Pink Arrow" class="image pink-arrow" />
       <img src={`${process.env.PUBLIC_URL}/Icons/back-arrow-bb.png`} alt="Pink Arrow" class="image both-arrow" />
      </div>

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
                <AnimatePresence>
                {!isAnimatingOut && (
                <motion.div {...alternateSlideIn(index)}>
                <BlogPost
                  image={post.image}
                  date={post.date}
                  title={post.title}
                  description={post.description}
                  handleReadMore={() => handleReadMore(index)}
                />
                </motion.div>
                )}
                </AnimatePresence>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BlogPage;
