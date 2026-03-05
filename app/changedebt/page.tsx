import { benefitsDataChangeDebt } from "@/features/changedebt/data/benefitsData";
import { howWorksFinauraData } from "@/features/changedebt/data/howWorksFinaura";
import { requirementsChangeDebtData } from "@/features/changedebt/data/requirementsData";
import ChangeDebtHero from "@/features/changedebt/sectionHero";
import SectionRealCases from "@/features/changedebt/sectionRealCases";
import ChangeDebtSimulator from "@/features/changedebt/sectionSimulator";
import Image from "next/image";
import Link from "next/link";

export default function ChangeDebtPage() {
    return ( 
        <>
            {/* Section Hero */}
            <ChangeDebtHero />
            
            {/* Section Information */}
            <section
                id="changeDebt-information"
                className="section-container w-full"
            >
                <div className="max-w-300 w-full flex flex-col items-center justify-center gap-3">
                    <h2 className="text-2xl md:text-4xl 2xl:text-5xl tracking-wider text_purple font-medium">Consolidación de deudas</h2>
                    <p className="w-full lg:max-w-200 text-center tracking-wide text-base/6 md:text-lg text_purple">
                        Miles de personas ya consolidaron sus deudas con 
                        <span className="text_light_purple font-medium"> Finaura. </span> 
                        El resultado: más tranquilidad, menos intereses y una sola mensualidad que sí pueden pagar.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-18 w-full">
                        <div className="flex flex-col gap-1 text-center">
                            <h3 className="text-2xl md:text-3xl text_purple font-sans">+ de <span className="font-bold font-stretch-150% tracking-wide text_light_purple">$1,000,000,000</span></h3>
                            <p>de ahorro en intereses</p>
                        </div>
                        <div className="flex flex-col gap-1 text-center">
                            <h3 className="text-2xl md:text-3xl text_purple font-sans">+ de <span className="font-bold font-stretch-150% tracking-wide text_light_purple">$3,000,000,000</span></h3>
                            <p>en préstamos entregados</p>
                        </div>
                        <div className="flex flex-col gap-1 text-center">
                            <h3 className="text-2xl md:text-3xl text_purple font-sans">+ de <span className="font-bold font-stretch-150% tracking-wide text_light_purple">1000</span></h3>
                            <p>instituciones financieras</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section What is Finaura */}
            <section
                id="changeDebt-what-is-finaura"
                className="section-container w-full bg-[#fefefe] py-16 md:py-12 lg:py-8"
            >
                <div className="w-full max-w-300 flex flex-col md:flex-row items-center justify-start gap-8">
                    <div className="w-full md:w-1/2 flex flex-col gap-6">
                        <h2 className="text-2xl md:text-4xl font-medium tracking-wider text_purple">¿Cómo se unen tus deudas?</h2>
                        <p className="text-base lg:text-lg text-gray-600">
                            Es la solución de <span className="text_light_purple font-medium"> Finaura. </span> para consolidar deudas en un solo pago mensual más bajo,
                            y con una tasa de interés más baja. <span className="text_light_purple font-medium"> Finaura. </span> se encarga de pagar tus deudas actuales 
                            y tú solo haces un pago mensual a <span className="text_light_purple font-medium"> Finaura. </span>
                        </p>
                    </div>
                    <div className="w-full md:w-1/2">
                        <div className="w-60 h-60 relative mx-auto">
                            <Image
                                src={'/assets/changeDebt/information.avif'}
                                alt="information image"
                                fill
                                className="object-cover rounded-full"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Section Banner Payment Unified */}
            <section className="relative w-full flex items-center justify-center bg-[#332475]/80 overflow-hidden">
                <div className="relative max-w-300 w-full min-h-120 md:min-h-160 flex flex-col items-center justify-start">
                    <h2 className="z-10 text-3xl md:text-4xl lg:text-5xl text-white font-medium leading-10 md:leading-15 font-serif tracking-widest text-center mt-[calc(10%)]">
                        Un pago mensual, menos<br/>
                        intereses más <span className="text-[#41C7B5] font-bold">flexibilidad</span>
                    </h2>
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-60 md:h-80 lg:h-96">
                        <Image
                            src={'/assets/changeDebt/banner1.avif'}
                            alt="payment unified image"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>
            </section>

            {/* Section Simulator Payment Unified */}
            <ChangeDebtSimulator />

            {/* Section Benefits */}
            <section
                id="changedebt-benefits"
                className="section-container w-full bg-[#fefefe] py-36"
            >
                <div className="w-full max-w-300 flex flex-col items-center justify-start gap-8 md:gap-16">
                    <div className="flex flex-col gap-3 lg:gap-5">
                        <h2 className="text-2xl md:text-4xl 2xl:text-5xl font-medium tracking-widest text-start md:text-center pr-4 md:pr-0 md:px-16 text_purple">
                            Beneficios de la consolidación de deudas con <span className="text_light_purple font-medium"> Finaura. </span>
                        </h2>
                        <p className="text-start md:text-center text-sm md:text-base tracking-wider">
                            Unificar tus deudas no sólo simplifica tu vida, también te ayuda a pagar menos<br/>
                            (puedes ahorrar más del 50% en intereses) y a mejorar tu salud financiera.<br/>
                            Estas son las ventajas de <span className="text_light_purple font-medium">Finaura.</span>
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 md:gap-12">
                        {benefitsDataChangeDebt.map((benefit, index) => {
                        const Icon = benefit.icon;
                        return (
                            <div key={index} className="flex md:flex-col items-center justify-start md:justify-between gap-4 p-4 h-full hover:scale-105 hover:transition-transform hover:duration-500">
                                <span className="p-4 lg:p-5 bg-[#2ea390]/80 rounded-3xl">
                                    {Icon && <Icon className="text-default-100 w-6 h-6 md:w-8 md:h-8"/>}
                                </span>
                                <div className="flex flex-col h-full gap-1 text-start md:text-center">
                                    <h3 className="text-base md:text-lg lg:text-xl font-bold text_purple tracking-wide">{benefit.title}</h3>
                                    <p className="text-sm md:text-base text-gray-600">{benefit.description}</p>
                                </div>
                            </div>
                        )
                        })}
                    </div>
                    <Link href="/contact" className="text-white bg-[#41C7B5] px-5 rounded-3xl py-2 font-medium tracking-wider hover:opacity-80 hover:transition-transform-opacity hover:duration-250">Ver más beneficios</Link>
                </div>
            </section>

            {/* Section Comparative */}
            <section
                id="changedebt-comparative"
                className="section-container w-full"
            >
                <div className="w-full max-w-300 flex flex-col items-center justify-center gap-4">
                    <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-medium tracking-widest text_purple">
                        Finaura VS Banco tradicional
                    </h2>
                    <p>Descubre por qué Finaura es una alternativa más flexible y conveniente que los bancos tradicionales.</p>
                    <div className="mt-4 w-full max-w-200 px-1 sm:px-3 md:px-0">
                        <div className="overflow-x-auto rounded-3xl bg-white/70 p-4 sm:p-6 md:p-8">
                            <table className="w-full min-w-180">
                                <thead>
                                    <tr className="tracking-wide">
                                        <th className="px-4 py-6 text-center text-2xl text_purple font-semibold">Condiciones</th>
                                        <th className="px-4 py-6 text-center text-2xl text_purple font-semibold">Finaura</th>
                                        <th className="px-4 py-6 text-center text-2xl text_purple font-semibold">Banco Tradicional</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border-t border-default px-4 py-4 font-semibold">Tasa de interés</td>
                                        <td className="border-t border-default px-4 py-4">Tasas personalizadas. Desde 8.9% anual</td>
                                        <td className="border-t border-default px-4 py-4">Tasas similares a las tarjetas de crédito (+50%)</td>
                                    </tr>
                                    <tr className="bg-default-100">
                                        <td className="border-t border-default px-4 py-4 font-semibold">Plazos</td>
                                        <td className="border-t border-default px-4 py-4">Plazos personalizados. De 6 a 36 meses, tú decides</td>
                                        <td className="border-t border-default px-4 py-4">Plazos rígidos. Los decide el banco</td>
                                    </tr>
                                    <tr>
                                        <td className="border-t border-default px-4 py-4 font-semibold">Requisitos</td>
                                        <td className="border-t border-default px-4 py-4">Menos estrictos, sin necesidad de aval</td>
                                        <td className="border-t border-default px-4 py-4">Requisitos estrictos, aval requerido</td>
                                    </tr>
                                    <tr className="bg-default-100">
                                        <td className="border-t border-default px-4 py-4 font-semibold">Flexibilidad de pagos</td>
                                        <td className="border-t border-default px-4 py-4">Pagos flexibles, puedes pagar más o menos cada mes</td>
                                        <td className="border-t border-default px-4 py-4">Pagos rígidos, monto fijo cada mes</td>
                                    </tr>
                                    <tr>
                                        <td className="border-t border-default px-4 py-4 font-semibold">Proceso de solicitud</td>
                                        <td className="border-t border-default px-4 py-4">100% en línea, respuesta rápida</td>
                                        <td className="border-t border-default px-4 py-4">Presencial o en línea, proceso lento</td>
                                    </tr>
                                    <tr className="bg-default-100">
                                        <td className="border-t border-default px-4 py-4 font-semibold">Atención al cliente</td>
                                        <td className="border-t border-default px-4 py-4">Atención personalizada, asesor financiero dedicado</td>
                                        <td className="border-t border-default px-4 py-4">Atención genérica, sin asesor dedicado</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section Requirements */}
            <section
                id="changedebt-requirements"
                className="section-container w-full"
            >
                <div className="w-full max-w-300 flex flex-col md:flex-row items-center md:items-stretch justify-start gap-8 md:gap-16 h-full">
                    <div className="flex flex-col w-full md:w-1/2 justify-start md:justify-between gap-2 h-full">
                        <div className="flex flex-col text-start gap-4">
                            <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-medium tracking-widest text_purple">
                                Requisitos para consolidar tus deudas con Finaura
                            </h2>
                            <p className="text-sm md:text-base tracking-wider">
                                Para poder beneficiarte de nuestra solución de consolidación de deudas, necesitas cumplir con algunos requisitos básicos:
                            </p>
                        </div>
                        <div className="relative w-full min-h-72">
                            <Image
                                src={'/assets/changeDebt/banner2.avif'}
                                alt="requirements image"
                                fill
                                className="object-contain rounded-lg"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 md:gap-6 w-full md:w-1/2">
                        {requirementsChangeDebtData.map((requirementItem, index) => (
                            <div key={index} className="flex flex-col gap-2">
                                <div className="flex gap-3 items-center">
                                    <span className="text-2xl text_light_purple font-bold">{requirementItem.step}</span>
                                    <h3 className="text-lg md:text-xl font-medium text_purple tracking-wide">{requirementItem.title}</h3>
                                </div>
                                <p className="text-base tracking-wide text-default-600">{requirementItem.description}</p>
                            </div>
                        ))}
                        <Link href={'/#contact'} className="
                            bg-[#7c6ddf] mt-3
                            hover:bg-[#7c6ddf]/80 hover:transition-colors hover:duration-400
                            mr-auto text-center py-2 px-8 md:px-4 rounded-full tracking-wider
                            font-sans font-medium text-white text-sm
                        ">
                            Consolida tu deuda
                        </Link>
                    </div>
                </div>
            </section>

            {/* Section How-It-Works Finaura */}
            <section
                id="changeedebt-how-it-works-finaura"
                className="section-container w-full bg-[#fefefe]"
            >
                <div className="w-full max-w-300 flex flex-col items-center justify-center gap-4">
                    <h2 className="text-2xl md:text-4xl 2xl:text-5xl font-medium tracking-widest text-start md:text-center md:px-16 text_purple">
                        ¿Cómo funciona finaura?
                    </h2>
                    <p className="text-base lg:text-lg text-gray-600 text-center tracking-wide">
                        Consolidar tus deudas nunca había sido tan sencillo. Aquí te explicamos cómo hacerlo en tres simples pasos:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-24 2xl:gap-28 w-full mt-6">
                        {howWorksFinauraData.map((item, index) => (
                            <div key={index} className="flex flex-col gap-3 h-full ">
                                <div className="flex items-center justify-start gap-3 md:gap-6">
                                    <span className="text-start text_light_purple text-3xl md:text-6xl px-2 font-medium font-sans">{item.step}</span>
                                    <h3 className="text-xl md:text-lg font-bold text_purple tracking-wider">{item.title}</h3>
                                </div>                                
                                <p className="text-base tracking-wide text-gray-600 ml-2 md:ml-0">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section Real Cases */}
            <SectionRealCases />

            {/* End Section CTA */}
            <section
                id="home-cta"
                className="w-full h-full flex items-center bg-[#fefefe] justify-center"
            >
                <div className="w-full max-w-300 flex flex-col items-center justify-center gap-4 my-24">
                    <h2 className="text-xl md:text-3xl 2xl:text-4xl text-center text_purple font-medium tracking-wider leading-10 md:leading-15 max-w-250 px-4 md:px-0">Comienza hoy a pagar menos por tus deudas<br/>¡Solicita tu préstamo con Finaura!</h2>
                    <Link 
                        href="/contact" 
                        className="
                        text-base font-medium tracking-widest
                        mt-4 inline-block bg-[#5b4acb] text-white  py-3 px-8 rounded-full 
                        hover:bg-[#5b4acb]/80 transition-colors duration-300"
                    >
                        Solicitar préstamo
                    </Link>
                </div>
            </section>
        </>
    )
}