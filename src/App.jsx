import Home from './paginas/Home'
// import Footer from "./PrincipalResumen/Footer/Footer"
import Tratamientos from './paginas/Tratamientos/Tratamientos'
import About from './paginas/About/About'
import Contactanos from './paginas/Contactanos/Contactanos'
import logo from './assets/logotipo.png'
import './Components/Navbar/Navbar.css'
import { useState } from 'react';
import { useEffect } from 'react';
import { TiThMenuOutline } from "react-icons/ti";

const App = () => {

  const [sticky, setSticky] = useState(false);

  // esta funcion se ejecutara una sola vez cuando el componente se haya cargado
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
      window.scrollY > 50 ? setMenuMovil(false) : setMenuMovil(true);
    })
  }, [])

  const [menuMovil, setMenuMovil] = useState(false);
  const toggleMenu = () => {
    menuMovil ? setMenuMovil(false) : setMenuMovil(true);
  }


  let component
  switch (window.location.pathname) {
    case '/':
      component = <Home />
      break
    case '/tratamientos':
      component = <Tratamientos />
      break
    case '/acercade':
      component = <About />
      break
    case '/contactanos':
      component = <Contactanos />
      break
  }
  return (
    <>
      <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
        <a href="/" className="logo-link">
          <img src={logo} alt="logotipo" className='logo' />
        </a>
        <ul className={menuMovil ? '' : 'hidden-menu'}>
          <a href='/'>
            <li>Inicio</li>
          </a>
          <a href='/tratamientos'>
            <li>Tratamientos</li>
          </a>
          <a href='/acercade'>
            <li>Acerca de</li>
          </a>
          <a href='/contactanos'>
            <li>Contactanos</li>
          </a>
        </ul>
        <TiThMenuOutline className='menu-icon' onClick={toggleMenu} />
      </nav>
      {component}
      {/* <Home /> */}
      {/* <Footer /> */}
    </>
  );
};

export default App;