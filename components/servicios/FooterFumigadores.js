import BannerPromocion from "../generales/BannerPromocion";
import Image from "next/image"
import Fumigador from "../../public/png/fumigador.webp";
import FEP from "../../public/png/FEP.png"
function FooterFumigadores() {
    return (<>
    <BannerPromocion/>
        <section className="FooterFumigadores d-flex justify-content-between">
            <div className="d-flex flex-column">
                    <Image src={Fumigador} alt="Fumigador" width="500" className="imgFumigadores me-5 d-lg-block d-none" />
                    <Image src={FEP} alt="Logo" width="200" className="imgLogo me-5 d-lg-flex d-none justify-content-center" />
                </div>
                <div>
                    <h5 className="titleFFumigadores">Fumigaciones Puebla es su mejor opción</h5>
                    <article className="descripcion mt-2">
                        Fumigamos, controlamos y solucionamos cualquier tipo de plaga en su residencia, comercio o industria.

                        <p className="mt-1"><b>Usted tiene el problema, nosotros la solución</b></p> 
                            <ul className="mt-2">
                                <li><b>Amplia experiencia en el control integral de plagas</b></li>
                                <p className="mb-2">Ofrecemos soluciones químicas adecuadas a cada problema. Más de 62 años de experiencia garantizan nuestro servicio.</p>
                                <li><b>Productos biodegradables autorizados por la SSA</b></li>
                                <p className="mb-2">Los productos que aplicamos son de uso profesional, de alta calidad y cuentan con registros exclusivos para uso urbano.</p>
                                <li><b>Empresa poblana registrada ante la SSA</b></li>
                                <p>Contamos con licencia sanitaria, otorgada por la SSA para llevar a cabo todos nuestros servicios. Expedimos certificados de fumigación para negocios o empresas.</p>
                            </ul>
                    </article>
                    <div className="d-flex justify-content-center">
                        <Image src={FEP} alt="Logo" width="200" className="d-sm-block d-lg-none mt-4" />
                    </div>
                    
                </div>
        </section>
    </>)
}
export default FooterFumigadores;