import Image from 'next/image';
import BAS from "../../public/png/bas.webp";
import FMC from "../../public/png/fmc.webp";
import Syngenta from "../../public/png/syngenta.png"
import Bayer from "../../public/png/bayer.webp";
import Tridente from "../../public/svg/tridente.svg";
function Marcas(){
    return(
        <>
        <section className="d-md-flex justify-content-evenly mt-3 mb-5 d-none">
            <Image src={BAS} alt="Marca BAS" height="40"/>
            <Image src={FMC} alt="Marca FMC" height="40" />
            <Image src={Syngenta} alt="Marca Syngenta" height="40"/>
            <Image src={Bayer}alt="Marca Bayer"height="40" />
            <Image src={Tridente} alt="Marca Tridente" height="40"/>
        </section>
        <section className="d-flex justify-content-center gap-3 mt-3 mb-5 d-md-none">
            <Image src={BAS} alt="Marca BAS" height="15"/>
            <Image src={FMC} alt="Marca FMC" height="15" />
            <Image src={Syngenta} alt="Marca Syngenta" height="15"/>
            <Image src={Bayer}alt="Marca Bayer"height="15" />
            <Image src={Tridente} alt="Marca Tridente" height="15"/>
        </section>
        </>
    )
}
export default Marcas;