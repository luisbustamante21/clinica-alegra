import PropTypes from 'prop-types';
import './Footer.css';
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaClock } from 'react-icons/fa'; // Importa los íconos necesarios
import sonrisaNegativo from '../../assets/solo-sonrisa-negativo.png';

const Footer = () => {
    const socialNames = {
        facebook: 'Facebook',
        twitter: 'Twitter',
        instagram: '@cuentainstagram',
        whatsapp: 'WhatsApp'
    };

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="column">
                    <img src={sonrisaNegativo} alt='logosonrisanegativo' className="logo" />
                </div>
                <div className="column">
                    <div className="centered-columns">
                        <div className="contact-info">
                            <p className="social-name"><FaMapMarkerAlt className="social-icon" />Calle Falsa 123, Ciudad, País</p>
                            <p><FaClock className="social-icon" />Horarios de Atención:</p>
                            <p className="social-name">Lunes a Viernes: 9:00 AM - 6:00 PM</p>
                            <p className="social-name">Sábados: 9:00 AM - 1:00 PM</p>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="centered-columns">
                        <div className="social-media">
                            <SocialLink
                                href="https://facebook.com"
                                icon={<FaFacebook className="social-icon" />}
                                name={socialNames.facebook}
                            />
                            <SocialLink
                                href="https://twitter.com"
                                icon={<FaTwitter className="social-icon" />}
                                name={socialNames.twitter}
                            />
                            <SocialLink
                                href="https://instagram.com"
                                icon={<FaInstagram className="social-icon" />}
                                name={socialNames.instagram}
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
