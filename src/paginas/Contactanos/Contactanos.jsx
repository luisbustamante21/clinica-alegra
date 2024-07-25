import './Contactanos.css';
import emailjs from '@emailjs/browser';
import { useRef, useState, useEffect } from 'react';

const Contactanos = () => {
    const form = useRef();
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [mensaje, setMensaje] = useState('');
    const [envioHabilitado, setEnvioHabilitado] = useState(false);

    useEffect(() => {
        // Validar si todos los campos están llenos para habilitar el botón de enviar
        if (nombre !== '' && email !== '' && mensaje !== '') {
            setEnvioHabilitado(true);
        } else {
            setEnvioHabilitado(false);
        }
    }, [nombre, email, mensaje]);

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'user_name') {
            setNombre(value);
        } else if (name === 'user_email') {
            setEmail(value);
        } else if (name === 'message') {
            setMensaje(value);
        }
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_ofzx1zn', 'template_4096q65', form.current, {
                publicKey: 'vh9lkDPSss5NXopvU',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <div className='contact-container'>
            <h1>Ponte en contacto</h1>
            <div className='columns-contact'>
                <div className='column-contact'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.9447909733235!2d-79.2028784!3d-4.031687700000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91cb37c2ed98c103%3A0xf7a169270b0f1a0c!2sAlegra%20Cl%C3%ADnica%20dental%20%2F%20Nelson%20Bustamante%20Ortodoncia%20Loja!5e0!3m2!1ses-419!2sec!4v1717884373950!5m2!1ses-419!2sec"
                        width="600"
                        height="450"
                        style={{ border: "0", height: "431px" }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className='column-contact'>
                    <form ref={form} onSubmit={sendEmail}>
                        <label>Nombre</label>
                        <input type="text" name="user_name" value={nombre} onChange={handleChange} />
                        <label>Email</label>
                        <input type="email" name="user_email" value={email} onChange={handleChange} />
                        <label>Mensaje</label>
                        <textarea name="message" value={mensaje} onChange={handleChange} />
                        <input type="submit" value="Enviar" className={envioHabilitado ? 'envio-habilitado' : ''} />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contactanos;
