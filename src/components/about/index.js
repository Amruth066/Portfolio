import { useEffect, useState } from 'react';
import AnimatedLetters from '../../AnimatedLetters';
import Loader from 'react-loaders';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact,
} from '@fortawesome/free-brands-svg-icons';
import './index.scss';

const techIcons = [
    { icon: faAngular, color: '#DD0031' },
    { icon: faHtml5, color: '#F06529' },
    { icon: faCss3, color: '#28A4D9' },
    { icon: faReact, color: '#5ED4F4' },
    { icon: faJsSquare, color: '#EFD81D' },
    { icon: faGitAlt, color: '#EC4D28' },
];

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
        return () => clearTimeout(timer); // Cleanup timeout
    }, []);

    return (
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters 
                        letterClass={letterClass} 
                        strArray={'About Me'.split('')}  
                        idx={15} 
                    />
                </h1>

                <p className="about-text">
                    Hey there! 👋 I'm a <strong>Full Stack Developer</strong> passionate about turning ideas into reality with clean, scalable code.
                    With <strong>1+ years of experience</strong>, I specialize in <strong>React.js, JavaScript, Python, and MySQL</strong>, bridging the gap between frontend magic and backend logic.
                </p>

                <p className="about-text">
                    🚀 I love solving challenges, optimizing performance, and building <strong>dynamic web applications</strong>. 
                    I also work with <strong>MuleSoft</strong>, <strong>Docker</strong>, <strong>Kubernetes</strong>, and <strong>AWS cloud deployments</strong> to streamline development and integration processes.
                </p>

                <p className="about-text">
                    My experience in <strong>API development and DevOps</strong> ensures that I can build, deploy, and manage scalable applications efficiently.  
                    I'm always exploring <strong>new technologies</strong>, contributing to open-source projects, and pushing my skills further.
                </p>

                <p className="about-text">
                    Let’s build something amazing together! 🚀
                </p>

                {/* Projects Section */}
                {/* <h2 className="projects-heading">Projects</h2> */}
                <h1>
                <AnimatedLetters 
                        letterClass={letterClass} 
                        strArray={'Projects'.split('')}  
                        idx={15} 
                    />
                </h1>
                <div className="projects-container">
                    <div className="project-card">
                        <h3>ServiceAtDesk</h3>
                        <p>A service booking platform built with <strong>React, Spring Boot, and SQL</strong>.</p>
                    </div>
                    <div className="project-card">
                        <h3>Vendor Next</h3>
                        <p>A vendor management system for <strong>Invesco</strong>, using <strong>React, Java, and AWS</strong>.</p>
                    </div>
                </div>
            </div>

            <div className="stage-cube-cont">
                <div className="cubespinner">
                    {techIcons.map(({ icon, color }, index) => (
                        <div key={index} className={`face${index + 1}`}>
                            <FontAwesomeIcon icon={icon} color={color} />
                        </div>
                    ))}
                </div>
            </div>

            <Loader type="pacman" />
        </div>
    );
};

export default About;
