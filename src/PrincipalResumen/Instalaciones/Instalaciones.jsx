import './Instalaciones.css'
import imagen1 from '../../assets/instalaciones/img1.jpg'
import imagen2 from '../../assets/instalaciones/img2.jpg'
import imagen3 from '../../assets/instalaciones/img3.jpg'
import imagen4 from '../../assets/instalaciones/img4.jpg'
import imagen5 from '../../assets/instalaciones/img5.jpg'

const Instalaciones = () => {
    return (
        <div className='container-instalaciones'>
            <h1 className="heading" >Nuestras instalaciones</h1>
            <div className='accordion'>
                <div className='tab'>
                    <img src={imagen1} alt="" />
                </div>
                <div className='tab'>
                    <img src={imagen2} alt="" />
                </div>
                <div className='tab'>
                    <img src={imagen3} alt="" />
                </div>
                <div className='tab'>
                    <img src={imagen4} alt="" />
                </div>
                <div className='tab'>
                    <img src={imagen5} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Instalaciones;