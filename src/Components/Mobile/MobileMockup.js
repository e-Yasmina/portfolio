import React from "react";
import "./MobileMockup.css";

const iPhoneVideoPlayer = ({videoUrl }) => {
  return (
    
      <div className='mobile-phone'>
        <div className='brove'><span class='speaker'></span></div>
          <div className='mobile-screen'>
           <video
            src={videoUrl}
            autoPlay
            loop
            muted
            playsInline
            className="mockup-video"
            controls={false}
            style={{ width: "100%", height: "100%", objectFit: "cover", background: "#000" }}
          />

        </div>
      </div>
  );
};

export default iPhoneVideoPlayer;
