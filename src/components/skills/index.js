// import React from 'react';
// import './index.scss';

// const skills = {
//   frontend: ['React.js', 'Angular', 'HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'TypeScript'],
//   backend: ['Python', '.NET Web APIs', 'Java Spring Boot', 'FastAPI', 'MySQL', 'PostgreSQL'],
//   devOps: ['AWS', 'Docker', 'Git', 'CI/CD', 'Kubernetes', 'Helm Charts']
// };

// const Skills = () => {
//   return (
//     <div className="skills-container">
//       <h2 className="skills-title">My Skills</h2>
//       <div className="skills-content">
//         <div className="skills-scroll">
//           {Object.entries(skills).map(([category, skillList]) => (
//             <div key={category} className="skills-section">
//               <h3>{category.replace(/([A-Z])/g, ' $1').trim()} Skills</h3>
//               <div className="skills-list">
//                 {skillList.map((skill) => (
//                   <div key={skill} className="skill-item">
//                     {skill}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Skills;

import React from 'react';
import './index.scss';

const skills = {
  Frontend: ['React.js', 'Angular', 'HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'TypeScript'],
  Backend: ['Python', '.NET Web APIs', 'Java Spring Boot', 'FastAPI', 'MySQL', 'PostgreSQL'],
  DevOps: ['AWS', 'Docker', 'Git', 'CI/CD', 'Kubernetes', 'Helm Charts']
};

const Skills = () => {
  return (
    <div className="skills-container">
      <h2 className="skills-title">My Skills</h2>
      <div className="skills-content">
        {Object.entries(skills).map(([category, skillList]) => (
          <div key={category} className="skills-section">
            <h3>{category} Skills</h3>
            <ul className="skills-list">
              {skillList.map((skill) => (
                <li key={skill} className="skill-item">{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
