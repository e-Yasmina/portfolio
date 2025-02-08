import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import "./Resume.css"; // Import external CSS file

const Resume = () => {
  //const resumeRef = useRef();
  const resumeRef = useRef(null);
  console.log("Resume Ref:", resumeRef.current);
  
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
        </div>
      </div>
      <div className="resume-buttons">
        {/* <button onClick={handlePrint} className="resume-print-button">
          Print Resume
        </button> */}
        <button onClick={handleDownload} className="resume-download-button">
          Download Resume
        </button>
      </div>
    </div>
  );
};

export default Resume;
