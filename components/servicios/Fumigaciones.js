import Image from "next/image";
import Hospital from "../../public/svg/hospital.svg";
import School from "../../public/svg/school.svg";
import Factory from "../../public/svg/factory.svg";
function Fumigaciones() {
    return (
        <>
            <section className="fumigaciones">
                <h2 className="titleFumigaciones d-flex justify-content-center">
                    FUMIGACIONES PUEBLA
                </h2>
                <section className="plagas d-flex justify-content-center mt-5">
                    <article className="plaga-container">
                        <ul className="d-none d-md-block">
                            <li><p>Pulgas y garrapatas</p></li>
                            <li><p>Cucarachas</p></li>
                        </ul>
                        <ul className="d-block d-md-none">
                            <li><p>Pulgas y garrapatas</p></li>
                            <li><p>Cucarachas</p></li>
                            <li><p>Cochinillas</p></li>
                        </ul>
                    </article>
                    <article className="plaga-container">
                        <ul className="d-none d-md-block">
                            <li><p>Ratones y ratas</p></li>
                            <li><p>Hormigas</p></li>
                        </ul>
                        <ul className="d-block d-md-none">
                            <li><p>Ratones y ratas</p></li>
                            <li><p>Hormigas</p></li>
                            <li><p>Alacranes</p></li>
                        </ul>
                    </article>
                    <article className="plaga-container d-md-block d-none">
                        <ul>
                            <li><p>Cochinillas</p></li>
                            <li><p>Alacranes</p></li>
                        </ul>
                    </article>
                </section>
                <section className="lugares mt-5">
                    <h3 className="titleLugares1 d-flex justify-content-center">
                        Amplia experiencia en:
                    </h3>
                    <div className="d-flex flex-column flex-md-row justify-content-center mt-3">
                        <article className="card">
                            <div className="d-flex justify-content-center">
                                <Image src={Hospital} alt="Hospital" width="150" height="150" />
                            </div>
                            <h5 className="titleLugares d-flex justify-content-center">
                                HOSPITALES
                            </h5>
                        </article>
                        <article className="card">
                            <div className="d-flex justify-content-center">
                                <Image src={School} alt="School" width="150" height="150" />
                            </div>
                            <h5 className="titleLugares d-flex justify-content-center">
                                ESCUELAS
                            </h5>
                        </article>
                        <article className="card">
                            <div className="d-flex justify-content-center">
                            <Image src={Factory} alt="Factory" width="150" height="150" />
                            </div>
                            <h5 className="titleLugares d-flex justify-content-center">
                                INDUSTRIA
                            </h5>
                        </article>
                    </div>
                </section>
                <section className="quienesSomos">
                    <p>Somos una empresa 100% poblana, respaldada por más de 62 años de experiencia en el ámbito de las fumigaciones y control de plagas en los estados de Puebla y Tlaxcala. <b>Contamos con soluciones efectivas para el manejo y control de insectos en su hogar, negocio o industria.</b></p>
                    <p className="mt-4">Tomando en cuenta la plaga a eliminar le <b>recomendaremos</b> alguno de los siguientes <b>procesos de fumigación:</b></p>
                </section>
                <div className="cardProcesos">
                    <section className="cardP">
                        <div className="titleProcesos" data-bs-toggle="collapse" href="#fumigacionDirecta">FUMIGACION DIRECTA - FUMIGACIÓN TOTAL DE INSECTOS</div>
                        <article className="collapse" id="fumigacionDirecta">
                            <div className="descripcion mt-2">
                                Empleamos productos totalmente biodegradables, especializados en una fumigación y control de insectos efectivos, aplicándolos en zonas de alta circulación de plagas. Nuestros productos son inodoros, ampliamente efectivos contra insectos y no representan riesgos de intoxicación para humanos y mascotas.

                                Son rociados con equipo especializado de alta presión para asegurar la precisión y los efectos en lugares con difícil acceso. Logramos una exclusión de plagas eficaz, que liberará a su residencia, comercio o industria de esas indeseables plagas.
                            </div>
                        </article>
                    </section>
                    <section className="cardP mt-4">
                        <div className="titleProcesos" data-bs-toggle="collapse" href="#fumigacionGel">FUMIGACIÓN CON GEL - CONTROL A LARGO PLAZO</div>
                        <article className="collapse" id="fumigacionGel">
                            <div className="descripcion mt-2">
                                Aplicamos un producto de última generación en forma de gel especial, aplicándolo en pequeñas cantidades en lugares estratégicos. Este gel tiene la propiedad de atraer a los insectos, obligándolas a salir y alimentarse del gel, lo que provoca su muerte en efecto dominó.

                                Con este producto se logra una fumigación más profunda y efectiva, ya que ni el polvo ni el líquido se pueden aplicar en las zonas donde se esconde la plaga. Este tratamiento tiene una toxicidad nula para seres humanos y animales domésticos, por lo que además de uso doméstico, lo recomendamos en lugares como hospitales o quirófanos.
                            </div>
                        </article>
                    </section>
                    <section className="cardP mt-4">
                        <div className="titleProcesos" data-bs-toggle="collapse" href="#personalCalificado">PERSONAL CALIFICADO EN CONSTANTE CAPACITACIÓN</div>
                        <article className="collapse" id="personalCalificado">
                            <div className="descripcion mt-2">
                                Nuestro equipo está formado por técnicos especialistas en prevención y control integrado de plagas en constante capacitación para poder atenderle y ofrecerle la mejor solución a sus problemas en el ramo residencial, comercial e industrial.

                                Somos expertos en eliminar y controlar plagas de cucarachas, hormigas, termitas, polillas, pulgas, garrapatas, chinches, arañas, mosquitos, moscas, ácaros, alacranes, abejas, avispas, murciélagos, escarabajos y fauna nociva.
                            </div>
                        </article>
                    </section>

                </div>
            </section>
        </>
    )
}
export default Fumigaciones;