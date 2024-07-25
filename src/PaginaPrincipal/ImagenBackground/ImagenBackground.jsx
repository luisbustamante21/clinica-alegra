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
                            <div className="subtitulo">
                                <h3>Menor Desgaste Dental</h3>
                            </div>
                            <p>
                                Al corregir la alineación, se distribuye mejor la presión sobre los dientes,
                                reduciendo el desgaste y la posibilidad de fracturas dentales.
                            </p>
                        </div>
                    </div>
                    <div className="item " data-aos="zoom-in">
                        <div>
                            <img src={dienteLogo2} alt="" className='img' />
                        </div>
                        <div>
                            <div className="subtitulo">
                                <h3>Tratamiento Integral</h3>
                            </div>
                            <p>
                                Es parte de un enfoque completo para resolver problemas
                                complejos de alineación dental y mejorar tanto la estética como la función oral del paciente.
                            </p>
                        </div>
                    </div>
                    <div className="item " data-aos="zoom-in">
                        <div>
                            <img src={dienteLogo3} alt="" className='img' style={{ marginBottom: "8px" }} />
                        </div>
                        <div>
                            <div className="subtitulo">
                                <h3>Facilita la Higiene Dental</h3>
                            </div>
                            <p>
                                Con dientes bien alineados, es más fácil usar el cepillo de dientes y el
                                hilo dental, lo que ayuda a mantener tu boca limpia y fresca.
                            </p>
                        </div>
                    </div>
                    <div className="item " data-aos="zoom-in">
                        <div>
                            <img src={dienteLogo4} alt="" className='img' />
                        </div>
                        <div>
                            <div className="subtitulo">
                                <h3>Realza tu Sonrisa</h3>
                            </div>
                            <p>
                                Mantener los dientes alineados no solo realza la apariencia de tu sonrisa,
                                sino que también incrementa la confianza y la seguridad en tu día a día.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImagenBackground;
