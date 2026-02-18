
import Link from "next/link";

export default function HomeHero () {
    return (
        <section
            id="hero-home-page"
            className=" min-h-screen w-full flex items-center justify-center 
                        shadow-2xl text-white
                        bg-[url('/assets/home/banner.png')] bg-cover bg-center bg-no-repeat"
        >
            <div className="flex w-full min-h-150 justify-between">
                <div className="flex items-center justify-center w-full lg:w-1/2">
                    <div className="items-start flex flex-col gap-8">
                        <span className="
                                        text-xs uppercase text_teal font-medium 
                                        border border-[#41C7B5] rounded-2xl px-2 py-0.5
                                        bg-linear-to-r from-[#41C7B5]/50 to-[#41C7B5]/10
                        ">
                            Financiamiento estructurado responsable
                        </span>
                        <h2 className="text-3xl lg:text-5xl font-bold tracking-wider">
                            Ordena tu deuda<br/>
                            Recupera el <span className="text_teal underline underline-offset-8">control</span>
                        </h2>
                        <p className="text-xl italic text-default-200">Unificamos tus compromisos<br/> en un solo plan claro y sostenible</p>
                        <div className="flex items-center gap-6">
                            <Link 
                                href="/simulator" 
                                className=" bg-linear-to-l from-[#71D4C4] via-[#3d75d8] to-[#6A4BE0] text-white px-6 py-2 
                                            rounded-full font-bold hover:opacity-70 transition-opacity duration-300 ">
                                Evaluar mi caso
                            </Link>
                            <Link href={'/'} className="px-4 py-1.5 rounded-full border-1 border-white hover:bg-white/20 transition-colors duration-300">
                                ¿Como funciona?
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}