/* eslint-disable react/prop-types */
import logo from '../../assets/logonombre2.png'
import './Navbar.css'
import { useState } from 'react';
import { useEffect } from 'react';
import { TiThMenuOutline } from "react-icons/ti";
import { Link, useMatch, useResolvedPath, useLocation } from "react-router-dom"
import { FaWhatsapp } from "react-icons/fa";

export default function Navbar() {

    const [sticky, setSticky] = useState(false);
    const [menuMovil, setMenuMovil] = useState(false);
    const location = useLocation(); // Obtén la ubicación actual


    useEffect(() => {
        const handleScroll = () => {
            window.scrollY > 50 ? setSticky(true) : setSticky(false);
        };

        window.addEventListener('scroll', handleScroll);

        // Limpia el evento de scroll cuando el componente se desmonte
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setMenuMovil(prevState => !prevState);
    };

    return (
        <nav className={`container ${sticky ? 'dark-nav' : ''} ${location.pathname === '/tratamientos' ? 'tratamientos-nav' : ''} ${location.pathname === '/contactanos' ? 'contactanos-nav' : ''}`}>
            <CustomLinkLogo to="/" className="logo-link">
                <img src={logo} alt="logotipo" className='logo' />
            </CustomLinkLogo>
            <ul className={menuMovil ? '' : 'hidden-menu'}>
                <CustomLink to="/" location={location.pathname}>Inicio</CustomLink>
                <CustomLink to="/tratamientos" location={location.pathname}>Tratamientos</CustomLink>
                <CustomLink to="/acercade" location={location.pathname}>Acerca de</CustomLink>
                <CustomLink to="/contactanos" location={location.pathname}>Contáctanos</CustomLink>
                <button className='btnWhatsapp'>
                    Agenda una cita
                    <FaWhatsapp className='whatsapp-icon' />
                </button>
            </ul>
            <TiThMenuOutline className='menu-icon' onClick={toggleMenu} />
        </nav>
    );

    function CustomLink({ to, children, location, ...props }) {
        const resolvedPath = useResolvedPath(to)
        const isActive = useMatch({ path: resolvedPath.pathname, end: true })
        const isTratamientos = location === '/tratamientos';
        const isContactanos = location === '/contactanos';

        const handleClick = () => {
            window.scrollTo(0, 0);
            setMenuMovil(!menuMovil);
        };

        return (
            <li className={`${isActive ? "selected" : ""} ${isTratamientos ? "tratamientos-page" : ""} ${isContactanos ? "contactanos-page" : ""}`}>
                <Link to={to} {...props} onClick={handleClick}>
                    {children}
                </Link>
            </li>
        )
    }

    function CustomLinkLogo({ to, children, ...props }) {
        const handleClick2 = () => {
            window.scrollTo(0, 0);
            setMenuMovil(false);
        };

        return (
            <Link to={to} {...props} onClick={handleClick2}>
                {children}
            </Link>
        )
    }
}