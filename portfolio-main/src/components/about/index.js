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
                        I am a <strong>passionate Full Stack Developer</strong> with over <strong>1+ years of experience</strong> in building web applications that are efficient, scalable, and user-friendly.
                    </p>

                    <p>
                        My expertise lies in developing both frontend and backend solutions using <strong>React.js, JavaScript, Python, and MySQL</strong>. I have experience working with <strong>RESTful APIs, cloud deployments (AWS), and DevOps practices</strong> to streamline development workflows and ensure smooth deployments.
                    </p>

                    <p>
                        I love tackling <strong>complex problems, optimizing performance</strong>, and writing clean, maintainable code. My goal is to create <strong>seamless user experiences</strong> while following best industry practices in Agile environments.
                    </p>

                    <p>
                        Apart from coding, I enjoy learning about <strong>new technologies</strong>, contributing to open-source projects, and continuously improving my skills to stay ahead in the tech world.
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
