import React, { useState } from "react";
import "../css/HeroVideo.css";
import HistoricalTimeline from "./Timeline";

export const HeroVideo: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Function to scroll to the next section smoothly
  const handleArrowClick = () => {
    const nextSection = document.querySelector(".scrollable-content");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className={`hero-section ${isScrolled ? "hidden" : ""}`}>
        <div className="video-wrapper">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/n5uwPja0V2U?autoplay=1&mute=1&controls=0&loop=1&playlist=n5uwPja0V2U"
            title="History Video"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
            style={{ pointerEvents: "none", objectFit: "cover" }}
          ></iframe>
        </div>

        <div className="video-overlay"></div>

        <div className="hero-text">
          <h1>Emilia's Summative Assessment</h1>
        </div>

        <div className="bouncing-arrow" onClick={handleArrowClick}>
          <div className="arrow-bg">
            <span>&#8595;</span>
          </div>
        </div>
      </div>

      <div className="scrollable-content">
        <HistoricalTimeline />
      </div>
    </>
  );
};

export default HeroVideo;
