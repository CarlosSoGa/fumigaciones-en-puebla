import Link from 'next/link';
import Insecto3 from "../../public/png/insect3.webp";
import Insecto2 from "../../public/png/insecto.webp";
import Respiratorio from "../../public/png/respiratorio1.webp";
import ControlPlagasIcon from "../../public/png/controlPlagas.webp";
import Incecticida from "../../public/png/insecticida.webp";

import Image from 'next/image';
function ControlPlagas() {
    return (
        <>
            <section className="controlPlagas">
                <Image src={Insecto3} alt="Insecto" height="300" className="insectoPantalla1" />
                <Image src={Insecto2} alt="Insecto" height="300" className="insectoPantalla" />
                <h2 className="textTitle d-flex justify-content-center">
                    FUMIGACIÓN Y MANEJO INTEGRADO DE PLAGAS
                </h2>
                <p className="textDescription d-flex justify-content-center mt-4">
                    Las plagas son una realidad que nos rodea en el ambiente. Sin importar cuán cuidadosos seamos en la limpieza, siempre estaremos expuestos a la presencia de organismos o microorganismos no deseados.
                </p>
                <section className="d-flex justify-content-center mt-5">
                    <article className="sectionList">
                        <h3 className="textTitleList">Contamos con el manejo integrado de plagas para:</h3>
                        <ul className="textList">
                            <li>Chinches</li>
                            <li>Cucarachas</li>
                            <li>Ratas</li>
                            <li>Ratones</li>
                            <li>Moscas</li>
                            <li>Mosquitos</li>
                            <li>Hormigas</li>
                            <li>Alacranes</li>
                        </ul>
                    </article>
                    <article className="sectionList ms-5">
                        <h3 className="textTitleList">Para cualquier área como:</h3>
                        <ul className="textList">
                            <li>Casa habitación</li>
                            <li>Locales comerciales</li>
                            <li>Fábricas</li>
                            <li>Almacenes</li>
                            <li>Plantas de alimentos</li>
                            <li>Hospitales</li>
                            <li>Escuelas</li>
                            <li>Autobuses foráneos</li>
                            <li>Transporte de carga</li>
                            <li>Guarderías</li>
                        </ul>
                    </article>
                </section>
                <section className="d-flex flex-column flex-md-row justify-content-evenly mt-4 gap-5">
                    <article className="CardServicio2 " >
                        <figure className="d-flex justify-content-center">
                            <Image src={Respiratorio} alt="Icon Servicio" width="100" height="100" />
                        </figure>
                        <h3 className="titleServicio d-flex justify-content-center mt-4">
                        PREVENCIÓN DE INFECCIONES
                        </h3>
                        <p className="descripcionServicio">
                        En Fumigaciones Puebla le brindaremos los mejores planes para la prevención de infecciones en el rubro hospitalario y desinfección patógena.
                        </p>
                    </article>
                    <article className="CardServicio2">
                        <figure className="d-flex justify-content-center">
                            <Image src={ControlPlagasIcon} alt="Icon Servicio" width="100" height="100" />
                        </figure>
                        <h3 className="titleServicio d-flex justify-content-center mt-4">
                        GUÍA DE PLAGAS
                        </h3>
                        <p className="descripcionServicio">
                        Es primordial conocer los tipos de plagas que existen para poder identificar su tipo de problema, <Link href="https://irp.cdn-website.com/836eb13c/DESKTOP/pdf/guiadeplagasa106.pdf?i=3474043.pdf&fn=guiadeplagas.pdf">en este documento</Link> usted las podrá conocer a fondo.
                        </p>
                    </article>
                    <article className="CardServicio2">
                        <figure className="d-flex justify-content-center">
                            <Image src={Incecticida} alt="Icon Servicio" width="100" height="100" />
                        </figure>
                        <h3 className="titleServicio d-flex justify-content-center mt-4">
                        PROGRAMA DE CONTROL DE PLAGAS
                        </h3>
                        <p className="descripcionServicio">
                        Ofrecemos asesorías y cotizaciones sin costo para resolver sus problemas en control de plagas y fauna nociva en el ramo comercial, residencial e industrial.
                        </p>
                    </article>
                </section>
            </section>
        </>
    )

}
export default ControlPlagas;