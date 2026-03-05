import { FaUser } from "react-icons/fa6";
import { realCasesData } from "./data/realCasesData";

export default function SectionRealCases() {
    return (
        <section
            id="changedebt-cases"
            className="section-container w-full"
        >
            <div className="w-full max-w-300 flex flex-col items-center justify-center gap-4">
                <h2 className="text-2xl md:text-4xl 2xl:text-5xl font-medium tracking-widest text-center md:px-16 text_purple leading-10 md:leading-15">Casos reales: Préstamos para pagar tarjetas de crédito</h2>
                <p className="text-base lg:text-lg text-gray-600 text-center tracking-wide">
                    Descubre cómo otros han logrado consolidar sus deudas y ahorrar dinero con nuestros préstamos.
                </p>
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mt-6">
                    {realCasesData.map((caseItem, index) => (
                        <div key={index} className="bg-white p-6 rounded-xl shadow-md flex flex-col gap-4">
                            <div className="flex items-center gap-3">
                                <div className="h-12 w-12 rounded-lg flex items-center justify-center bg-[#7c6ddf]/80">                                    
                                    <FaUser className="text-2xl text-white" />
                                </div>
                                <span className="tracking-wide font-medium text-lg">Caso {index + 1}</span>
                            </div>
                            <p className="text-gray-600 tracking-wide">{caseItem.description}</p>
                            <hr className="border-gray-300 h-px w-full my-2" />
                            <div className="flex flex-col">
                                <span className="font-semibold text-sm">{caseItem.name} pagaba al mes:</span>
                                <span className="text-2xl sm:text-3xl font-medium tracking-wide">{caseItem.oldPayment.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' })}</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="font-semibold text-sm">Ahora paga:</span>
                                <span className="text_light_purple text-2xl sm:text-3xl font-semibold tracking-wide">{caseItem.newPayment.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' })}</span>
                            </div>
                            <div className="mt-2">
                                <span className="px-3 py-1 bg-[#7c6ddf]/50 text-white rounded-lg text-sm">Deuda consolidada</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}