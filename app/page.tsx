import { differencesData } from "@/features/home/data/differencesData";
import { idealClient } from "@/features/home/data/idealClient";
import HomeHero from "@/features/home/sectionHero";
import HomeSteps from "@/features/home/sectionSteps";
import Image from "next/image";
import { IoMdCheckmark } from "react-icons/io";

export default function Home() {
  return (
    <>
      <HomeHero />
      <section id="home-information-1" className="section-container min-h-full w-full items-center justify-center text-center flex flex-col">
          <div className="w-full flex flex-col lg:flex-row">
              <div className="w-full lg:w-1/2 order-1 lg:order-2 items-start justify-center flex flex-col">
                  <div className="text-start text-white tracking-widest w-auto">
                      <h2 className="text-2xl 2xl:text-4xl font-medium ">No es falta de disciplina</h2>
                      <span className="text-3xl 2xl:text-5xl font-semibold">Es <span className="text_teal">saturación</span></span>
                      <p className="text-base 2xl:text-lg font-light mt-4">
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
                      className="object-contain"
                    />
                  </div>
              </div>
          </div>
      </section>      
      <HomeSteps />
      <section
        id="home-information-3"
        className="section-container items-center justify-center w-full flex flex-col text-center py-12 lg:py-0"
      >
        <h2 className="text-white text-3xl 2xl:text-5xl font-semibold tracking-wide">
          No es deuda
        </h2>
        <span className="text-3xl 2xl:text-5xl text-white font-sans mt-2 lg:tracking-wide">Es <span className="text_teal">desorden estructural</span></span>
        <p className="text-default-200 mt-2 lg:mt-4 tracking-widest italic text-base lg:text-lg">Y lo que está desordenado puede estructurarse</p>
        <div className="relative h-24 lg:h-48 w-full max-w-6xl">
          <Image
            src={'/assets/home/information-2.png'}
            alt="Image cubos organizados"
            fill
            className="object-contain"
          />
        </div>
      </section>
      <section
        id="home-information-4"
        className="section-container min-h-full w-full items-center justify-center text-center flex flex-col"
      >
        <div className="w-full max-w-300 gap-4 lg:gap-8 flex flex-col">
          <div className="flex flex-col">
            <h2 className="text-white text-3xl 2xl:text-5xl font-semibold tracking-wide px-5 lg:px-0">
              Que hace diferente a Finaura
            </h2>
            <p className="text_teal text-xl lg:text-2xl px-16 lg:px-0 mt-2">Somos distintos y eso nos define</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 w-full items-center justify-center">
            {differencesData.map((item, index) => (
              <div
                key={index}
                className=" bg-linear-to-br from-[#6A4BE0]/10 via-[#2d1b4e]/20 to-[#41C7B5]/10
                            border border-[#71D4C4]/30 shadow-lg shadow-[#6A4BE0]/20
                            backdrop-blur-sm rounded-3xl p-4 w-full max-w-72 min-h-48
                            flex flex-col items-center justify-center                            
                            hover:shadow-xl hover:shadow-[#41C7B5]/30 transition-shadow duration-300"
              >
                <h3 className="text-white text-xl font-medium flex flex-col capitalize tracking-wider">{item.title.split(' ').map(word => <span key={word}>{word} </span>)}</h3>
                <p className="text-default-200 mt-2 px-12">{item.description}</p>
              </div>
            ))}
          </div>

          <span className="text-white text-sm lg:text-base tracking-widest italic mt-4 lg:mt-0">Somos orden financiero estratégico</span>
        </div>
      </section>
      <section
        id="home-information-5"
        className="section-container w-full items-center justify-center flex flex-col"
      >
        <h2 className="text-white text-3xl 2xl:text-5xl font-semibold tracking-wide">Perfil ideal</h2>
        <span className="text_teal text-lg tracking-wider italic mt-2">¿Finaura es para ti?</span>
        <div className="flex w-full max-w-300 items-center justify-center mt-8">
          {/* List */}
          <div className="w-full lg:w-1/2 flex flex-col gap-4">
            {idealClient.map((item, index) => (
              <div key={index} className="flex items-center gap-2 h-full">
                <div 
                  className="
                    flex items-center text_teal p-1 backdrop-blur-sm rounded-full justify-center
                    border border-[#71D4C4]/30 bg-linear-to-br from-[#6A4BE0]/10 via-[#2d1b4e]/20 to-[#41C7B5]/10"
                >
                  <IoMdCheckmark className="text-sm 2xl:text-lg"/>
                </div>
                <p className="text-default-200 tracking-wide text-sm lg:text-lg">{item.description}</p>
              </div>
            ))}
            <p className="
                border border-[#71D4C4]/30 bg-linear-to-r from-[#6A4BE0]/30 to-[#41C7B5]/10 
                backdrop-blur-sm px-4 py-2 rounded-lg lg:mr-auto mt-6 text-white tracking-widest
                text-xs lg:text-base font-light shadow-lg shadow-[#6A4BE0]/20 italic
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
              className="object-contain shadow-2xl shadow-[#41C7B5]/30 rounded-full"
            /> 
          </div>
        </div>
      </section>
    </>
  );
}
