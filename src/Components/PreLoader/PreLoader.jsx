import './preloader.css'
import { useState, useEffect } from 'react';
const words = ["Salud,", "bienestar,", "felicidad."];
import staticImage from '../../assets/solo-sonrisa-color.png';


const PreLoader = () => {

    // const [visibleIndex, setVisibleIndex] = useState(0);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setVisibleIndex((prevIndex) => {
    //             if (prevIndex < words.length - 1) {
    //                 return prevIndex + 1;
    //             } else {
    //                 clearInterval(interval); // Detener el intervalo una vez que todas las palabras hayan sido mostradas
    //                 return prevIndex;
    //             }
    //         });
    //     }, 1000); // Cambia de palabra cada segundo

    //     return () => clearInterval(interval);
    // }, []);

    const [visibleIndex, setVisibleIndex] = useState(-1); // Comienza en -1 para no mostrar nada inicialmente

    useEffect(() => {
        // Retraso inicial antes de mostrar la primera palabra
        const initialDelay = 100; // Retraso en milisegundos antes de mostrar la primera palabra
        const intervalTime = 700; // Tiempo entre el cambio de palabras

        const initialTimeout = setTimeout(() => {
            const interval = setInterval(() => {
                setVisibleIndex((prevIndex) => {
                    if (prevIndex < words.length - 1) {
                        return prevIndex + 1;
                    } else {
                        clearInterval(interval); // Detener el intervalo una vez que todas las palabras hayan sido mostradas
                        return prevIndex;
                    }
                });
            }, intervalTime);

            return () => clearInterval(interval);
        }, initialDelay);

        return () => clearTimeout(initialTimeout);
    }, []);
    return (
        <div className="preloader">
            {/* <div className="spinner"></div> */}
            <img src={staticImage} alt="Preloading" className="preloader-image" />
            <div className="words-container">
                {words.map((word, index) => (
                    <span
                        key={index}
                        className={`word ${index <= visibleIndex ? 'show' : ''}`}
                    >
                        {word}
                    </span>
                ))}
            </div>
        </div>
    );

}

export default PreLoader