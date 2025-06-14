import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./Accordion.css"; // Add styles for Accordion
import SkillsContent from "../SkillsContent/SkillsContent";
import { pageAnim, alternateSlideIn,accordionTitleAnim } from "../../utils/animationVariants";
import {content} from "../../constants"; // Import content data

const Accordion = () => {
  const navigate = useNavigate();
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  const [selected, setSelected] = useState(null);


  const items = [
    "🖥️ Frontend Development",
    "⚙️ Backend Development",
    "📊 Data & AI",
    "🏥 Health IT & Digitalization",
    "🛠 Tools & DevOps",
  ];


  const triggerAnimation = () => {
    setIsAnimatingOut(true); // Start the exit animation
    setTimeout(() => {
      navigate(-1);
    }, 2000);
  };

  return (
    <motion.div {...pageAnim} className="motion_div">
      <div className="wrapper">
        {/* <button className="back-button" onClick={triggerAnimation}>
          &larr; Back
        </button> */}
        <div class="image-container" onClick={triggerAnimation}>
          <img src={`${process.env.PUBLIC_URL}/Icons/back-arrow-b.png`} alt="Blue Arrow" class="image blue-arrow" />
          <img src={`${process.env.PUBLIC_URL}/Icons/back-arrow-2.png`} alt="Pink Arrow" class="image pink-arrow" />
          <img src={`${process.env.PUBLIC_URL}/Icons/back-arrow-bb.png`} alt="Pink Arrow" class="image both-arrow" />
        </div>

        <h2 className="main-title">
          {Array.from("My Skills & Expertise:").map((letter, index) => (
            <AnimatePresence>
            {!isAnimatingOut && (<motion.span index={index} {...accordionTitleAnim(index)}>
              <motion.span index={index} {...accordionTitleAnim(index)}>
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            </motion.span>
            )}
            </AnimatePresence>
            
          ))}
        </h2>
        {items.map((val, key) => (
          <motion.div key={key} {...alternateSlideIn(key)}>
            <AnimatePresence>
              {!isAnimatingOut && (
                <motion.div {...alternateSlideIn(key)}>
                  {/* <div className="accordion-item">
                    <input
                      type="radio"
                      id={`radio${key}`}
                      name="accordion"
                      checked={selected === key}
                      onChange={() =>
                        setSelected(selected === key ? null : key)
                      }
                      className="hidden"
                    />
                    <label htmlFor={`radio${key}`} className="item">
                      <div className="title">{val}</div>
                    </label>
                    {selected === key && (
                      <div className="content">
                        <SkillsContent
                          title={content[key].title}
                          text={content[key].text}
                        />
                      </div>
                    )}
                  </div> */}
                  <div className="accordion-item">
                    <div
                      className="item"
                        onClick={() =>
                          setSelected(selected === key ? null : key)
                         }
                    >
                  <div className="title">
                    {val}
                    {/* <span className={`arrow ${selected === key ? "open" : ""}`}>▼</span> */}
                  </div>
                  </div>
                    {selected === key && (
                      <div className="content">
                        <SkillsContent
                          title={content[key].title}
                          text={content[key].text}
                       />
                      </div>
                  )}
                </div>

                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Accordion;