import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import LogoS from '../../assets/images/logo-s.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog,faFileAlt, faFolder, faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const SideBar = () => {
    return (
        <div className='nav-bar'>
            <Link className='logo' to={'/'}>
                <img src={LogoS} alt='logo' />
            </Link>
            <nav>
                <NavLink exact="true" activeclassname="active" to={'/'}>
                    <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="about-link" to={'/about'}>
                    <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="contact-link" to={'/contact'}>
                    <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="projects-link" to={'/projects'}>
                    <FontAwesomeIcon icon={faFolder} color='#4d4d4e' />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="resume-link" to={'/resume'}>
                    <FontAwesomeIcon icon={faFileAlt} color='#4d4d4e' />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="skills-link" to={'/skills'}>
                    <FontAwesomeIcon icon={faCog} color='#4d4d4e' /> 
                </NavLink>


            </nav>
            <ul>
                <li>
                    <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/amruth-sai-5245a0203/'>
                        <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
                    </a>
                </li>
                <li>
                    <a target='_blank' rel='noreferrer' href='https://github.com/Amruth066'>
                        <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default SideBar;
