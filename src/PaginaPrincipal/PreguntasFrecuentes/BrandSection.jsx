import './BrandSection.css';
import logo1 from '../../assets/brands/ormco.png'
import logo2 from '../../assets/brands/hufriedy.png'
import logo3 from '../../assets/brands/dentaurum.png'
import logo4 from '../../assets/brands/Forestadent.png'
import logo5 from '../../assets/brands/invisalign.png'
import logo6 from '../../assets/brands/3M.png'
import logo7 from '../../assets/brands/ao.png'
// import logo8 from '../../assets/brands/logo8.png'
// import logo9 from '../../assets/brands/logo9.png'
// import logo10 from '../../assets/brands/logo10.png'
// import logo11 from '../../assets/brands/logo11.png'
// import logo12 from '../../assets/brands/logo12.png'

const brands = [
    { name: 'Brand 1', logo: logo1 },
    { name: 'Brand 2', logo: logo2 },
    { name: 'Brand 3', logo: logo3 },
    { name: 'Brand 4', logo: logo4 },
    { name: 'Brand 5', logo: logo5 },
    { name: 'Brand 6', logo: logo6 },
    { name: 'Brand 7', logo: logo7 },
    // { name: 'Brand 8', logo: logo8 },
    // { name: 'Brand 9', logo: logo9 },
    // { name: 'Brand 10', logo: logo10 },
    // { name: 'Brand 11', logo: logo11 },
    // { name: 'Brand 12', logo: logo12 },
];

const BrandSection = () => {
    return (
        <div className="brand-section">
            <h2 className="heading-title">Marcas con las que trabajamos</h2>
            <div className="brand-list">
                {brands.map((brand, index) => (
                    <div className="brand-item" key={index}>
                        <img src={brand.logo} alt={brand.name} className="brand-logo" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BrandSection;
