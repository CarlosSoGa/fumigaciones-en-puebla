function ControlPlagas(){
    return(
        <>
        <section className="ControlPlagas">
                <h2 className="titleControlPlagas d-flex justify-content-center">
                    CONTROL DE PLAGAS
                </h2>
                
                <article className="quienesSomos">
                    <p><b>Manejo Integral de Plagas</b>, soluciones efectivas comprometidas con el medio ambiente.</p>
                    <p className="mt-4">En Fumigaciones Puebla no nos limitamos a eliminar las plagas que puedan afectarle. Ofrecemos un manejo integral de plagas, el cual es un concepto mucho más moderno que implica un control que modifica los factores que permiten que una plaga exista. De esta forma, no sólo <b>se controla la plaga existente</b>, sino que se trata de <b>evitar que vuelva a producirse de nuevo.</b></p>
                </article>
                <div className="cardProcesos">

                    <section className="cardP">
                        <div className="titleProcesos" data-bs-toggle="collapse" href="#roedores">CONTROL DE ROEDORES</div>
                        <article className="collapse" id="roedores">
                            <div className="descripcion mt-2">
                            Los <b>roedores</b> además de propagar enfermedades, provocan un daño significativo a la salud y al patrimonio, diseminando enfermedades y generando un riesgo serio a la salud. Ofrecemos un control de todo tipo de <b>ratas</b> y <b>ratones</b>, empleando métodos y rodenticidas autorizados por la CICOPLAFEST.
                            </div>
                        </article>
                    </section>
                    <section className="cardP mt-4">
                        <div className="titleProcesos" data-bs-toggle="collapse" href="#insectos">CONTROL DE INSECTOS</div>
                        <article className="collapse" id="insectos">
                            <div className="descripcion mt-2">
                            Desarrollamos un sistema que incluye estrategias de control para ayudarle a eliminar <b>cucarachas, hormigas, moscas, mosquitos, arañas, ácaros, piojos, grillos</b> etc. Empleamos <b>productos biodegradables</b> que no representen ningún peligro para la salud de personas y animales.
                            </div>
                        </article>
                    </section>
                    <section className="cardP mt-4">
                        <div className="titleProcesos" data-bs-toggle="collapse" href="#faunaNociva">CONTROL DE FAUNA NOCIVA</div>
                        <article className="collapse" id="faunaNociva">
                            <div className="descripcion mt-2">
                            Animales portadores de enfermedades que afectan al ser humano como: <b>alacranes, escorpiones, ciempiés</b> y muchos más, que pueden significar <b>riesgos a la salud</b> de las personas que le rodean. Contáctenos, en Fumigaciones Puebla ponemos punto final a su problema de presencia de fauna nociva.
                            </div>
                        </article>
                    </section>

                </div>
            </section>
        </>
    )
}
export default ControlPlagas;