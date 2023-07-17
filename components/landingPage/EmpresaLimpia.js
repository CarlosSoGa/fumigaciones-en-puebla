import BannerPromocion from "../generales/BannerPromocion";
import Image from "next/image";
import EmpresaLimpiaFoto from "../../public/png/empresaLimpia.webp"
import PlagasEliminelas from "../../public/png/plagaseliminelas.webp"
function EmpresaLimpia() {
    return (
        <>
            <BannerPromocion/>
            <section className="empresaLimpiaSeccion d-flex justify-content-center">
                <article className="containerExpertos me-5" >
                    <h2 className="titleEmpresaLimpia">FUMIGACIONES PUEBLA</h2>
                    <h3 className="subtitleEmpresaLimpia">EXPERTOS EN CONTROL DE PLAGAS</h3>
                    <ul className="textList">
                        <li className="mt-4"><p> Prevenga enfermedades y evite una mala imagen con sus clientes programando un <b>servicio de fumigación</b></p></li>
                        <li className="mt-3"><p>Solicite nuestra asesoría <b>totalmente gratis</b>, disiparemos todas las dudas que pudieran surgir con respecto a plagas, productos, servicios, costos, etc.</p></li>
                        <li className="mt-3"><p>Empleamos productos autorizados por la <b>Secretaría de Salud</b> y por la <b>CICOPLAFEST</b> que no representan ningún peligro para la salud de personas y animales.</p></li>
                    </ul>
                </article>
                <figure>
                    <Image src={EmpresaLimpiaFoto} alt="Empresa Limpia" width="400"  className="d-lg-block d-none"/>
                </figure>
            </section>
            <figure>
                <Image src={PlagasEliminelas} alt="Plagas elimínelas"className="img-containerpe mb-5"/>
            </figure>
        </>
    )
}
export default EmpresaLimpia;