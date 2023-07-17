import CardServicios from "./CardServicio";
function Servicios(){
    const servicios = [
        {
            "iconPath" :"servicios/bug.svg",
            "name" : "CONTROL DE PLAGAS",
            "description" : "Manejo integrado de plagas y personal en capacitación continua para ofrecerle las soluciones a sus problemas en plagas."
        },{
            "iconPath" :"servicios/shield1.svg",
            "name" : "CONTROL Y SEGURIDAD",
            "description" : "Aplicamos productos de las mejores marcas del mercado, biodegradables, autorizados por la Secretaría de Salubridad y Asistencia."
        },{
            "iconPath" :"servicios/earth2.svg",
            "name" : "SOLUCIONES AMBIENTALES",
            "description" : "Nuestro equipo de especialistas controlará cualquier tipo de plaga en su residencia, negocio o empresa con productos biodegradables."
        },{
            "iconPath" :"servicios/person4.svg",
            "name" : "ATENCIÓN PERSONALIZADA",
            "description" : "Cotice sus proyectos con nosotros, somos su mejor opción."
        }
    ]

    return (
        <section className="d-flex flex-column flex-md-row justify-content-between marginServicio">
            {servicios.map((data, index) => (
                    <CardServicios key={index} src={data.iconPath} title={data.name} descripcion={data.description}/>
            ))}
        </section>
    )
}
export default Servicios;