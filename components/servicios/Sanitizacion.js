function Sanitizacion() {
    return (
        <>
            <section className="Sanitizacion">
                <h2 className="titleSanitizacion d-flex justify-content-center">
                    DESINFECCIÓN Y SANITIZACIÓN INSTITUCIONAL
                </h2>

                <article className="quienesSomos">
                    <p>Contamos con servicios especializados en desinfección y sanitización de instituciones públicas o privadas.</p><p><b> Empleamos productos totalmente biodegradables que no representan riesgos de intoxicación para su personal.</b> Ofrecemos soluciones efectivas, siempre de la mano de profesionales en el ramo que le asesorarán para recomendarle la solución más eficaz a su problema.</p>
                </article>
                <div className="cardProcesos">
                    <section className="cardP">
                        <div className="titleProcesos" data-bs-toggle="collapse" href="#integrales">FUMIGACIONES PUEBLA SERVICIOS INTEGRALES</div>
                        <article className="collapse" id="integrales">
                            <div className="descripcion mt-2">
                                Ofrecemos <b>desinfección y sanitización</b> específicamente enfocadas para instituciones como <b>hospitales, clínicas, salas de curas, quirófanos, gimnasios, centros deportivos, centros educativos, colegios, hoteles, restaurantes, cocinas industriales, industrias alimentarias, granjas y criaderos.</b>
                            </div>
                        </article>
                    </section>
                    <section className="cardP mt-4">
                        <div className="titleProcesos" data-bs-toggle="collapse" href="#especializadas">DESINFECCIÓN MEDIANTE SUSTANCIAS ESPECIALIZADAS</div>
                        <article className="collapse" id="especializadas">
                            <div className="descripcion mt-2">
                                Este tratamiento requiere un trabajo previo de limpieza a fondo para eliminar cualquier suciedad en las zonas o superficies a tratar, ya que en caso contrario los productos químicos pueden perder parte de su efectividad. Existe una amplia gama de sustancias químicas que se pueden utilizar para aplicar <b>tratamientos de desinfección.</b> Los más habituales son los derivados del cloro, frecuentemente utilizados en nuestra vida cotidiana.
                            </div>
                        </article>
                    </section>
                    <section className="cardP mt-4">
                        <div className="titleProcesos" data-bs-toggle="collapse" href="#institucional">SANITIZACIÓN INSTITUCIONAL</div>
                        <article className="collapse" id="institucional">
                            <div className="descripcion mt-2">
                                La <b>sanitización</b> reduce el número de microorganismos hasta un nivel seguro, acaba con los <b>microorganismos</b> que la limpieza general no es capaz de eliminar mediante un proceso preventivo, especialmente indicado para luchar contra la contaminación en áreas donde la asepsia es totalmente necesaria.

                                En el mercado existen muchos productos diferentes capaces de sanitizar. Sin embargo, cada uno presenta una serie de ventajas y desventajas que les hace estar más indicados para luchar contra cierto tipo de microorganismos que otros. Por esto, se recomienda que solo profesionales realicen el proceso de sanitización, ya que únicamente personal especializado sabrá qué productos están más indicados para cada caso.
                            </div>
                        </article>
                    </section>
                </div>
            </section>
        </>
    )
}
export default Sanitizacion;