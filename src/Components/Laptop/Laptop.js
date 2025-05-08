import React from 'react';
import './Laptop.css'; // You can put your styles here

const LaptopMockup= ({ videoUrl }) => {
  return (
    <div className="macbook">
      <div className="screen">
        <div className="viewport">
          <video
            src={videoUrl}
            autoPlay
            loop
            muted
            playsInline
            className="video"
          />
        </div>
      </div>
      <div className="base"></div>
      <div className="notch"></div>
    </div>
  );
};

export default LaptopMockup;
