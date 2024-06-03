import './ImagenHome.css'
import logonombre from '../../assets/logonombre.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const ImagenHome = () => {

    useEffect(() => {
        AOS.init({
            easing: 'ease-out-quart',
            delay: 500,
            duration: 1800,
        });
    })

    return (
        <div className='imagenHome container'>
            <div data-aos="fade-right" className='imagenhome-contenido'>
                <div className='divtexto'>
                    <div>
                        <h1>Lorem Ipsum</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Quisque quis urna hendrerit, cursus sapien vitae, mollis eros.
                        </p>
                        <button className='btn'>Agenda una cita</button>
                    </div>
                    <img src={logonombre} alt="logonombre" className='imagenLogo' />
                </div>
                <div className='imagenhome-vacio'>

                </div>
            </div>
        </div>
    );
};

export default ImagenHome;