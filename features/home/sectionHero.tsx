"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HomeHero () {
    return (
        <section
            id="hero-home-page"
            className="relative min-h-160 md:min-h-180 w-full flex items-center justify-center 
                        shadow-2xl text-white px-8 lg:px-0 bg-linear-to-r from-[#7760eb] to-[#4fc5b7] overflow-hidden isolate"
        >
            <div className="absolute inset-0 bg-black/30 lg:bg-transparent" />
            <div className="pointer-events-none absolute inset-0 z-0">
                <div className="absolute -top-36 -left-28 h-96 w-96 rounded-full bg-[#8f73ff]/50 blur-3xl" />
                <div className="absolute -bottom-44 -right-24 h-128 w-lg rounded-full bg-[#67e2cf]/45 blur-3xl" />
                <div className="absolute top-[16%] left-[38%] h-64 w-64 rounded-full bg-[#8cc8ff]/25 blur-3xl" />

                <div className="absolute -left-[10%] top-[8%] h-[120%] w-[70%] rounded-[42%_58%_60%_40%/46%_35%_65%_54%] border border-white/20 bg-white/5" />
                <div className="absolute -right-[14%] -bottom-[12%] h-[85%] w-[70%] rounded-[58%_42%_48%_52%/52%_56%_44%_48%] border border-white/15 bg-white/4" />

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.35)_1px,transparent_1.5px)] bg-size-[18px_18px] opacity-25" />
                <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_0%,rgba(255,255,255,0.18)_48%,transparent_100%)] opacity-15" />
            </div>

            <div className="z-10 flex w-full min-h-full justify-between max-w-350">
                <div className="flex items-center justify-center w-full lg:w-1/2">
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="items-start flex flex-col gap-4 lg:gap-8 w-full mt-8 md:mt-0">
                        <span className="
                                        text-[10px] lg:text-xs uppercase text_teal font-medium 
                                        border border-[#41C7B5] rounded-2xl px-2 py-0.5
                                        bg-linear-to-r from-[#41C7B5]/50 to-[#41C7B5]/10
                        ">
                            Financiamiento estructurado responsable
                        </span>
                        <h2 className="text-3xl lg:text-5xl font-bold tracking-wider">
                            Ordena tu deuda<br/>
                            Recupera el <span className="text_teal underline underline-offset-8">control</span>
                        </h2>
                        <div className="flex md:hidden relative w-full lg:w-1/2 h-50 rotate-5">
                            <Image
                                src={'/assets/home/banner.avif'}
                                alt="Banner Image"
                                fill
                                className="object-contain object-center rounded-3xl"
                            />
                        </div>
                        <p className="hidden md:flex text-lg lg:text-xl italic text-default-200">Unificamos tus compromisos<br/> en un solo plan claro y sostenible</p>
                        <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-6 w-full text-center -mb-8 md:mb-0">
                            <Link 
                                href="/simulator" 
                                className=" bg-linear-to-l from-[#71D4C4] via-[#3d75d8] to-[#6A4BE0] text-white px-6 py-2 w-full lg:w-auto
                                            rounded-full font-bold hover:opacity-70 transition-opacity duration-300 ">
                                Evaluar mi caso
                            </Link>
                            <Link href={'/'} className="px-4 py-1.5 rounded-full border-1 border-white hover:bg-white/20 transition-colors duration-300 w-full lg:w-auto">
                                ¿Como funciona?
                            </Link>
                        </div>
                    </motion.div>
                </div>
                <div className="hidden md:flex relative w-full lg:w-1/2 h-100 right-0 items-center justify-center rotate-5">
                    <Image
                        src={'/assets/home/banner.avif'}
                        alt="Banner Image"
                        fill
                        className="hidden md:flex object-contain object-center rounded-3xl"
                    />
                </div>
            </div>
        </section>
    )
}
