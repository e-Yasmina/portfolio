import React from "react";
import "./BlogContent.css";

const BlogContent = ({ title, mainImage, sections }) => {

  return (
    <div className="blog-content-container">
      
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
            <div className="blog-section-text">
            {section.textBlocks && section.textBlocks.map((textBlock, blockIndex) => (
             <div key={blockIndex}>
                {Array.isArray(textBlock.text) ? (
                  <ul className="blog-section-list">
                    {/* Render listText before the list */}
                      {textBlock.listText && (
                        <p
                         className="blog-section-paragraph"
                         dangerouslySetInnerHTML={{ __html: textBlock.listText }}
                        ></p>
                      )}

                    {/* Render each item in the text array */}
                    {textBlock.text.map((item, i) => (
                    <li key={i} className="blog-section-list-item">
                     {item}
                    </li>
                  ))}

                  {/* Render listAfterText after the list */}
                  {textBlock.listAfterText && (
                    <p
                      className="blog-section-paragraph"
                      dangerouslySetInnerHTML={{ __html: textBlock.listAfterText }}
                    ></p>
                  )}
               </ul>
              ) : (
              // Render textBlock.text directly if it's a string
            <p
            className="blog-section-paragraph"
            dangerouslySetInnerHTML={{ __html: textBlock.text }}
            ></p>
          )}
          </div>
      ))}
       </div>
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