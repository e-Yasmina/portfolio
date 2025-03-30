import { useState } from "react";
import "./Accordion.css"; // Add styles for Accordion
import SkillsContent from "../SkillsContent/SkillsContent";
const Accordion = () => {
  const items = [
    "🖥️ Frontend Development",
    "⚙️ Backend Development",
    "📊 Data & AI",
    "🏥 Health IT & Digitalization  ",
    "🛠 Tools & DevOps",
  ];
  const content = [
    {  id: 0, 
      title: "Frontend Development",
      text: `Technologies:\n
  React.js & Redux – Building modern, responsive web applications.\n
  Ionic & Angular – Hybrid mobile development.\n
  HTML, CSS, JavaScript – Core web technologies.\n
  Tailwind CSS & Bootstrap – Responsive UI design.\n
  Swiper.js – Interactive carousels and sliders.\n
  \n
  What I Do:\n
  ✅ Develop dynamic and interactive UIs.\n
  ✅ Optimize frontend performance.\n
  ✅ Ensure mobile responsiveness.`,
    },
  
    { id: 1, 
      title: "Backend Development",
      text: `Technologies:\n
  Laravel – API & web development with PHP.\n
  Spring Boot – Java-based backend development.\n
  Node.js & Express.js – JavaScript-based server-side apps.\n
  RESTful APIs – API design and integration.\n
  Database Management – MySQL, PostgreSQL, Firebase.\n
  \n
  What I Do:\n
  ✅ Build and maintain scalable backend systems.\n
  ✅ Design and integrate RESTful APIs.\n
  ✅ Optimize database performance.`,
    },
  
    { id: 2, 
      title: "Data & AI",
      text: `Technologies:\n
  Python – Data processing & automation.\n
  NLP (Natural Language Processing) – Text analysis & sentiment detection.\n
  Web Scraping – Data extraction with BeautifulSoup.\n
  Keras & TensorFlow – AI model training.\n
  \n
  What I Do:\n
  ✅ Automate data extraction and processing.\n
  ✅ Work on AI-driven applications.\n
  ✅ Analyze textual data with NLP techniques.`,
    },
  
    { id: 3,
      title: "Health IT & Digitalization",
      text: `Technologies:\n
  Smart Healthcare Solutions – Digitizing healthcare processes.\n
  Blockchain in Healthcare – Enhancing security & data integrity.\n
  Health Apps – Developing mobile solutions for healthcare.\n
  \n
  What I Do:\n
  ✅ Work on digital transformation in healthcare.\n
  ✅ Build health-related mobile applications.\n
  ✅ Explore blockchain integration for medical data.`,
    },
  
    { id: 4,
      title: "Tools & DevOps",
      text: `Technologies:\n
  Git & GitHub – Version control & collaboration.\n
  Docker – Containerization for scalable applications.\n
  Postman – API testing & debugging.\n
  WordPress & SEO – Website optimization.\n
  \n
  What I Do:\n
  ✅ Manage version control & CI/CD.\n
  ✅ Automate deployment processes.\n
  ✅ Enhance website visibility with SEO strategies.`,
    },
  ];
  
  const [selected, setSelected] = useState(null);
  // const [showMore, setShowMore] = useState(false);

  return (
    <div className="wrapper">
      <h2 className="main-title">My Skills & Expertise:</h2>
      {items.map((val, key) => (
        <div key={key} className="accordion-item">
          <input
            type="radio"
            id={`radio${key}`}
            name="accordion"
            checked={selected === key}
            onChange={() => setSelected(selected === key ? null : key)}
            className="hidden"
            // onClick={() => setShowMore(!showMore)}
          />
          <label
            htmlFor={`radio${key}`}
            className="item"
          >
            <div className="title">{val}</div>
          </label>
          {selected === key &&  (
            <div className="content">
              <SkillsContent
                title={content[key].title}
                text={content[key].text}/>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
