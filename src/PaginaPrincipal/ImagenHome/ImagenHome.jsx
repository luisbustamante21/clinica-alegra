import './ImagenHome.css'
import logonombre from '../../assets/alegra.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const ImagenHome = () => {

    useEffect(() => {
        AOS.init({
            easing: 'ease-out-quart',
            delay: 500,
            duration: 1300,
        });
    })

    return (
        <div className='imagenHome container'>
            <div data-aos="zoom-in-left" className='imagenhome-contenido'>
                <div className='divtexto'>
                    <div>
                        <img src={logonombre} alt="logonombre" className='imagenLogo' />
                        <p>Especialistas en ortodoncia dedicados a transformar tu sonrisa con tecnología avanzada y un cuidado excepcional.</p>
                        <button className='btn'>Agenda una cita</button>
                    </div>

                </div>
                {/* <div className='imagenhome-vacio'>
                </div> */}
            </div>
        </div>
    );
};

export default ImagenHome;