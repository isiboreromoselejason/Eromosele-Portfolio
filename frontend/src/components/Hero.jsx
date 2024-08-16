import React from "react";
import "./Hero.css";

export const Hero = () => {
  return (
    <div className="hero">
        <div className="left">
          <p>Hello , I’m Eromosele</p>
          <h1>WEB DEVELOPER</h1>
        </div>

        <div className="right">
          <img
            src="https://res.cloudinary.com/dmqhmprkr/image/upload/v1723495490/WhatsApp_Image_2023-08-25_at_16.16_1_ziegd6.png"
            alt="My portrait"
            className="image"
          />
        </div>
    </div>
  );
};
