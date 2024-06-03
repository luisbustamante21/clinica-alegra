import './AcercaDe.css';
import logoAlegra from '../../assets/logoAlegra.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const AcercaDe = () => {
    useEffect(() => {
        AOS.init({
            easing: 'ease-in-quart',
            delay: 0,
            duration: 750,
            throttleDelay: 300,
            debounceDelay: 50,
        });
    },)

    return (
        <div className="container-about">
            <div className="half" data-aos="zoom-in">
                <img src={logoAlegra} alt="imagen-logo-alegra" className='about-img' />
            </div>
            <div className="half derecha" data-aos="zoom-in">
                <h3>Acerca de Alegra</h3>
                <h2>Titulo principal de Alegra</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat sit amet risus non eleifend.
                    Aenean ac dapibus leo. Duis maximus consequat dolor non accumsan. Vestibulum at magna blandit,
                    lacinia lacus ac, accumsan sapien. Ut fringilla luctus elementum.
                    Aliquam erat volutpat. Ut semper libero augue,
                    ac gravida odio iaculis non.
                </p>
                <p>
                    Donec blandit viverra metus a blandit. Etiam congue consectetur lacinia. Cras lobortis massa non purus maximus
                    feugiat. Fusce porttitor aliquet justo, in malesuada ex rhoncus id. Praesent odio ante, l
                    aoreet eget velit et, mattis blandit lacus. Suspendisse pretium diam erat, vel mollis lorem tempus et.
                </p>
                <p>
                    Mauris iaculis congue dolor, sed mattis sapien sollicitudin ac. Suspendisse bibendum et nisi non tempor.
                    Nunc ullamcorper condimentum malesuada. Quisque rhoncus congue leo, eu mollis dolor.
                    Donec tristique, urna et commodo suscipit, ante ipsum sollicitudin arcu, eu vehicula odio metus in eros.
                </p>

            </div>
        </div>
    );
};

export default AcercaDe;
