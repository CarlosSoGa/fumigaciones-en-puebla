import { useRef, useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import Loading from '../generales/Loading';
import Image from 'next/image'
import ContactUs from '../../public/png/contactus.webp'
function PantallaContacto() {
    const form = useRef();
    const [isLoading, setIsLoading] = useState(false);
    const [messageSend, setMessageSend] = useState("");
    const sendEmail = (e) => {
        e.preventDefault();
        setIsLoading(true);

        emailjs.sendForm('service_zve268p', 'template_6dknyhs', form.current, 'Iurcr5nkR9k72HCdS')
            .then((result) => {
                console.log(result.text);
                setMessageSend("ok");
                setIsLoading(false);
            }, (error) => {
                setMessageSend("error")
                console.log(error.text);
                setIsLoading(false);
            });
    };
    useEffect(() => {
        document.title = 'Fumigaciones Puebla - Contacto ';
    }, []);
    useEffect(() => {

    }, [isLoading]);
    return (
        <>
            <section className="Contacto">
                <div className='d-flex justify-content-center'>
                    <Image src={ContactUs} alt="Numerodetelefono" height="400" className='d-lg-none d-md-block d-none' />
                </div>
                <div className="cardContacto d-flex justify-content-evenly">
                    <section className={isLoading ? "formContactoLoading d-flex justify-content-center ms-0 ms-lg-5" : "d-none"}>
                        <Loading />
                    </section>
                    <section className={isLoading ? "d-none" : "formContacto mt-sm-0 mt-lg-5"}>

                        <h2 className="titleContacto">
                            ¡CONTÁCTENOS!
                        </h2>
                        <p className="description">
                            Estamos para ti, ¿En que podemos ayudarle?
                        </p>
                        <form ref={form} onSubmit={sendEmail} className="mt-5">
                            <input name="user_name" type="text" className="form-control mb-3" id="nameInput" placeholder="Nombre" required />
                            <input type="email" name="user_email" className="form-control mb-3" id="emailInput" placeholder="E-mail" required />
                            <input type="number" maxLength={10} name="user_number" className="form-control telNumero mb-3" id="telInput" placeholder="Teléfono" required />
                            <textarea className="form-control mb-3" name="message" id="telInput" placeholder="Cuéntenos en que podemos ayudarle..." style={{ "height": "100px" }} required />
                            <button type="submit" value="Send" className="btn btn-primary w-100">Enviar</button>
                        </form>
                        <div className='d-flex justify-content-center mt-2'>
                                <p className={messageSend === "" ? 'd-none' : '' || messageSend === "ok" ? 'mensajeCorrecto' : '' || messageSend === "error" ? "mensajeError" : ""}>
                                    {messageSend === "ok" ? "SE ENVIÓ TU MENSAJE CORRECTAMENTE" : "" ||
                                        messageSend === "error" ? "Ocurrió un error por favor, vuelva a intentarlo" : ""
                                    }
                                </p>
                        </div>
                    </section>
                    <Image src={ContactUs} alt="Numerodetelefono" height="600" className='d-none d-lg-block' />
                </div>

            </section>
        </>
    )
}
export default PantallaContacto;