import Image from 'next/image'
import DateIcon from "../../public/svg/calendar.svg"
import ModalCita from './ModalCita';
function Cita(){
    return(
        <>
        <button className="sticky-bottom citaWrapperBurbuja" data-bs-toggle="modal" data-bs-target="#modal-Cita">
                <div className="d-flex justify-content-center">
                <Image src={DateIcon} alt="Whatsapp" width="30" height="30" className="iconTel" />
                </div>
        </button>
        <ModalCita/>
        </>
    )
}
export default Cita;