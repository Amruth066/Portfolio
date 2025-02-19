import React from 'react';
import './index.scss';

const projects = [
  {
    title: "Vendor Next",
    description: "Vendor Management Portal for Invesco",
    techStack: "React.js, Python FastAPI, AWS, MySQL",
    highlights: [
      "Developed a comprehensive vendor management portal with React.js and FastAPI.",
      "Integrated AWS Textract for automated document processing, improving accuracy by 30%.",
      "Optimized backend performance with efficient MySQL queries."
    ]
  },
  {
    title: "Document Tracking System",
    description: "Outplay Document Tracking System",
    techStack: "React.js, Python FastAPI, PostgreSQL",
    highlights: [
      "Contributed to a document tracking system, improving data retrieval speed by 20%."
    ]
  }
];

const Projects = () => {
  return (
    <div className="projects">
      <h2>Projects</h2>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <h4>{project.description}</h4>
            <p><strong>Technologies Used:</strong> {project.techStack}</p>
            <ul>
              {project.highlights.map((highlight, index) => (
                <li key={index}>{highlight}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
