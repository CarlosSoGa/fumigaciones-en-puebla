import Link from 'next/link';
import Image from 'next/image';
import Moneda from "../../public/png/moneda.webp";
import Depositar from "../../public/png/depositar.webp";
import Transferencia from "../../public/png/transferencia.webp";
import Call from "../../public/png/call.webp";
import Whatsapp from "../../public/png/whatsapp.webp";
import Correo from "../../public/png/correo.webp";
import Mapa from "../../public/png/mapa.webp";
import Facebook from "../../public/png/facebook.webp";
function Footer() {
    return (
        <>
            <footer className="FooterFumigacion">
                <div className=' d-flex justify-content-around gap-md-5'>
                <section className="section">
                    <h2 className="titleFumigacion mb-2">
                        HORARIO
                    </h2>
                    <article className="d-flex justify-content-between">
                        <p className="d-md-block d-none me-4">Lunes a Viernes</p>
                        <p className="d-md-block d-none">08:00 - 18:00</p>
                        <p className="d-md-none me-3">L-V</p>
                        <p className="d-md-none">8AM - 6PM</p>
                    </article>
                    <article className="d-flex justify-content-between">
                        <p className="d-md-block d-none">Sábado</p>
                        <p className="d-md-block d-none">08:00 - 13:00</p>
                        <p className="d-md-none">S</p>
                        <p className="d-md-none">8AM - 1PM</p>
                    </article>
                    <article className="d-flex justify-content-between">
                        <p className="d-md-block d-none">Domingo</p>
                        <p className="d-md-block d-none">Cerrado</p>
                        <p className="d-md-none">D</p>
                        <p className="d-md-none">Cerrado</p>
                    </article>
                </section>
                <section className="section">
                    <h2 className="titleFumigacion mb-2">
                        METODOS DE PAGO
                    </h2>
                    <div className="d-flex justify-content-start boton mb-1">
                            <Image src={Moneda} className="me-3" alt="Efectivo" width="25" height="25" />
                             <p >Efectivo</p>
                    </div>
                    <div className="d-flex justify-content-start boton mb-1">
                            <Image src={Depositar} className="me-3" alt="Depósito" width="25" height="25" />
                            <p >Depósito</p>
                    </div>
                    <div className="d-flex justify-content-start boton mb-1">
                            <Image src={Transferencia} className="me-3" alt="Transferencia" width="25" height="25" />
                            <p>Transferencia</p>
                    </div>   
                </section>
                <section className="section">
                    <h2 className="titleFumigacion mb-2">
                        CONTACTO
                    </h2>
                    <p className="d-flex justify-content-start boton mb-1">
                            <Link href="tel:2222368626">
                            <Image src={Call} className="me-3" alt="Telefono" width="25" height="25" />
                            </Link>
                            <Link href="tel:2222368626" className='d-md-block d-none'>
                            222-236-8626
                            </Link>
                    </p>
                    <p className="d-flex justify-content-start boton mb-1">
                            <Link href="https://wa.me/2226163086?text=Hola%20estoy%20interesado%20en%20sus%20servicios%20¿Me%20podrian%20dar%20más%20información?" target="_blank" rel="noopener noreferrer"> <Image src={Whatsapp}  className="me-3" alt="Whatsapp" width="25" height="25" /></Link>   
                            <Link href="https://wa.me/2226163086?text=Hola%20estoy%20interesado%20en%20sus%20servicios%20¿Me%20podrian%20dar%20más%20información?" target="_blank" rel="noopener noreferrer" className='d-md-block d-none'>
                            
                                222-616-3086
                            </Link>
                    </p>
                    <p className="d-flex justify-content-start boton mb-1">
                            <Link href="mailto:fumigacionespuebla@yahoo.com.mx" target="_blank" rel="noopener noreferrer"><Image src={Correo} className="me-3" alt="Email" width="25" height="25" /></Link>
                            <Link href="mailto:fumigacionespuebla@yahoo.com.mx" target="_blank" rel="noopener noreferrer" className='d-md-block d-none'>
                                fumigacionespuebla@yahoo.com.mx
                            </Link>
                    </p>
                    <p className="d-flex justify-content-start boton mb-1">
                            <Link href="https://goo.gl/maps/pdj6peB9UjByy6wt8" target="_blank" rel="noopener noreferrer"><Image src={Mapa} className="me-3" alt="Mapa" width="25" height="25" /></Link>
                            <Link href="https://goo.gl/maps/pdj6peB9UjByy6wt8" target="_blank" rel="noopener noreferrer" className='d-md-block d-none'>
                                Perú 805, América Sur, 72340 Puebla, Pue.
                            </Link>
                    </p>
                    <p className="d-sm-flex justify-content-start boton mb-1 d-md-none">
                        <Link href="https://www.facebook.com/FumigacionesDePuebla" className="mt-3" target="_blank" rel="noopener noreferrer">
                        <Image src={Facebook} alt="Facebook" width="25" height="25" />
                        </Link>
                    </p>
                </section>
                <section className="section d-none d-md-block">
                    © 2022 por FUMIGACIONES PUEBLA.
                    <p className="d-flex justify-content-start boton mb-1">
                        <Link href="https://www.facebook.com/FumigacionesDePuebla" className="mt-3" target="_blank" rel="noopener noreferrer">
                        <Image src={Facebook} alt="Facebook" width="25" height="25" />
                        </Link>
                    </p>
                </section>
                </div>
                <section className='mt-3 certificado d-flex justify-content-center d-sm-block d-md-none '>
                © 2022 por FUMIGACIONES PUEBLA.
                
                </section>
            </footer>
        </>
    )
}
export default Footer;