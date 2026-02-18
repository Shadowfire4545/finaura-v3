
import { stepsData } from "./data/stepsData";

export default function HomeSteps() {
    return (
        <section
            id='home-information-3'
            className="section-container min-h-full items-center justify-center text-center flex flex-col gap-12"
        >
            <h2 className="text-white text-2xl lg:text-3xl 2xl:text-5xl font-semibold leading-14 tracking-wide">Cómo funciona</h2>
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-16 w-full items-center justify-center">
                {stepsData.map((step, index) => (
                    <div 
                        key={index}
                        className="flex flex-col items-center justify-center h-64 lg:h-76
                                    shadow-lg shadow-[#6A4BE0]/20 hover:-translate-y-2 transition-transform duration-500
                                    border border-[#71D4C4]/30 bg-linear-to-br from-[#6A4BE0]/10 via-[#2d1b4e]/20 to-[#41C7B5]/10
                                    backdrop-blur-sm rounded-3xl w-full p-4 lg:p-8 max-w-56 lg:max-w-64"
                    >
                        <span className="h-1/4 text-4xl font-semibold bg-linear-to-tr from-[#41C7B5] to-[#71D4C4]/80 bg-clip-text text-transparent">{index + 1}</span>
                        <div className="flex flex-col h-3/4 text-white text-center lg:text-start justify-between">
                            <h3 className="text-2xl font-semibold mb-2 h-1/2">{step.title}</h3>
                            <p className="text-sm lg:text-base 2xl:text-lg font-light h-full tracking-wide flex items-end lg:items-start">{step.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}