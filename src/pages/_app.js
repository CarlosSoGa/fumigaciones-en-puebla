//import '@/styles/globals.css'
import "../../styles/_fumigaciones.scss";
import NavbarFumigaciones from "../../components/menu/NavbarFumigaciones";
import Footer from "../../components/footer/Footer";
import Whatsapp from "../../components/generales/Whatsapp";
import Cita from "../../components/generales/Cita";

export default function App({ Component, pageProps }) {
  return (
  <div>
  
  {/*<MenuTop />*/}
  <NavbarFumigaciones/>
  <Component {...pageProps} />
  <Footer />
  <Whatsapp/>
  <Cita/>

  
  </div>
  )
}