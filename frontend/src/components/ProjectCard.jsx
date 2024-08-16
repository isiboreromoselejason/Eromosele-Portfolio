import React from "react";
import "./projectcard.css";

export const ProjectCard = ({ name, url, thumbnail, languages, description }) => {

  return (
    <div className="card">
      <img className="card-image" src={thumbnail} alt={name} />
      <h1 className="card-title title">{name}</h1>

      <p className="card-description">
        {description}
      </p>
      <p className="language">Languages: {languages.join(", ")}</p>
      <a href={url}>
        {url && <button className="view-btn"> view </button>}
      </a>
    </div>
  );
};
