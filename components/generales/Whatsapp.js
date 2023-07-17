import Link from 'next/link';
import Image from 'next/image'
import whatsappIcon from "../../public/svg/whatsappIcon.svg"
function Whatsapp(){
    return(
        <>
        <Link href="https://wa.me/2226163086?text=Hola%20estoy%20interesado%20en%20sus%20servicios%20¿Me%20podrian%20dar%20más%20información?" className="sticky-bottom chatWrapperBurbuja" target="_blank" rel="noopener noreferrer">
                <div className="d-flex justify-content-center">
                <Image src={whatsappIcon} alt="Whatsapp" width="30" height="30" className="iconTel" />
                </div>
        </Link>
        </>
    )
}
export default Whatsapp;