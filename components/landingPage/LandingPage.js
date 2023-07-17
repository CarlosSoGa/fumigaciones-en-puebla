import Banner from "../../components/landingPage/Banner";
import Servicios from "../../components/landingPage/servicios/Servicios";
import Nosotros from "../../components/landingPage/Nosotros";
import ControlPlagas from "../../components/landingPage/ControlPlagas";
import EmpresaLimpia from "../../components/landingPage/EmpresaLimpia";
import Marcas from "../../components/landingPage/Marcas";
import {useEffect} from 'react';
function LandingPage(){

    useEffect(() => {
      document.title = 'Fumigaciones Puebla - Exterminio y Control de Plagas';
    }, []);
  
return(
    <>
    <main className="LandigPage">
    <Banner/>
      <Servicios/>
      <Nosotros/>
      <ControlPlagas/>
      <EmpresaLimpia/>
      <Marcas/>
    </main>
    </>
)
}
export default LandingPage;