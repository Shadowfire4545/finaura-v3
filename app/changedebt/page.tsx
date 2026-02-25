import { benefitsDataChangeDebt } from "@/features/changedebt/data/benefitsData";
import { howWorksFinauraData } from "@/features/changedebt/data/howWorksFinaura";
import ChangeDebtHero from "@/features/changedebt/sectionHero";
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
                        <h2 className="text-2xl md:text-4xl 2xl:text-5xl font-medium tracking-widest text-center md:px-16 text_purple">
                            Beneficios de la consolidación de deudas con <span className="text_light_purple font-medium"> Finaura. </span>
                        </h2>
                        <p className="text-center text-sm md:text-base tracking-wider">
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

            {/* Section How-It-Works Finaura */}
            <section
                id="changeedebt-how-it-works-finaura"
                className="section-container w-full"
            >
                <div className="w-full max-w-300 flex flex-col items-center justify-center gap-4">
                    <h2 className="text-2xl md:text-4xl 2xl:text-5xl font-medium tracking-widest text-center md:px-16 text_purple">
                        ¿Cómo funciona finaura?
                    </h2>
                    <p className="text-base lg:text-lg text-gray-600 text-center tracking-wide">
                        Consolidar tus deudas nunca había sido tan sencillo. <br/>Aquí te explicamos cómo hacerlo en tres simples pasos:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-24 2xl:gap-28 w-full mt-6">
                        {howWorksFinauraData.map((item, index) => (
                            <div key={index} className="flex flex-col gap-3 h-full ">
                                <div className="flex items-center justify-start gap-6">
                                    <span className="text-start text_light_purple text-6xl px-2 font-medium font-sans">{item.step}</span>
                                    <h3 className="text-lg font-bold text_purple tracking-wider">{item.title}</h3>
                                </div>                                
                                <p className="text-sm md:text-base tracking-wide text-gray-600">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}