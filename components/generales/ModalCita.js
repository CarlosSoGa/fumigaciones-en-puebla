import { useRef, useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import Loading from '../generales/Loading';
function ModalCita() {
    const form = useRef();
    const [isLoading, setIsLoading] = useState(false);
    const [messageSend, setMessageSend] = useState("");
    const sendEmail = (e) => {
        e.preventDefault();
        setIsLoading(true);
        emailjs.sendForm('service_zve268p', 'template_3ph0qwi', form.current, 'Iurcr5nkR9k72HCdS')
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
    return (
        <>
            <div className="modal fade" id="modal-Cita" tabIndex="-1" aria-labelledby="modalCitaLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title d-flex justify-content-center fs-5 d-none" id="modalCitaLabe">AGENDA UNA CITA</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body mb-5">
                            <h1 className="d-flex justify-content-center titleModal">AGENDA TU CITA</h1>
                            {isLoading ? (
                                <div className='modalLoading'>
                                    <Loading />
                                </div>
                            ) : (
                                    <form ref={form} onSubmit={sendEmail} className="mt-5">
                                        <input name="user_dia" type="date" className="form-control mb-3" id="dateInput" required />
                                        <select className="form-select mb-3" name="user_hora" id="horaInput" aria-label="Default select example" required>
                                            <option defaultValue>Elije una hora</option>
                                            <option value="8:00 AM">08:00 AM</option>
                                            <option value="8:30 AM">08:30 AM</option>
                                            <option value="9:00 AM">09:00 AM</option>
                                            <option value="9:30 AM">09:30 AM</option>
                                            <option value="10:00 AM">10:00 AM</option>
                                            <option value="10:30 AM">10:30 AM</option>
                                            <option value="11:00 AM">11:00 AM</option>
                                            <option value="11:30 AM">11:30 AM</option>
                                            <option value="12:00 AM">12:00 AM</option>
                                            <option value="12:30 AM">12:30 AM</option>
                                            <option value="01:00 PM">01:00 PM</option>
                                            <option value="01:30 PM">01:30 PM</option>
                                            <option value="02:00 PM">02:00 PM</option>
                                            <option value="02:30 PM">02:30 PM</option>
                                            <option value="03:00 PM">03:00 PM</option>
                                            <option value="03:30 PM">03:30 PM</option>
                                            <option value="04:00 PM">04:00 PM</option>
                                            <option value="04:30 PM">04:30 PM</option>
                                            <option value="05:00 PM">05:00 PM</option>
                                            <option value="05:30 PM">05:30 PM</option>
                                        </select>
                                        <input name="user_name" type="text" className="form-control mb-3" id="nameInput" placeholder="Nombre" required />
                                        <input type="email" name="user_email" className="form-control mb-3" id="emailInput" placeholder="E-mail" required />
                                        <input type="number" maxLength={10} name="user_number" className="form-control telNumero mb-3" id="telInput" placeholder="Teléfono" required />
                                        <textarea className="form-control mb-4" name="message" id="telInput" placeholder="¿Hay algo más que debamos saber?" style={{ "height": "100px" }} required />

                                        <button type="submit" value="Send" className="btn btn-primary w-100">Enviar</button>
                                    </form>
                                )}
                            <div className='d-flex justify-content-center mt-2'>
                                <p className={messageSend === "" ? 'd-none' : '' || messageSend === "ok" ? 'mensajeCorrecto' : '' || messageSend === "error" ? "mensajeError" : ""}>
                                    {messageSend === "ok" ? "SE ENVIÓ TU CITA CORRECTAMENTE" : "" ||
                                        messageSend === "error" ? "Ocurrió un error por favor, vuelva a intentarlo" : ""
                                    }
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
export default ModalCita;