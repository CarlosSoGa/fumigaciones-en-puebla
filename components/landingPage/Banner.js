import Image from 'next/image'
import BannerF from "../../public/png/banF.webp";
import ModalCita from '../generales/ModalCita';
function Banner() {
    return (
        <>
            <section className="Banner ">
                <div className='d-md-block d-none'>
                <Image src={BannerF} alt="BannerFumigaciones" className="img-containerBanner" priority/>
                <div className="d-flex justify-content-center mt-4">
                    <button type="button" className="btn button__cita button__cita--primary" data-bs-toggle="modal" data-bs-target="#modal-Cita">
                        Agendar cita
                    </button>
                </div>
                </div>
                <div className='d-md-none d-block'>
                    <h1 className='titleFumigaciones pt-5'>FUMIGACIONES PUEBLA ®</h1>
                    <div className='d-flex justify-content-center mt-4'>
                    <button type="button" className="btn button__cita button__cita--primary" data-bs-toggle="modal" data-bs-target="#modal-Cita">
                        Agendar cita
                    </button>
                    </div>
                </div>
            </section>
            <ModalCita/>
            

        </>
    )
}
export default Banner;