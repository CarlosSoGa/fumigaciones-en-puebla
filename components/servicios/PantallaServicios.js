import Fumigaciones from "./Fumigaciones";
import FooterFumigadores from "./FooterFumigadores";
import ControlPlagas from "./ControlPlagas";
import Sanitizacion from "./Sanitizacion";
import {useEffect,useState} from 'react';
function PantallaServicios() {
    const[servicio, setServicio] = useState('fumigaciones');
    function handleServicio(args){
        setServicio(args);
    }
    useEffect(() => {
        document.title = 'Fumigaciones Puebla - Servicio de '+servicio;
      }, [servicio]);
    return (
        <>
            <section className="Servicios">
                <header>
                <nav className="menu d-flex flex-column flex-md-row justify-content-center gap-md-5">
                    <h1 className={servicio === 'fumigaciones'?"menu-activo ms-sm-0 me-sm-0 ms-lg-5 me-lg-4": "menu-link ms-sm-0 me-sm-0 ms-lg-5 me-lg-4"} onClick={()=>handleServicio('fumigaciones')}>
                        FUMIGACIONES PUEBLA
                    </h1>
                    <h1 className={servicio === 'controlplagas'?"menu-activo me-sm-0  me-lg-4": "menu-link  me-sm-0  me-lg-4"} onClick={()=>handleServicio('controlplagas')}>
                        CONTROL DE PLAGAS
                    </h1>
                    <h1 className={servicio === 'sanitizacion'?"menu-activo me-sm-0 me-lg-4": "menu-link me-sm-0 me-lg-4"} onClick={()=>handleServicio('sanitizacion')}>
                        DESINFECCIÓN Y SANITIZACIÓN
                    </h1>
                </nav>
                </header>
                <section className={servicio === 'fumigaciones' ? 'd-block':'d-none'}>
                    <Fumigaciones/>
                </section>
                <section className={servicio === 'controlplagas' ? 'd-block':'d-none'}>
                    <ControlPlagas/>
                </section>
                <section className={servicio === 'sanitizacion' ? 'd-block':'d-none'}>
                    <Sanitizacion/>
                </section>
                <footer >
                    <FooterFumigadores/>
                </footer>
            </section>
        </>
    )

}
export default PantallaServicios;