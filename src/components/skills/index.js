import React from 'react';
import './index.scss';

const skills = {
  frontend: [
    'React.js', 'Angular', 'HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'TypeScript'
  ],
  backend: [
    'Python', '.NET Web APIs', 'Java Spring Boot', 'FastAPI', 'MySQL', 'PostgreSQL'
  ],
  devOps: [
    'AWS', 'Docker', 'Git', 'CI/CD', 'Kubernetes', 'Helm Charts'
  ]
};

const Skills = () => {
  return (
    <div className="skills-container">
      <h2 className="skills-title">My Skills</h2>
      <div className="skills-content">
        <div className="skills-scroll">
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category} id={category} className="skills-section">
              <h3>{category.charAt(0).toUpperCase() + category.slice(1)} Skills</h3>
              <div className="skills-list">
                {skillList.map((skill) => (
                  <div key={skill} className="skill-item">
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
