import './ResumenServicios.css'
import icono1 from '../../assets/iconos/icon1.png'
import icono2 from '../../assets/iconos/icon2.png'
import icono3 from '../../assets/iconos/icon3.png'
import icono4 from '../../assets/iconos/icon4.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const ResumenServicios = () => {
    useEffect(() => {
        AOS.init({
            easing: 'ease-out-quart',
            delay: 0,
            duration: 750,
        });
    })
    return (
        <div>
            <div className='title'>
                <p>NUESTROS SERVICIOS</p>
                <h2>Lo que ofrecemos</h2>
            </div>
            <div className="container-servicios">
                <div data-aos="zoom-in" className='container-servicioindividual'>
                    <img src={icono1} alt="icono1" />
                    <h1>Ortodoncia</h1>
                    <p>Mejora la posición de los dientes y la mandíbula para una mejor salud bucal y estética facial.</p>
                </div>
                <div data-aos="zoom-in" className='container-servicioindividual'>
                    <img src={icono2} alt="icono2" />
                    <h1>Cirugía oral</h1>
                    <p>Tratamientos quirúrgicos para resolver problemas dentales y maxilofaciales complejos.</p>
                </div>
                <div data-aos="zoom-in" className='container-servicioindividual'>
                    <img src={icono3} alt="icono3" />
                    <h1>Implantología</h1>
                    <p>Colocación de implantes dentales para reemplazar dientes perdidos de manera permanente y natural</p>
                </div>
                <div data-aos="zoom-in" className='container-servicioindividual'>
                    <img src={icono4} alt="icono4" />
                    <h1>Odontología cosmética</h1>
                    <p>Mejora estética dental con blanqueamiento y carillas para una sonrisa más atractiva.</p>
                </div>
            </div>
        </div>

    );
};

export default ResumenServicios;