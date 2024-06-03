import './ImagenBackground.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import dienteLogo from '../../assets/dientesIconos/muela.png'
import dienteLogo2 from '../../assets/dientesIconos/muela2.png'
import dienteLogo3 from '../../assets/dientesIconos/muela3.png'
import dienteLogo4 from '../../assets/dientesIconos/muela4.png'

const ImagenBackground = () => {
    useEffect(() => {
        AOS.init({
            easing: 'ease-in-quart',
            delay: 0,
            duration: 700,
        });
    },)
    return (
        <div className="imagenfondo">
            <div className='contenedorprincipal'>
                <div className="titulo">
                    <h2>Beneficios derivados de nuestros tratamientos</h2>
                </div>
                <div className="contenedorsecundario">
                    <div className="item " data-aos="zoom-in">
                        <div>
                            <img src={dienteLogo} alt="" className='img' />
                        </div>
                        <div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua.
                            </p>
                        </div>
                    </div>
                    <div className="item " data-aos="zoom-in">
                        <div>
                            <img src={dienteLogo2} alt="" className='img' />
                        </div>
                        <div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua.
                            </p>
                        </div>
                    </div>
                    <div className="item " data-aos="zoom-in">
                        <div>
                            <img src={dienteLogo3} alt="" className='img' />
                        </div>
                        <div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua.
                            </p>
                        </div>
                    </div>
                    <div className="item " data-aos="zoom-in">
                        <div>
                            <img src={dienteLogo4} alt="" className='img' />
                        </div>
                        <div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImagenBackground;
