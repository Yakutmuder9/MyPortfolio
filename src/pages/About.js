import { about, skill } from "../assets/index";
import React, { useState } from "react";

const About = () => {
  const [spots, setSpots] = useState(Array(1200).fill(false));
  const toggleSpot = (index) => {
    const newSpots = [...spots];
    newSpots[index] = !newSpots[index];
    setSpots(newSpots);
  };

  return (
    <div className="about-page">
      <div className="spoted-rectangle">
        <div className="rectangle">
          {spots.map((spot, index) => (
            <div
              key={index}
              className="spot"
              onClick={() => toggleSpot(index)}
            ></div>
          ))}
          <img src={skill} alt="" />
        </div>
      </div>
      <div className="container">
        <div className="about-me-txt">
          <p>ABOUT ME</p>
        </div>
        <div className="about-disc-txt">
          <h1>
            I'm a discerning <span> full-stack</span> developer, passionately
            crafting top-tier web experiences that blend elegance with impact.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default About;
