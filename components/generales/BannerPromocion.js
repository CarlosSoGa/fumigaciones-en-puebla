import Link from 'next/link';
function BannerPromocion(){
    return(
        <>
        <section className="BannerPromocion d-flex justify-content-center">
                <div className="textBannerPromocion">
                    <Link href="/contacto">PREGUNTE POR NUESTRAS PROMOCIONES ESPECIALES</Link>
                </div>
        </section>
        </>
    )
}
export default BannerPromocion;