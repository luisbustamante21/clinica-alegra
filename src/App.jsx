import { useState, useEffect } from 'react';
import Home from './paginas/Home'
import Footer from "./PaginaPrincipal/Footer/Footer"
import Tratamientos from './paginas/Tratamientos/Tratamientos'
import About from './paginas/About/About'
import Contactanos from './paginas/Contactanos/Contactanos'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import PreLoader from './Components/PreLoader/PreLoader'

const App = () => {

  const [loading, setLoading] = useState(true);
  const [initialLoad, setInitialLoad] = useState(true); // Controla si es la primera carga

  useEffect(() => {
    if (initialLoad) {
      setLoading(true);
      const timer = setTimeout(() => {
        document.querySelector('.preloader').classList.add('fade-out');
        setTimeout(() => {
          setLoading(false);
          setInitialLoad(false); // Después de la primera carga, establecer en false
        }, 1000); // Espera a que termine la animación de desvanecimiento
      }, 4000); // Simula la carga de la página

      return () => clearTimeout(timer);
    }
  }, [initialLoad]);

  return (
    <>
      {loading ? (
        <PreLoader />
      ) : (
        <>
          <Navbar />
          <div className='container-nav'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/tratamientos" element={<Tratamientos />} />
              <Route path="/acercade" element={<About />} />
              <Route path="/contactanos" element={<Contactanos />} />
            </Routes>
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

export default App;