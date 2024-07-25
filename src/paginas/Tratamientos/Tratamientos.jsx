import tratamiento1 from '../../assets/tratamientos/tratamiento1.png';
import tratamiento2 from '../../assets/tratamientos/tratamiento2.jpg';
import tratamiento3 from '../../assets/tratamientos/tratamiento3.jpg';
import tratamiento4 from '../../assets/tratamientos/tratamiento4.jpg';
import tratamiento5 from '../../assets/tratamientos/tratamiento5.jpg';
import './Tratamientos.css';

const Tratamientos = () => {
    return (
        <div>
            <div className='titulo-tratamiento'>
                <h1>Nuestros tratamientos</h1>
            </div>
            <div className='tratamientos-grid'>
                <div className='tratamiento'>
                    <img src={tratamiento1} alt='Tratamiento 1' />
                    <div className='caption'>
                        <h1>Ortopedia maxilar</h1>
                        <p>La ortopedia maxilar es una especialidad de la odontología que se enfoca en corregir
                            y guiar el crecimiento de los huesos faciales y los dientes en niños y adolescentes
                            mediante el uso de aparatos ortopédicos.</p>
                    </div>
                </div>
                <div className='tratamiento'>
                    <img src={tratamiento2} alt='Tratamiento 2' />
                    <div className='caption'>
                        <h1>Brackets de autoligado</h1>
                        <p>Los brackets de autoligado son aparatos ortodónticos que tienen un mecanismo incorporado
                            para sujetar el arco dental, eliminando la necesidad de ligaduras elásticas o metálicas.</p>
                    </div>
                </div>
                <div className='tratamiento'>
                    <img src={tratamiento3} alt='Tratamiento 3' />
                    <div className='caption'>
                        <h1>Brackets estéticos</h1>
                        <p>Los brackets estéticos son aparatos ortodónticos hechos de materiales como cerámica o zafiro,
                            diseñados para ser menos visibles que los metálicos tradicionales, ofreciendo una opción más
                            discreta para alinear los dientes.
                        </p>
                    </div>
                </div>
                <div className='tratamiento'>
                    <img src={tratamiento4} alt='Tratamiento 4' />
                    <div className='caption'>
                        <h1>Brackets convencionales</h1>
                        <p>Los brackets convencionales son aparatos ortodónticos de metal que se adhieren a los dientes y usan
                            ligaduras elásticas o metálicas para sujetar el arco dental, corrigiendo la alineación de los dientes
                            mediante ajustes periódicos.</p>
                    </div>
                </div>
                <div className='tratamiento'>
                    <img src={tratamiento5} alt='Tratamiento 5' />
                    <div className='caption'>
                        <h1>Alineadores invisibles</h1>
                        <p>Los alineadores invisibles son férulas transparentes y removibles que se utilizan para corregir la
                            alineación de los dientes de manera discreta y cómoda, ajustándose periódicamente para mover gradualmente
                            los dientes a su posición correcta.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tratamientos;
