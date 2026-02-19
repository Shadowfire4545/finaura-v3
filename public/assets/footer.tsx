import Link from "next/link";
import Image from "next/image";

export default function Footer () {
    return (
        <footer className="footer w-full font-normal border-t-2 border-[#71D4C4]/20 text_teal">
            <div className="max-w-300 lg:max-w-350 mx-auto px-6 py-12 lg:py-24 flex flex-col gap-4 lg:gap-12">
                <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:items-start gap-4 md:gap-8">
                    <div className="w-full md:max-w-90 lg:max-w-1/3 flex flex-col gap-2.5 lg:gap-5 items-center lg:items-start text-center lg:text-start mt-2">
                        <Link href={"/"} className="relative w-64 h-24">
                            <Image
                                src="/assets/footer/finaura_logo.avif"
                                alt="Finaura Logo"
                                fill
                                sizes="200px"
                                style={{ objectFit: "contain" }}
                                priority={false}
                            />
                        </Link>
                        <p  className="text-base/6 lg:text-lg tracking-wider text_color">
                            Inversiones claras, rendimientos sólidos y respaldo institucional
                        </p>
                        <small className="text-xs text_teal lg:text-sm">
                            Finaura, S.A. de C.V., SOFOM, E.N.R.<br/>&copy; 2026 Todos los derechos reservados.
                        </small>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-3 justify-end gap-6 md:gap-8 lg:gap-24 ml-8 lg:ml-0">
                        <div className="min-w-40 flex flex-col gap-1.5 lg:gap-3">
                            <span className="text-[15px] font-semibold mt-2.5 lg:text-lg text_teal">Contacto</span>
                            <p className="text-[13px] text_teal text-base/6 hover:text-[#1b3439] lg:text-base">
                            Av. Empresarios 135 <br />
                            Col. Puerta de Hierro.<br />
                            Zapopan, Jalisco.
                            </p>
                            <p className="text-[13px] text_teal text-base/6 hover:text-[#1b3439] lg:text-base">
                            33 1454 1597<br />
                            contacto@finaura.com
                            </p>
                        </div>

                    </div>
                </div>
                
                <hr className="my-1 w-full border-0 h-px bg-[#71D4C4]/20" />

                <div className="flex flex-col lg:flex-row items-center justify-between">
                    <span className="text-[12px] text_teal text-center md:text-start mb-4 lg:mb-0 lg:text-sm">
                        FINAURA se encuentra respaldada por las instituciones regulatorias en servicios financieros.
                    </span>
                    <div className="flex items-center gap-4.25 lg:gap-12">
                        <Link href="https://www.condusef.gob.mx/" target="_blank" rel="noopener">                            
                            <Image src="/condusef.png" alt="CONDUSEF" width={90} height={50} />
                        </Link>
                        <Link href="https://www.cnbv.gob.mx/" target="_blank" rel="noopener">
                            <Image src="/CNBV.png" alt="CNBV" width={90} height={50} />
                        </Link>
                        <Link href="https://www.gob.mx/shcp" target="_blank" rel="noopener">
                            <Image src="/mexicoBank.png" alt="SHCP" width={90} height={50} />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}