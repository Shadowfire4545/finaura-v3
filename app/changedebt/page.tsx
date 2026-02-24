import { benefitsDataChangeDebt } from "@/features/changedebt/data/benefitsData";
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
                        <div className="w-full h-60 relative mx-auto rounded-3xl">
                            <Image
                                src={'/assets/home/information.avif'}
                                alt="information image"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Section Banner Payment Unified */}
            <section className="min-h-160 w-full flex items-center justify-center bg-secondary-50">
                <div className="relative max-w-300 flex flex-col items-center justify-center">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl text_purple font-medium leading-15 font-serif tracking-widest text-center">
                        Un pago mensual, menos<br/>
                        intereses más <span className="text_light_purple font-bold">flexibilidad</span>
                    </h2>
                    <div className="flex relative">
                        <Image
                            src={'/assets/home/banner3.avif'}
                            alt="payment unified image"
                            width={500}
                            height={300}
                            className="object-contain bottom-0"
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
                    <div className="flex flex-col gap-3">
                        <h2 className="text-2xl md:text-4xl 2xl:text-5xl font-medium tracking-widest text-start md:text-center md:px-16 text_purple">
                            Beneficios de la consolidación de deudas con <span className="text_light_purple font-medium"> Finaura. </span>
                        </h2>
                        <p className="text-center tracking-wider">
                            Unificar tus deudas no sólo simplifica tu vida, también te ayuda a pagar menos<br/>
                            (puedes ahorrar más del 50% en intereses) y a mejorar tu salud financiera.<br/>
                            Estas son las ventajas de <span className="text_light_purple font-medium">Finaura.</span>
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4">
                        {benefitsDataChangeDebt.map((benefit, index) => {
                        const Icon = benefit.icon;
                        return (
                            <div key={index} className="flex md:flex-col items-center justify-start md:justify-between gap-4 md:gap-2 p-4 h-full hover:scale-105 hover:transition-transform hover:duration-500">
                                <span className="p-4 bg-[#2ea390]/80 rounded-3xl">
                                    {Icon && <Icon className="text-default-100 w-6 h-6 md:w-8 md:h-8"/>}
                                </span>
                                <div className="flex flex-col h-full gap-1 text-start md:text-center">
                                    <h3 className="text-lg font-bold text_purple">{benefit.title}</h3>
                                    <p className="text-sm text-gray-600 tracking-wide">{benefit.description}</p>
                                </div>
                            </div>
                        )
                        })}
                    </div>
                    <Link href="/contact" className="text-white bg-[#41C7B5] px-5 rounded-3xl py-2 font-medium tracking-wider hover:opacity-80 hover:transition-transform-opacity hover:duration-250">Ver más beneficios</Link>
                </div>
            </section>
        </>
    )
}