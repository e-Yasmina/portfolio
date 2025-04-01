import "./TimeLine.css";

const TimeLine = () => {

    const timelineTexts = [
        "<h3>Final Year Project (PFE) at Magna Worldwide:</h3><br>Developed and deployed mobile applications to connect healthcare entities, improving medical service accessibility. Integrated secure and scalable backend solutions.",
        "<h3>Engineering Studies at ENSAH (09/2021 - 07/2024)</h3><br><strong>Third Year (09/2023 - 07/2024)</strong><br>Specialized in <strong>Software Engineering (Génie Logiciel)</strong>:<br>Mobile application development<br>Cloud computing and virtualization<br>ERP systems<br>Software quality assurance, testing, and integration<br>Embedded and real-time systems.<br>",
        "<h3>Internships (Summer 2024):</h3><br>Completed three internships gaining practical experience in software development and IT systems.",
        "<h3>Engineering Studies at ENSAH (09/2021 - 07/2024)</h3><br><strong>Second Year (09/2022 - 07/2023)</strong><br>Advanced technical and professional development:<br>Java advanced programming<br>Data science with Python<br>Database administration<br>Machine Learning<br>Project management and software engineering<br>Web development with modern frameworks (Java EE, .NET)<br>Cybersecurity and cryptosystems.<br>",
        "<h3>Engineering Studies at ENSAH (09/2021 - 07/2024)</h3><br><strong>First Year (09/2021 - 07/2022)</strong><br>Studied core computer science subjects, including:<br>Advanced C programming and data structures<br>Computer architecture<br>Database systems and information systems<br>Networking fundamentals<br>Web technologies (PHP5)<br>Algorithmic complexity and advanced programming (C++)<br>Linux and system programming<br>Acquired foundational knowledge in software development, algorithms, and system administration.",
      ];
    
  return (
    <main>
      {timelineTexts.map((text, index) => (
        <p key={index} dangerouslySetInnerHTML={{ __html: text }}></p>
      ))}
    </main>
  );
};

export default TimeLine;