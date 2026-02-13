import Image from "next/image";
import { cardsData } from "./data/cardsData";

export default function HomeCards() {
    return (
        <section
            id='how-it-works'
            className="section-container min-h-full items-center justify-center text-center flex flex-col"
        >
            <h2 className="text-3xl font-bold mb-12 text-[#6A4BE0] tracking-wider">¿Cómo funciona?</h2>
            <div className="flex flex-col lg:flex-row gap-8 w-full items-center justify-center">
                {cardsData.map((card, index) => (
                    <div 
                        key={index}
                        className=" flex flex-col items-center justify-center rounded-3xl lg:min-h-84
                                    shadow-xl hover:-translate-y-2 transition-transform duration-500
                                    bg-[#fcfafa] p-8 max-w-xs"
                    >
                        <div className="relative w-full min-h-24 h-1/2 mb-3 ">
                            <Image
                                src={card.icon}
                                alt={card.title}
                                fill
                                className="object-contain scale-150"
                            />
                        </div>
                        <div className="flex flex-col h-1/2">
                            <h3 className="text-xl font-semibold mb-2 text-[#41C7B5]">{card.title}</h3>
                            <p className="text-default-600 mb-4 px-8 font-medium italic">{card.description}</p>    
                        </div>                    
                    </div>
                ))}
            </div>
        </section>
    )
}