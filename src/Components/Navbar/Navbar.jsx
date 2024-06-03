import logo from '../../assets/logotipo.png'
import './Navbar.css'
import { useState } from 'react';
import { useEffect } from 'react';
import { TiThMenuOutline } from "react-icons/ti";


const Navbar = () => {

    const [sticky, setSticky] = useState(false);

    // esta funcion se ejecutara una sola vez cuando el componente se haya cargado
    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 50 ? setSticky(true) : setSticky(false);
        })
    }, [])

    const [menuMovil, setMenuMovil] = useState(false);
    const toggleMenu = () => {
        menuMovil ? setMenuMovil(false) : setMenuMovil(true);
    }

    return (
        <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
            <img src={logo} alt="logotipo" className='logo' />
            <ul className={menuMovil ? '' : 'hidden-menu'}>
                <li>Inicio</li>
                <li>Tratamientos</li>
                <li>Acerca de</li>
                <li>Contactanos</li>
            </ul>
            <TiThMenuOutline className='menu-icon' onClick={toggleMenu} />
        </nav>
    );
};

export default Navbar;