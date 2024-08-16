import React from "react";
import "./About.css";

export const About = () => {
  return (
    <div className="about" id="about">
      <h1 className="title">About</h1>
      <div className="content">
        <p>
          My name is Isibor Eromosele, currently a Humber College student who
          specializes in web design and Development. Fueled by my passion for
          crafting visually captivating and seamlessly functional websites.
        </p>

        <h1 className="title">Experience</h1>
        <div className="experience">
          <div className="experience-date">
            <p>2021-2022</p>
            <p>UI/UX Intern</p>
          </div>
          <p className="experience-description">
            Worked at Hybrid Tech to create UI/UX design and carried out various
            user research for bloom buddy and Mitsubishi motors Nigeria
          </p>
        </div>

        <div className="experience">
          <div className="experience-date">
            <p>2022-2023</p>
            <p>Networking Manager</p>
          </div>
          <p className="experience-description">
            Worked at L.A.S.E.M.A (Lagos State Emergency Management Agency) as a
            networking manager handling server and other activities
          </p>
        </div>
      </div>
    </div>
  );
};
