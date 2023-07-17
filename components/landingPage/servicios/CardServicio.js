import Image from "next/image";
function CardServicios(props){
    return (
        <>
        <article className="CardServicio">
            <figure className="d-flex justify-content-center">
                <Image src={props.src} alt="Icon Servicio" width="50" height="50"/>
            </figure>
            <h2 className="titleServicio d-flex justify-content-center mt-3">
                {props.title}
            </h2>
            <p className="descripcionServicio">
                {props.descripcion}
            </p>
        </article>
        </>
    )
}
export default CardServicios;