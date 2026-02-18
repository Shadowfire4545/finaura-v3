import FinancingHero from "@/features/financing/sectionHero";
import { FaRegCreditCard } from "react-icons/fa";
import { BsFillCreditCard2FrontFill } from "react-icons/bs";
import { CgFileDocument } from "react-icons/cg";
import { IoCarSportSharp } from "react-icons/io5";

export default function FinancingPage() {
    return (
        <>
            <FinancingHero />
            <section 
                id="financing-information-1"
                className="section-container items-center justify-center w-full flex"
            >
                <div className="max-w-300 w-full flex flex-col lg:flex-row text-white items-center justify-center">
                    <div className="w-auto flex flex-col gap-2">
                        <span className="text-xl"><span className="text_teal">-</span> ¿Qué es el</span>
                        <h2 className="text-2xl font-medium">Financiamiento Estructurado</h2>
                        <p className="text-xl tracking-widest">
                            No es más deuda.<br/>
                            <span className="text_teal">Es reorganización estrátegica</span>
                        </p>
                        <div 
                            className="
                                flex flex-col py-6 px-4 bg-black/30 rounded-2xl shadow-2xl w-auto gap-5 -ml-2 tracking-wide"
                        >
                            <p>
                                El financiamiento estructurado responsable <br/>
                                permite <span className="font-medium">consolidad múltiples compromisos</span><br/>
                                financieros en <span className="font-medium">un solo pago claro y definido</span>
                            </p>
                            <p className="border-y border-[#71D4C4]/30 py-3">
                                Su objetivo no es aumentar tu carga<br/>
                                <span className="text_teal font-medium">si no optimizarla</span>
                            </p>
                            <p>
                                Analizamos tu situación actual, identificamos<br/>
                                <span className="font-medium">oportunidades de mejora</span> y diseñamos una estructura<br/>
                                que <span className="font-medium">reduzca presión sin comprometer tu historial</span>
                            </p>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/5 grid grid-cols-2 lg:grid-cols-1">
                        <div 
                            className="flex flex-col gap-2 h-28 w-42 items-center justify-center 
                            bg-linear-to-br from-[#6A4BE0]/10 via-[#2d1b4e]/20 to-[#41C7B5]/10
                            border border-[#71D4C4]/30 shadow-lg shadow-[#6A4BE0]/20 p-4 rounded-2xl"
                        >
                            <FaRegCreditCard className="text_teal text-3xl" />
                            <span>Tarjetas de Crédito</span>
                        </div>
                        <div className="flex items-center gap-2">
                            
                            <BsFillCreditCard2FrontFill className="text_teal" />
                            <span>Créditos Personales</span>
                        </div>
                        <div className="flex items-center gap-2">
                            
                            <CgFileDocument className="text_teal" />
                            <span>Documentación</span>
                        </div>
                        <div className="flex items-center gap-2">
                            
                            <IoCarSportSharp className="text_teal" />
                            <span>Vehículos</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}