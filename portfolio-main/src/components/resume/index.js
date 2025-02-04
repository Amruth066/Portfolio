import React from 'react';
import resumePDF from '../../assets/resume.pdf'; 
import './index.scss';

const Resume = () => {
    return (
        <div className="resume-container">
            <iframe 
                src={resumePDF} 
                className="resume-iframe"
                title="Resume Preview"
            ></iframe>

            <div className="button-container">
                <a href={resumePDF} download="My_Resume.pdf">
                    <button className="action-btn download-btn">Download Resume</button>
                </a>
            </div>
        </div>
    );
};

export default Resume;
