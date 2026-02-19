import { benefitsData } from "@/features/home/data/benefits";
import { requirementsData } from "@/features/home/data/requirementClient";
import HomeHero from "@/features/home/sectionHero";
import HomeSimulator from "@/features/home/simulator";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HomeHero />
      {/* Validations Section */}
      <section
        id="home-organizations"
        className="w-full h-56 flex items-center justify-center bg-[#fefefe]"
      >
        <div className="w-full max-w-300 h-full flex flex-col lg:flex-row p-8">
          <div className="w-full lg:w-2/3 flex flex-col items-start justify-center gap-2">
            <h2 className="text-xl font-bold tracking-wider text_purple">Somos una fintech autorizada y regulada por la CNBV</h2>
            <p className="text-base text_light_purple font-medium">Por Condusef, la Comisión Nacional Bancaria y de Valores (CNBV) y el Banco de México (Banxico).</p>
          </div>
          <div className="w-full lg:w-1/3 items-center justify-end gap-2 grid grid-cols-3">
            <div className="relative h-24 w-full">
              <Image src="/assets/condusef.png" alt="Organizations" fill className="object-contain "/>
            </div>
            <div className="relative h-24 w-full">
              <Image src="/assets/CNBV.png" alt="Organizations" fill className="object-contain"/>
            </div>
            <div className="relative h-24 w-full">
              <Image src="/assets/mexicoBank.png" alt="Organizations" fill className="object-contain"/>
            </div>
          </div>
        </div>
      </section>

      <HomeSimulator />

      <section
        id="home-benefits"
        className="section-container w-full bg-[#fefefe] py-24"
      >
        <div className="w-full max-w-300 flex flex-col items-center justify-start gap-8">
          <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-medium tracking-wider text-center text_purple">Beneficios de solicitar tu préstamo en línea con pagos mensuales</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {benefitsData.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="flex flex-col items-center justify-between gap-2 p-4 h-full">
                  <span className="p-4 bg-[#2ea390]/80 rounded-3xl">
                    {Icon && <Icon className="text-default-200 w-8 h-8"/>}
                  </span>
                  <div className="flex flex-col h-full gap-1 text-center">
                    <h3 className="text-lg font-bold px-8 md:px-0 text_purple tracking-wide">{benefit.title}</h3>
                    <p className="text-sm text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
          <Link href="/contact" className="text-white bg-[#41C7B5] px-5 rounded-3xl py-2 font-medium tracking-wider hover:opacity-80 hover:transition-transform-opacity hover:duration-250">Ver más beneficios</Link>
        </div>
      </section>
      <section
        id="home-requirements"
        className="section-container w-full"
      >
        <div className="w-full max-w-300 flex flex-col items-center gap-6">
          <h2 className="text-2xl md:text-3xl 2xl:text-4xl tracking-widest text-center font-medium text_purple">Requisitos para obtener un préstamo en línea</h2>
          <div className="w-full flex items-center justify-center">
            <div className="w-auto md:w-1/2 h-80">
              <div className="w-80 h-80 relative mx-auto rounded-full">
                <Image
                  src={'/assets/home/requirements.avif'}
                  alt="requeriments image"
                  fill
                  className="object-cover mask-radial-from-80% bg-[#41C7B5]/20 rounded-full"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="flex flex-col">
                {requirementsData.map((requirement, index) => {
                  const Icon = requirement.icon;
                  return (
                    <div key={index} className="flex flex-col items-start justify-between gap-3 p-4 h-full">
                      <div className="flex items-center">
                        <span className="p-3 bg-[#41C7B5]/80 rounded-xl mr-2">
                          {Icon && <Icon className="text-default-200 w-5 h-5"/>}
                        </span>
                        <span className="text-2xl tracking-wide leading-7 text-default-700 font-medium text_purple">{requirement.title}</span>
                      </div>
                      <p className="text-base text-gray-600 italic tracking-wide">{requirement.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="home-information"
        className="section-container w-full bg-[#fefefe] py-24"
      >
        <div className="w-full max-w-300 flex flex-col md:flex-row items-center justify-start gap-8">
          <div className="w-full md:w-1/2 flex flex-col gap-4">
            <h2 className="text-2xl md:text-4xl font-bold tracking-wide pr-24 text_purple">¿Cómo solicitar tu préstamo en línea?</h2>
            <p className="text-base text-gray-600">El cobro de tu préstamo se realiza automáticamente cada mes por medio de domiciliación. ¡Así evitas que se te olvide tu fecha de pago!</p>
          </div>
          <div className="w-full md:w-1/2">
            <div className="w-full h-80 relative mx-auto rounded-3xl">
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

      <section
        id="home-secure"
        className="section-container w-full"
      >
        <div className="w-full max-w-300 flex flex-col items-center">
          <div className="w-full flex items-center justify-center">
            <div className="w-full md:w-1/2">
              <div className="w-100 h-100 relative mx-auto rounded-full">
                <Image
                  src={'/assets/home/secure.avif'}
                  alt="secure image"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 gap-4 flex flex-col">
              <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-medium font-serif text_purple tracking-wider">¿Es seguro pedir un préstamo en línea en finaura?</h2>          
              <h3 className="text-xl font-semibold text-gray-700">¡Sí, es seguro!</h3>
              <div className="flex flex-col gap-4">
                <div className="flex w-full items-center justify-center">
                  <span className="text_teal text-6xl px-4 font-medium font-serif">1</span>
                  <p className="text-base tracking-wider px-4">Somos una institución autorizada, regulada y supervisada por Condusef, la CNBV y Banxico.</p>
                </div>
                <div className="flex w-full items-center justify-center">
                  <span className="text_teal text-6xl px-4 font-medium font-serif">2</span>
                  <p className="text-base tracking-wider px-2">Protegemos tus datos conforme a los lineamientos de la Ley Fintech en materia de seguridad de información.</p>
                </div>
                <div className="flex w-full items-center justify-start">
                  <span className="text_teal text-6xl px-4 font-medium font-serif">3</span>
                  <p className="text-base tracking-wider px-2 mt-1">Jamás te pedimos dinero, el trámite es gratuito.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section
        id="home-results"
        className="section-container w-full bg-[#fefefe] py-36"
      >
        <div className="w-full max-w-300 flex flex-col items-center justify-start gap-8">
          <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-medium tracking-widest text-center px-16 text_purple">Préstamos en línea: estos son nuestros resultados</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {benefitsData.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="flex flex-col items-center justify-between gap-2 p-4 h-full hover:scale-105 hover:transition-transform hover:duration-500">
                  <span className="p-4 bg-[#2ea390]/80 rounded-3xl">
                    {Icon && <Icon className="text-default-200 w-8 h-8"/>}
                  </span>
                  <div className="flex flex-col h-full gap-1 text-center">
                    <h3 className="text-lg font-bold text_purple px-8 md:px-0">{benefit.title}</h3>
                    <p className="text-sm text-gray-600 tracking-wide">{benefit.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
          <Link href="/contact" className="text-white bg-[#41C7B5] px-5 rounded-3xl py-2 font-medium tracking-wider hover:opacity-80 hover:transition-transform-opacity hover:duration-250">Ver más beneficios</Link>
        </div>
      </section>

      {/* End Section CTA */}
      <section
        id="home-cta"
        className="w-full h-full flex items-center justify-center"
      >
        <div className="w-full max-w-300 flex flex-col items-center justify-center gap-4 my-24">
          <h2 className="text-2xl md:text-3xl text-center text_purple font-bold">¿Buscas un préstamo en línea seguro y con tasas y montos atractivos?</h2>
          <Link href="/contact" className="mt-4 inline-block bg-white text-[#41C7B5] font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors duration-300">
            Solicitar préstamo
          </Link>
        </div>
      </section>
    </>
  );
}
