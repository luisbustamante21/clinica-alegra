import './Instalaciones.css'
import imagen1 from '../../assets/instalaciones/img1.jpg'
import imagen2 from '../../assets/instalaciones/img2.jpg'
import imagen3 from '../../assets/instalaciones/img3.jpg'
import imagen4 from '../../assets/instalaciones/img4.jpg'
import imagen5 from '../../assets/instalaciones/img5.jpg'
import { ImageSlider } from './ImageSlider'

const IMAGES = [imagen1, imagen2, imagen3, imagen4, imagen5];

const Instalaciones = () => {
    return (
        <div className='.container-instalaciones'>
            <h1 className="heading" >Nuestras instalaciones</h1>
            <ImageSlider imagesUrls={IMAGES}></ImageSlider>
        </div>
    );
};

export default Instalaciones;