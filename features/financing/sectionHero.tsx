"use client";

import { motion } from "motion/react";
import Link from "next/link";

export default function FinancingHero () {
    return (
        <section
            id="hero-financing-page"
            className="relative min-h-screen w-full flex items-center justify-center 
                        shadow-2xl text-white px-8 lg:px-0
                        bg-[url('/assets/financing/banner.avif')] bg-cover bg-position-[85%_15%] lg:bg-center bg-no-repeat"
        >
            <div className="absolute inset-0 bg-black/30 lg:bg-transparent" />

            <div className="relative z-10 flex w-full h-150 justify-center mt-24 lg:mt-0">
                <div className="flex flex-col">
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="items-center flex flex-col gap-6 lg:gap-8 text-center max-w-200"
                    >
                        <h2 className="text-3xl lg:text-4xl 2xl:text-5xl font-medium tracking-widest">
                            Financiamiento estructurado responsable
                        </h2>

                        <p 
                            className="
                                text-lg lg:text-xl italic text-default-200 w-4/5 text-justify lg:text-center
                                border-y border-[#71D4C4]/30 py-4 tracking-wide
                            "
                        >
                            Unificamos tus compromisos en un solo plan claro, sostenible y diseñado para preservar tu estabilidad
                        </p>
                        <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-6 w-3/4 text-center justify-center">
                            <Link 
                                href="/simulator" 
                                className=" 
                                    button_teal text-white px-8 py-2 w-full lg:w-auto
                                    rounded-full font-bold hover:opacity-90 transition-opacity duration-300 "
                            >
                                Evaluar mi caso
                            </Link>
                            <Link href={'/'} className="px-6 py-1.5 rounded-full border-1 border-white hover:bg-white/20 transition-colors duration-300 w-full lg:w-auto">
                                ¿Como funciona?
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}