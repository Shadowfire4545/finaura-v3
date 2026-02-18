"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function HomeHero () {
    return (
        <section
            id="hero-home-page"
            className="relative min-h-screen w-full flex items-center justify-center 
                        shadow-2xl text-white px-8 lg:px-0
                        bg-[url('/assets/home/banner.png')] bg-cover bg-position-[85%_15%] lg:bg-center bg-no-repeat"
        >
            <div className="absolute inset-0 bg-black/30 lg:bg-transparent" />

            <div className="relative z-10 flex w-full min-h-150 justify-between">
                <div className="flex items-center justify-center w-full lg:w-1/2">
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="items-start flex flex-col gap-6 lg:gap-8">
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
                        <p className="text-lg lg:text-xl italic text-default-200">Unificamos tus compromisos<br/> en un solo plan claro y sostenible</p>
                        <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-6 w-full text-center">
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
            </div>
        </section>
    )
}