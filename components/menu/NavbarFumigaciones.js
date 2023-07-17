import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from "next/image";
import FEP from "../../public/png/FEP.png";
import Call from "../../public/svg/call.svg";

function NavbarFumigaciones() {
    const location = useRouter();
    return (
        <>
            <header className="navbarFumigaciones">
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <Link href={'/'} className="navbar-brand">
                            <Image src={FEP} alt="Fumigaciones en Puebla" width="53" height="30" className='imgFEP' />
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    {location.pathname === '/' ? <Link className="nav-link active" aria-current="page" href="/">Inicio</Link> : <Link className="nav-link" href="/" >Inicio</Link>}
                                </li>
                                <li className="nav-item">
                                    {location.pathname === '/servicios' ? <Link className="nav-link active" aria-current="page" href="/servicios">Servicios</Link> : <Link className="nav-link" href="/servicios" >Servicios</Link>}
                                </li>
                                <li className="nav-item">
                                    {location.pathname === '/contacto' ? <Link className="nav-link active" aria-current="page" href="/contacto" >Contacto</Link> : <Link className="nav-link" href="/contacto">Contacto</Link>}
                                </li>
                                <li className='nav-item d-lg-none d-block'>
                                    <Link href='tel:2222368626' className='nav-link'>
                                        222-236-8626
                                    </Link>
                                </li>

                            </ul>
                        </div>
                        <div className="number d-lg-flex align-items-center justify-content-end d-none">
                            <Image src={Call} alt="Numero de telefono" width="25" height="25" className="iconTel" />
                            <Link href='tel:2222368626' className='numTel ms-2'>
                                222-236-8626
                            </Link>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default NavbarFumigaciones;