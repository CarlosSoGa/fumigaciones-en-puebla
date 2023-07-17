import Image from "next/image";
import Desinfectando from "../../public/jpg/desinfectando1.webp";
function Nosotros() {
    return (
        <>
            <section className="NosotrosSection d-flex justify-content-around">
                <Image src={Desinfectando}height="350" alt="Fumigacion" className="imgNosotros ms-5 d-lg-block d-none"/>

                <article className="textContainer">
                    <h2 className="titleNosotros">
                        ¿QUIÉNES SOMOS?
                    </h2>
                    <div className="descriptionNosotros">
                        <p>Empresa lider en el ramo, contamos con más de <b>70 años de experiencia</b>. Fumigaciones Puebla fue fundada por el Sr. Luis Kuri Mena en el año 1953, desde entonces <b>ofrecemos un amplio control y manejo integrado de plagas</b> y fauna nociva de todo tipo. <b>Orientamos nuestros servicios al área residencial, comercial e industrial</b>.</p>
                        <p className="mt-4">La <b>honestidad</b>, <b>compromiso</b>, <b>profesionalismo</b>, <b>trabajo en equipo</b>, <b>ética profesional</b> y la <b>calidad</b> en todos nuestros servicios, nos mueve para seguir siendo una empresa comprometida con la eficiencia de nuestros procesos.</p>
                        <ul className="mt-4">
                            <li><b>Servicios profesionales</b></li>
                            <li><b>Certificado de fumigación</b></li>
                            <li><b>Control de plagas</b></li>
                            <li><b>Amplia experiencia</b></li>
                            <li><b>Servicios industriales</b></li>
                        </ul>
                    </div>
                </article>
            </section>
        </>
    )
}
export default Nosotros;