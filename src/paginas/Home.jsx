import ImagenHome from "../PaginaPrincipal/ImagenHome/ImagenHome";
import AcercaDe from "../PaginaPrincipal/AcercaDe/AcercaDe";
import ImagenBackground from "../PaginaPrincipal/ImagenBackground/ImagenBackground";
import Instalaciones from "../PaginaPrincipal/Instalaciones/Instalaciones";
import BrandSection from "../PaginaPrincipal/PreguntasFrecuentes/BrandSection";
import ResumenServicios from "../PaginaPrincipal/Servicios/ResumenServicios";
//import Footer from "../PrincipalResumen/Footer/Footer";

const Home = () => {
    return (
        <div>
            <ImagenHome />
            <ResumenServicios />
            <AcercaDe />
            <ImagenBackground />
            <Instalaciones />
            <BrandSection />
        </div>
    );
};

export default Home;
