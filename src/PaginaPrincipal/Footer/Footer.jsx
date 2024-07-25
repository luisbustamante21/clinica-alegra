import PropTypes from 'prop-types';
import './Footer.css';
import { FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import sonrisaNegativo from '../../assets/alegra.png';

const Footer = () => {
    const socialNames = {
        instagram1: '@ortodoncialoja',
        instagram2: '@alegra_clinicadental',
        whatsapp: 'WhatsApp'
    };

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="column">
                    <img src={sonrisaNegativo} alt='logosonrisanegativo' className="logo-footer" />
                </div>
                <div className="column">
                    <div className="centered-columns">
                        <div className="contact-info">
                            <p className="social-name"><FaMapMarkerAlt className="social-icon" />
                                La Condamine 26-37 y Av. Pío Jaramillo Alvarado
                            </p>
                            <p><FaClock className="social-icon" />Lunes a Viernes: 9:00 AM - 6:00 PM</p>
                            <p><FaClock className="social-icon" />Sábados: 9:00 AM - 1:00 PM</p>
                            {/* <p className="social-name">Lunes a Viernes: 9:00 AM - 6:00 PM</p>
                            <p className="social-name">Sábados: 9:00 AM - 1:00 PM</p> */}
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="centered-columns">
                        <div className="social-media">
                            <SocialLink
                                href="https://www.instagram.com/ortodoncialoja/"
                                icon={<FaInstagram className="social-icon" />}
                                name={socialNames.instagram1}
                            />
                            <SocialLink
                                href="https://www.instagram.com/alegra_clinicadental/"
                                icon={<FaInstagram className="social-icon" />}
                                name={socialNames.instagram2}
                            />
                            <SocialLink
                                href="https://wa.me/1234567890"
                                icon={<FaWhatsapp className="social-icon" />}
                                name={socialNames.whatsapp}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

const SocialLink = ({ href, icon, name }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="social-link" title={name}>
        {icon}
        <span className="social-name">{name}</span>
    </a>
);

SocialLink.propTypes = {
    href: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
    name: PropTypes.string.isRequired
};

export default Footer;
