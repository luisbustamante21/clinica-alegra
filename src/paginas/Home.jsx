import ImagenHome from "../Components/ImagenHome/ImagenHome";
import AcercaDe from "../PrincipalResumen/AcercaDe/AcercaDe";
import ImagenBackground from "../PrincipalResumen/ImagenBackground/ImagenBackground";
import Instalaciones from "../PrincipalResumen/Instalaciones/Instalaciones";
import BrandSection from "../PrincipalResumen/PreguntasFrecuentes/BrandSection";
import ResumenServicios from "../PrincipalResumen/Servicios/ResumenServicios";
import Footer from "../PrincipalResumen/Footer/Footer";

const Home = () => {
    return (
        <div>
            <ImagenHome />
            <div>
                <ResumenServicios />
                <AcercaDe />
            </div>
            <ImagenBackground />
            <Instalaciones />
            <BrandSection />
            <Footer />
        </div>
    );
};

export default Home;
