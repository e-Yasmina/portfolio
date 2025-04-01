import React from "react";
import { useNavigate } from "react-router-dom";
import "./BlogContent.css";

const BlogContent = ({ title, mainImage, sections }) => {
  const navigate = useNavigate();

  return (
    <div className="blog-content-container">
      <button className="back-button" onClick={() => navigate(-1)}>
        &larr; Back
      </button>
      <div className="blog-content">
        {/* Main Image and Title */}
        <img src={mainImage} alt={title} className="blog-content-image" />
        <h1 className="blog-content-title">{title}</h1>

        {/* Dynamic Sections */}
        {sections.map((section, index) => (
          <div key={index} className="blog-section">
            {section.subtitle && (
              <h2 className="blog-section-subtitle">{section.subtitle}</h2>
            )}
            <div className={`blog-section-divider ${
              index % 2 === 0 ? "row-left" : "row-right"
            }`} key={index}>
            {section.image && (
              <img
                src={section.image}
                alt={section.subtitle || `Section ${index + 1}`}
                className="blog-section-image"
              />
            )}
            {section.text && (
                <div className="blog-section-text">
                  {Array.isArray(section.text) ? (
                    <ul className="blog-section-list">
                      {section.listText && (
                        <p
                         className="blog-section-paragraph"
                         dangerouslySetInnerHTML={{ __html: section.listText }}
                        ></p>
  )}
                      {section.text.map((item, i) => (
                        <li key={i} className="blog-section-list-item">
                          {item}
                        </li>
                      ))}
                      {section.listAfterText && (
                        <p
                          className="blog-section-paragraph"
                          dangerouslySetInnerHTML={{ __html: section.listAfterText }}
                        ></p>
                      )}
                    </ul>
                  ) : (
                    // Handle line breaks in text
                    section.text && (
                      <p className="blog-section-paragraph"  
                        dangerouslySetInnerHTML={{ __html: section.listAfterText }}
                        >
                      </p>
                    )
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogContent;
// import React from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import "./BlogContent.css"; // Add styles for BlogContent

// const BlogContent = ({title, image, content}) => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   //const { title, content, image } = location.state || {};

//   return (
//     <div className="blog-content-container">
//       <button className="back-button" onClick={() => navigate(-1)}>
//         &larr; Back
//       </button>
//       <div className="blog-content">
//         <img src={image} alt={title} className="blog-content-image" />
//         <h1 className="blog-content-title">{title}</h1>
//         <div className="blog-content-body">{content}</div>
//       </div>
//     </div>
//   );
// };

// export default BlogContent;