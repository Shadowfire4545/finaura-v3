import Image from "next/image";
import Link from "next/link";

export default function ChangeDebtHero() {
    return (
        <section
            id="changedebt-hero"
            className="flex w-full min-h-160 items-center justify-center"
        >
            <div className="max-w-300 flex flex-col md:flex-row w-full mt-24">
                {/* Image Banner medium devices*/}
                <div className="w-1/2 hidden md:flex h-80 md:h-100 relative">
                    <Image
                        src={'/assets/home/banner1.avif'}
                        alt="banner image"
                        fill
                        className="object-contain"
                    />
                </div>
                {/* Text and buttons */}
                <div className="w-full md:w-1/2">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-wider leading-15 text_purple mb-4">Préstamos para pagar deudas</h2>
                    <span className="text_light_purple underline underline-offset-4 text-xl tracking-wide font-medium">FINAURA</span>
                    <p className="text_purple text-base 2xl:text-lg mt-6 pr-0 md:pr-10 lg:pr-20 tracking-wide">
                        Unifica tus deudas en un solo pago mensual más bajo, con tasas desde 8.9% y sin intereses ocultos.
                        Solicita hasta con plazos de 6 a 36 meses y mejora tu salud financiera hoy mismo.
                    </p>
                    <div className="flex gap-6 mt-8 tracking-wide">
                        <Link 
                            href="#simulator-changedebt" 
                            className="
                                border text_purple text-sm px-8 py-3 rounded-full
                                hover:bg-[#7c6ddf]/20 hover:transition-transform hover:duration-500 hover:-translate-y-0.5
                                hover:inset-shadow-2xs hover:inset-shadow-[#7c6ddf]/20" 
                        >
                            Cotiza tu préstamo
                        </Link>
                        <Link 
                            href="/contact" 
                            className="
                                bg-[#7c6ddf] hover:bg-[#7c6ddf]/80 text-sm text-white px-8 py-3 rounded-full 
                                hover:-translate-y-0.5 hover:transition-transform hover:duration-500"
                        >
                            Solicita tu préstamo
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}