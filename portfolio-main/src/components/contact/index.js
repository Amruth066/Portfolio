import './index.scss';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Loader from 'react-loaders';
import AnimatedLetters from '../../AnimatedLetters';
import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const navigate = useNavigate();
    const refForm = useRef();

    // EmailJS Service Details
    const serviceId = "service_vlulbfj";
    const templateId = "template_fbx2gwo";
    const publicKey = "LbfxmiNuFbI0OLKB0";

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(serviceId, templateId, refForm.current, publicKey)
            .then(() => {
                alert('Message sent successfully!');
                navigate('/');
            })
            .catch(() => {
                alert('Failed to send the message. Please try again.');
            });
    };

    return (
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters letterClass={letterClass} strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']} idx={15} />
                    </h1>
                    <p>
                        I'm always open to discussing new projects, collaborations, or freelance opportunities.
                        Whether you have a question or just want to say hi, feel free to reach out using the form below.
                    </p>

                    <div className="contact-form">
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className="half">
                                    <input type="text" name="name" placeholder="Your Name" required />
                                </li>
                                <li className="half">
                                    <input type="email" name="email" placeholder="Your Email" required />
                                </li>
                                <li>
                                    <input type="text" name="subject" placeholder="Subject" required />
                                </li>
                                <li>
                                    <textarea name="message" placeholder="Your Message" required></textarea>
                                </li>
                                <li>
                                    <input type="submit" className="flat-button" value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>

                <div className="info-map">
                    <strong>Amruth Sai Manchukonda</strong>
                    <br />
                    Hyderabad, India
                    <br />
                    Madhapur
                    <br />
                    <span>amruthsaimanchu@gmail.com</span>
                </div>

                <div className="map-wrap">
                    <MapContainer center={[17.4487, 78.3804]} zoom={13}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[17.4487, 78.3804]}>
                            <Popup>Madhapur, Hyderabad. Visit here for some great food and tech vibes!</Popup>
                        </Marker>
                    </MapContainer>

                </div>
            </div>
            <Loader type="pacman" />
        </>
    );
};

export default Contact;
