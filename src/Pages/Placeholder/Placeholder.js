import React from "react";
import "./Placeholder.css"; 

const NotAvailablePage = () => {
  return (
    <div className="not-available-container">
      <div className="content-box">
        <h1>We're Sorry!</h1>
        <p>This page is not available yet. Please check back later.</p>
        <button className="go-back-btn" onClick={() => window.history.back()}>
          Go Back
        </button>
      </div>
    </div>
  );
};

export default NotAvailablePage;
