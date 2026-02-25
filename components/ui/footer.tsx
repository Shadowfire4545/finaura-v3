import Link from "next/link";
import Image from "next/image";
import { NavbarLinks } from "@/config/navbarLinks";

export default function Footer () {
    return (
        <footer className="w-full font-normal border-t-3 border-[#5b4acb]/20 text_purple bg-white/80">
            <div className="max-w-300 lg:max-w-350 mx-auto px-6 py-12 lg:py-24 flex flex-col gap-6 md:gap-12">
                <div className="grid grid-cols-2 md:grid-cols-7 lg:justify-between items-start gap-y-8 md:gap-12">
                    {/* Col 1 */}
                    <div className="w-full col-span-3 flex flex-col gap-2.5 items-center md:items-start text-center md:text-start">
                        <Link href={"/"} className="flex w-48 h-12 justify-start mb-4">
                            <div className="relative w-12 h-auto">
                                <Image
                                    src="/favicon_color.avif"
                                    alt="Finaura Logo"
                                    fill
                                    className="object-contain"
                                    priority={false}
                                />
                            </div>
                            <div className="relative w-32 h-auto">
                                <Image
                                    src="/finaura_color.avif"
                                    alt="Finaura Logo"
                                    fill
                                    className="object-contain"
                                    priority={false}
                                />
                            </div>
                        </Link>
                        <p  className="text-base/6 md:text-xl tracking-wider text_purple">
                            Financiamiento estructurado responsable
                        </p>
                        <p className="text-base/6 md:text-base tracking-widest text_purple">
                            Unificamos compromisos financieros <br/>
                            bajo una estrategia clara, <br/>
                            personalizada y sostenible.
                        </p>
                    </div>
                    
                    {/* Col 2 */}
                    <div className="flex flex-col gap-2">
                        <span className="text-base font-semibold tracking-widest uppercase">Navegación</span>
                        <div className="flex flex-col gap-1">
                            {NavbarLinks.map((link, index) => (
                                <Link key={index} href={link.href} className="tracking-wider font-sans hover:underline hover:underline-offset-4">
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                    
                    {/* Col 3 */}
                    <div className="flex flex-col gap-2">
                        <span className="text-base font-semibold tracking-widest uppercase">Regulación</span>
                        <span>Fintech regulada en México</span>
                        <div className="flex gap-2 justify-start">
                            <div className="relative h-12 w-20">
                                <Image
                                    src={'/assets/CNBV.png'}
                                    alt="CNBV logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <div className="relative h-12 w-16">
                                <Image
                                    src={'/assets/condusef.png'}
                                    alt="Condusef Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <div className="relative h-12 w-16">
                                <Image
                                    src={'/assets/mexicoBank.png'}
                                    alt="Banco de México Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Col 4 */}
                    <div className="flex flex-col gap-2 col-span-2">
                        <span className="text-base font-semibold tracking-widest uppercase">Contacto</span>
                        <p className="text-[13px] text_purple text-base/6 hover:text-[#1b3439] lg:text-base">
                            Av. Empresarios 135 <br />
                            Col. Puerta de Hierro.<br />
                            Zapopan, Jalisco.
                        </p>
                        <p className="text-[13px] text_purple text-base/6 hover:text-[#1b3439] lg:text-base">
                            33 1454 1597<br />
                            contacto@finaura.com
                        </p>
                        <Link 
                            href={'/contact'} 
                            className="
                                py-1 px-4 border rounded-full text-sm mx-auto md:mr-auto md:mx-0 w-auto mt-4 
                                bg-linear-to-bl from-[#7760eb]/10 to-[#4fc5b7]/10 tracking-wider 
                                hover:opacity-60 hover:transition-opacity hover:duration-300"
                        >
                            Solicitar evaluación personalizada
                        </Link>
                    </div>
                </div>
                
                <hr className="w-full border-0 h-px bg-[#5b4acb]" />

                <div className="flex items-center justify-center text-sm md:text-base">
                    &copy; 2026 Finaura, S.A. de C.V. Todos los derechos reservados. Financiamiento sujeto a aprobación.
                </div>
            </div>
        </footer>
    )
}