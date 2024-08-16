import React, { useState, useEffect } from "react";
import "./Featured.css";
import { ProjectCard } from "./ProjectCard";

export const Featured = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("https://eromosele-portfolio-server.vercel.app/projects")
      .then((response) => {
        setLoading(true);
        return response.json();
      })
      .then((data) => {
        setProjects(data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="featured" id="work">
      <h1 className="featured-title title">Featured Works</h1>
      <div className="project-cards">
        {loading ? (
          <p className="loading">Loading projects...</p>
        ) : (
          projects.map((project) => {
            return (
              <ProjectCard
                key={project._id}
                name={project.name}
                url={project.url}
                thumbnail={project.thumbnail}
                languages={project.languages}
                description={project.description}
              />
            );
          })
        )}
        {}
      </div>
    </div>
  );
};
