import React, { useRef } from "react";
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
  const navigate = useNavigate();
  
  const handlePrint = useReactToPrint({
    content: () => resumeRef.current,
    documentTitle: "My_Resume",
  });

  const handleDownload = async () => {
    const element = resumeRef.current;
    if (!element) return;

    const canvas = await html2canvas(element, {
        scale: 2, // Improves quality
      });

    //const canvas = await html2canvas(element);
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");

    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const margin = 10; // Margin from edges (in mm)
    
    const imgWidth = pageWidth - 2 * margin;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    // Add some text styling (optional)
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(20);
    pdf.text("", pageWidth / 2, margin + 10, { align: "center" });

    // Add the resume image with margins
    pdf.addImage(imgData, "PNG", margin, margin + 15, imgWidth, imgHeight);

    pdf.save("My_Resume.pdf");
  };
  const triggerAnimation = () => {
    navigate("/Portfolio/menu");
    //setIsAnimatingOut(true); // Start the exit animation
    // setTimeout(() => {
       
    // }, 2000); 
  };
  return (
    <div className="resume-container">
      <div className="resume-card">
        <div ref={resumeRef} className="resume-content">
          <h1 className="resume-title">Yasmina Elbernoussi</h1>
          <p className="resume-subtitle">Software Engineer</p>
          <p className="resume-contact">Email: yasminaelbernoussi@gmail.com | Phone: +212602572433</p>
          <hr className="resume-divider" />
          <p className="resume-description">
          Software Engineer with a solid foundation in full-stack web and mobile development. Skilled in designing, developing, and deploying applications using React, Node.js, Laravel, and cloud technologies. Experienced in implementing CI/CD pipelines, optimizing system performance, and collaborating within Agile teams. Proficient in French and English, with a passion for delivering reliable and scalable solutions.
          </p>
          <div className="resume-section">
            <h2 className="resume-section-title">Experience</h2>
            <div className="resume-experience">
              <h3 className="resume-experience-title">Software Engineer - Magna Worldwide</h3>
              <p className="resume-experience-date">March 2024 - June 2024</p>
              <p className="resume-experience-description">
                - Developed a suite of mobile applications using Ionic, Angular, and Laravel, connecting doctors, pharmacists, patients, and delivery personnel. <br />
                - Integrated RESTful APIs for seamless communication between frontend and backend services. <br />
                - Focused on code maintainability and usability for cross-platform compatibility.
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
  );
};

export default Resume;
