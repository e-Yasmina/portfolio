import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useReactToPrint } from "react-to-print";
import { useNavigate } from "react-router-dom";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import "./Resume.css"; // Import external CSS file
import AnimatedDots from "../../Components/AnimatedDots/AnimatedDots";

const Resume = () => {
  //const resumeRef = useRef();
  const resumeRef = useRef(null);
  console.log("Resume Ref:", resumeRef.current);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  const navigate = useNavigate();
  
  const handlePrint = useReactToPrint({
    content: () => resumeRef.current,
    documentTitle: "My_Resume",
  });

  const handleDownload = async () => {
    const element = resumeRef.current;
    if (!element) return;
  
    const canvas = await html2canvas(element, {
      scale: 3, // Improves quality
    });
  
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
  
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const margin = 10; // Margin from edges
  
    const imgWidth = pageWidth - 2 * margin;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
  
    // **If content is too tall, scale it down**
    const scaleFactor = Math.min(3, (pageHeight - 2 * margin) / imgHeight);
    const centeredX = (pageWidth - imgWidth * scaleFactor) / 2;
    const centeredY = (pageHeight - imgHeight * scaleFactor) / 2;
  
    //pdf.addImage(imgData, "PNG", margin, margin, imgWidth * scaleFactor, imgHeight * scaleFactor);
    pdf.addImage(imgData, "PNG", centeredX, centeredY, imgWidth * scaleFactor, imgHeight * scaleFactor);
  
    pdf.save("Yasmina_Elbernoussi_Resume.pdf");
  };
  
  const triggerAnimation = () => { 
    setIsAnimatingOut(true); // Start the exit animation
    setTimeout(() => {
      navigate("/Portfolio/menu");
    }, 2000); 
  };
  const triggerAnimation1 = () => { 
    setIsAnimatingOut(true); // Start the exit animation
    setTimeout(() => {
      navigate("/Portfolio/");
    }, 2000); 
  };
  return (
    
    <motion.div 
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.3, // Delay between child animations
              },
            },
          }}
    >
    <motion.div
        initial={{ x: '100vw', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}       // Animate to its final position
        transition={{ type: 'tween', stiffness: 20, duration: 2 }}
    >
    <AnimatePresence>
    {!isAnimatingOut && (
        <motion.div
        exit={{ x: '-100vw', opacity: 0 }} // Start off-screen to the right
        initial={{ x: '100vw', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}       // Animate to its final position
        transition={{ type: 'tween', stiffness: 20, duration: 2 }}
        >
    <div className="resume-container">
      <div className="resume-back" onClick={triggerAnimation1}>
            {'<'}
      </div>
      <div className="resume-card">
        <div ref={resumeRef} className="resume-content">
          <h1 className="resume-title">Yasmina Elbernoussi</h1>
          <p className="resume-subtitle">Software Engineer</p>
          <p className="resume-contact">Email: yasminaelbernoussi@gmail.com | Phone: +212602572433</p>
          <hr className="resume-divider" />
          <p className="resume-description">
          Software Engineer with a solid foundation in <strong>full-stack web and mobile development</strong>. Skilled in designing, developing, and deploying applications using <strong>React, Node.js, Laravel,</strong> and cloud technologies. Experienced in implementing CI/CD pipelines, optimizing system performance, and collaborating within <strong>Agile teams</strong>. Proficient in French and English, with a passion for delivering reliable and scalable solutions.
          </p>
          <div className="resume-section">
            <h2 className="resume-section-title">Experience</h2>
            <div className="resume-experience">
              <h3 className="resume-experience-title">Software Engineer - Magna Worldwide</h3>
              <p className="resume-experience-date">March 2024 - June 2024</p>
              <p className="resume-experience-description">
                - Developed a suite of mobile applications using Ionic, Angular, and <strong>Laravel,</strong> connecting doctors, pharmacists, patients, and delivery personnel. <br />
                - Integrated <strong>RESTful APIs</strong> for seamless communication between frontend and backend services. <br />
                - Focused on code maintainability and usability for <strong>cross-platform compatibility</strong>.
              </p>
            </div>

            <div className="resume-experience">
               <h3 className="resume-experience-title">Web Development Intern - Plaruce Engineering</h3>
               <p className="resume-experience-date">Jun 2020 - Dec 2021</p>
               <p className="resume-experience-description">
                  - Designed and developed a company-focused website using WordPress, HTML, and CSS. <br />
                  - Implemented an SEO strategy to enhance the website’s online visibility. 
               </p>
            </div>
          </div>
          <div className="resume-section">
            <h2 className="resume-section-title">Skills</h2>
            <ul className="resume-skills-list">
               <li><strong>Programming Languages:</strong> JavaScript, Python, PHP, Java.</li>
               <li><strong>Frameworks:</strong> React, Node.js, Laravel, Spring Boot.</li>
               <li><strong>Web Technologies:</strong> HTML, CSS, Bootstrap, RESTful APIs.</li>
               <li><strong>Database Management:</strong> SQL, NoSQL (DynamoDB), PL/SQL.</li>
               <li><strong>Cloud Computing:</strong> Familiarity with AWS services such as Lambda, S3.</li>
               <li><strong>DevOps:</strong> CI/CD pipelines (GitLab CI, Jenkins).</li>
               <li><strong>Tools:</strong> Docker, Kubernetes, AWS CLI.</li>
            </ul>
          </div>
          <div className="resume-section">
            <h2 className="resume-section-title">Education</h2>
            <div className="resume-education">
              <h3 className="resume-degree">State Engineer Diploma in Computer Science</h3>
              <p className="resume-experience-date">2021 - 2024</p>
              <p className="resume-school">National School of Applied Sciences, Al-Hoceima</p>
            </div>
          </div>
        </div>      
      </div>
      <div className="resume-buttons">
        {/* <button onClick={handlePrint} className="resume-print-button">
          Print Resume
        </button> */}
        <button onClick={handleDownload} className="resume-download-button">
          Download Resume
        </button>
        <AnimatedDots onButtonClick={triggerAnimation} />
      </div>
    </div>
    </motion.div>
    )}
    </AnimatePresence>
    </motion.div>
    <motion.div
          initial={{ x: '-100vw', opacity: 0 }} // Start off-screen to the left
          animate={{ x: 0, opacity: 1 }}       // Animate to its final position
          transition={{ type: 'tween', stiffness: 30, duration: 2 }}
          style={{
            zIndex: 1000, //on top of other content
          }}
    >
    <AnimatePresence>
    {!isAnimatingOut && (
        <motion.div
        exit={{ x: '100vw', opacity: 0 }} // Start off-screen to the left
        animate={{ x: 0, opacity: 1 }}       // Animate to its final position
        transition={{ type: 'tween', stiffness: 20, duration: 2 }}
      >
      <div className="resume-img-container">
      <img 
        src={`${process.env.PUBLIC_URL}/Imgs/image.png`}
        alt="My Image"
        className="resume-img"
      />
      </div>
      </motion.div>
      )}
    </AnimatePresence>
    </motion.div>
    
    </motion.div>
    
  );
};

export default Resume;
