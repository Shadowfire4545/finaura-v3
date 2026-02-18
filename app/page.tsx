import { differencesData } from "@/features/home/data/differencesData";
import { idealClient } from "@/features/home/data/idealClient";
import HomeHero from "@/features/home/sectionHero";
import HomeSteps from "@/features/home/sectionSteps";
import HomeSimulator from "@/features/home/simulator";
import Image from "next/image";
import { IoMdCheckmark } from "react-icons/io";

export default function Home() {
  return (
    <>
      <HomeHero />
      <section id="home-information" className="section-container min-h-full w-full items-center justify-center text-center flex flex-col">
          <div className="w-full flex flex-col lg:flex-row">
              <div className="w-full lg:w-1/2 order-1 lg:order-2 items-start justify-center flex flex-col">
                  <div className="text-start text-white tracking-widest w-auto">
                      <h2 className="text-xl lg:text-2xl 2xl:text-4xl font-medium ">No es falta de disciplina</h2>
                      <span className="text-2xl lg:text-3xl 2xl:text-5xl font-semibold">Es <span className="text_teal">saturación</span></span>
                      <p className="text-sm lg:text-base 2xl:text-lg font-light mt-4">
                          La mayoría de las personas no tienen<br/> un problema de ingresos<br/><br/>
                          Tienen multiples compromisos dispersos,<br/> con tasas distintas, fechas distintas <br/> y reglas distintas
                      </p>
                      <p className="
                          border border-[#71D4C4]/30 bg-linear-to-r from-[#6A4BE0]/30 to-[#41C7B5]/10 
                          backdrop-blur-sm px-4 py-2 rounded-lg w-full max-w-sm mt-6 
                          text-sm lg:text-base 2xl:text-lg font-light shadow-lg shadow-[#6A4BE0]/20
                      ">
                          Cuando todo compite por tu atención<br/>
                          nada está realmente organizado
                      </p>
                  </div>
              </div>
              <div className="w-full lg:w-1/2 order-2 lg:order-1 items-center justify-center flex">
                  <div className="relative h-64 lg:h-72 2xl:h-96 w-full max-w-md">
                    <Image
                      src={'/assets/home/information-1.png'}
                      alt="Image cubos organizados"
                      fill
                    />
                  </div>
              </div>
          </div>
      </section>
      <section
        id="home-information-2"
        className="section-container items-center justify-center w-full flex flex-col text-center"
      >
        <h2 className="text-white text-2xl lg:text-3xl 2xl:text-5xl font-semibold leading-14 tracking-wide">
          No es deuda<br/>
          Es <span className="text_teal">desorden estructural</span>
        </h2>
        <p className="text-default-200 mt-4 tracking-widest italic">Y lo que está desordenado puede estructurarse</p>
        <div className="relative h-36 w-full max-w-2xl">
          <Image
            src={'/assets/home/information-2.png'}
            alt="Image cubos organizados"
            fill
          />
        </div>
      </section>
      <HomeSteps />
      <section
        id="home-information-4"
        className="section-container min-h-full w-full items-center justify-center text-center flex flex-col"
      >
        <div className="w-full max-w-300 gap-4 lg:gap-8 flex flex-col">
          <div className="flex flex-col">
            <h2 className="text-white text-2xl lg:text-3xl 2xl:text-5xl font-semibold tracking-wide">
              Que hace diferente a Finaura
            </h2>
            <p className="text_teal text-2xl">Somos distintos y eso nos define</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 w-full items-center justify-center">
            {differencesData.map((item, index) => (
              <div 
                key={index} 
                className=" bg-linear-to-br from-[#6A4BE0]/20 to-[#41C7B5]/40
                            backdrop-blur-sm rounded-3xl p-4 w-3/4 max-w-72 min-h-48
                            flex flex-col items-center justify-center
                            shadow-lg shadow-[#6A4BE0]/20
                            hover:shadow-xl hover:shadow-[#41C7B5]/30 transition-shadow duration-300"
              >
                <h3 className="text-white text-xl font-medium flex flex-col capitalize tracking-wider">{item.title.split(' ').map(word => <span key={word}>{word} </span>)}</h3>
                <p className="text-default-200 mt-2 w-1/2">{item.description}</p>
              </div>
            ))}
          </div>

          <span className="text-white text-base tracking-wider italic">Somos orden financiero estratégico</span>
        </div>
      </section>

      <section
        id="home-information-5"
        className="section-container w-full items-center justify-center flex flex-col"
      >
        <h2 className="text-white text-2xl lg:text-3xl 2xl:text-5xl font-semibold tracking-wide">Perfil ideal</h2>
        <span className="text_teal text-base lg:text-lg tracking-wider italic mt-2">¿Finaura es para ti?</span>
        <div className="flex w-full max-w-300 items-center justify-center mt-8">
          {/* List */}
          <div className="w-full lg:w-1/2 flex flex-col">
            {idealClient.map((item, index) => (
              <div key={index} className="flex items-start gap-2 mt-4">
                <div 
                  className="
                    flex items-center text_teal p-1 backdrop-blur-sm rounded-full 
                    border border-[#71D4C4]/30 bg-linear-to-br from-[#6A4BE0]/10 via-[#2d1b4e]/20 to-[#41C7B5]/10"
                >
                  <IoMdCheckmark className="text-sm 2xl:text-lg"/>
                </div>
                <p className="text-default-200 tracking-wide text-lg">{item.description}</p>
              </div>
            ))}
            <p className="
                border border-[#71D4C4]/30 bg-linear-to-r from-[#6A4BE0]/30 to-[#41C7B5]/10 
                backdrop-blur-sm px-4 py-2 rounded-lg mr-auto mt-6 text-white tracking-widest
                text-sm lg:text-base font-light shadow-lg shadow-[#6A4BE0]/20 italic
            ">
                Si quieres soluciones rápidas o milagros<br/>
                financieros, este no es el camino correcto
            </p>
          </div>
          {/* Image */}
          <div className="w-full lg:w-1/2 relative lg:flex items-center justify-center hidden lg:h-72 2xl:h-110">
            <Image
              src={'/assets/home/information-4.avif'}
              alt="Ideal Profile"
              fill
              className="object-contain"
            /> 
          </div>
        </div>
      </section>
      <HomeSimulator />
    </>
  );
}
