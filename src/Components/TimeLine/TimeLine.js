import React from "react";
import "./TimeLine.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { pageAnim, letterAnim} from "../../utils/animationVariants";
import { splitTextWithHTML } from "../../helpers"; // Import the helper function
import { timelineTexts } from "../../constants"; // Import the timeline texts

const TimeLine = () => {
  const navigate = useNavigate();

  return (
    <motion.main {...pageAnim}>
      {/* <button className="back-button" onClick={() => navigate(-1)}>
        &larr; Back
      </button> */}
      <div class="image-container" onClick={() => navigate(-1)}>
        <img src={`${process.env.PUBLIC_URL}/Icons/back-arrow-b.png`} alt="Blue Arrow" class="image blue-arrow" />
        <img src={`${process.env.PUBLIC_URL}/Icons/back-arrow-2.png`} alt="Pink Arrow" class="image pink-arrow" />
        <img src={`${process.env.PUBLIC_URL}/Icons/back-arrow-bb.png`} alt="Pink Arrow" class="image both-arrow" />
      </div>
      {timelineTexts.map((text, index) => (
        <motion.div
          index={index}
          className="timePoint"
        {...letterAnim(index)}
        >
          {splitTextWithHTML(text)}
        </motion.div>
      ))}
    </motion.main>
  );
};

export default TimeLine;