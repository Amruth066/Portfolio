import React from 'react';
import './index.scss';

const skills = {
  frontend: [
    'React.js',
    'HTML5',
    'CSS3',
    'JavaScript',
    'Bootstrap',
    'Sass',
    'TypeScript'
  ],
  backend: [
    'Node.js',
    'Python',
    'Java Spring Boot',
    'FastAPI',
    'Express.js',
    'MySQL',
    'PostgreSQL'
  ],
  devOps: [
    'AWS',
    'Docker',
    'Git',
    'CI/CD',
    'Kubernetes'
  ]
};

const Skills = () => {
  return (
    <div className="skills-container">
      <div className="skills">
        <h2>My Skills</h2>
        <div className="skills-section">
          <h3>Frontend Skills</h3>
          <div className="skills-list">
            {skills.frontend.map((skill, index) => (
              <div key={index} className="skill-item">
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-section">
          <h3>Backend Skills</h3>
          <div className="skills-list">
            {skills.backend.map((skill, index) => (
              <div key={index} className="skill-item">
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-section">
          <h3>DevOps Skills</h3>
          <div className="skills-list">
            {skills.devOps.map((skill, index) => (
              <div key={index} className="skill-item">
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
