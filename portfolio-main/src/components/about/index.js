import AnimatedLetters from '../../AnimatedLetters';
import './index.scss';
import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAngular,
    faCss3,
    faGitAlt,
    faHtml5,
    faJsSquare,
    faReact,
} from '@fortawesome/free-brands-svg-icons';

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
    }, []);

    return (
        <>
            <div className="container about-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                            idx={15}
                        />
                    </h1>

                    <p>
                        Hey there! 👋 I'm a <strong>Full Stack Developer</strong> who loves turning ideas into reality through clean, efficient, and scalable code.  
                    </p>

                    <p>
                        With <strong>1+ years of experience</strong>, I’ve worked with <strong>React.js, JavaScript, Python, and MySQL</strong>, crafting seamless digital experiences. From frontend magic to backend logic, I enjoy bridging the gap between design and functionality.
                    </p>

                    <p>
                        🚀 Passionate about building <strong>dynamic web applications</strong>, I thrive on solving challenges, optimizing performance, and writing maintainable code.  
                    </p>

                    <p>
                        💡 DevOps, cloud deployments (<strong>AWS</strong>), and RESTful APIs? Yep, I work with those too! I believe in automating workflows to create smooth and efficient development cycles.
                    </p>

                    <p>
                        Beyond coding, I’m always exploring <strong>new technologies</strong>, contributing to open-source projects, and pushing my skills to the next level. Let’s build something amazing together!  
                    </p>
                </div>

                <div className="stage-cube-cont">
                    <div className="cubespinner">
                        <div className="face1">
                            <FontAwesomeIcon icon={faAngular} color="#DD0031" />
                        </div>
                        <div className="face2">
                            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                        </div>
                        <div className="face3">
                            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                        </div>
                        <div className="face4">
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                        </div>
                        <div className="face5">
                            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                        </div>
                        <div className="face6">
                            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    );
};

export default About;
