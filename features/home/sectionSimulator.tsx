"use client";

import { NumberInput } from "@heroui/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getSimulatedPayments } from "./lib/simulator";
import { motion } from "framer-motion";

const DIGITS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const SYMBOLS = ["$", ",", ".", " "];
const ROLL_CYCLES = 3;

function RollingCharacter({ character, index, value }: { character: string; index: number; value: string }) {
    const isDigit = /\d/.test(character);
    const sequence = isDigit ? DIGITS : SYMBOLS;
    const targetPosition = sequence.indexOf(character);
    const safeTargetPosition = targetPosition >= 0 ? targetPosition : 0;
    const strip = Array.from({ length: (ROLL_CYCLES + 1) * sequence.length }, (_, i) => sequence[i % sequence.length]);
    const targetIndex = ROLL_CYCLES * sequence.length + safeTargetPosition;

    return (
        <span
            className="relative inline-flex h-[1.1em] w-[0.56em] overflow-hidden align-middle [font-variant-numeric:tabular-nums]"
            aria-hidden
        >
            <motion.span
                key={`rolling-${index}-${character}-${value}`}
                initial={{ y: 0 }}
                animate={{ y: `-${targetIndex}em` }}
                transition={{ duration: 1.2, ease: [0.22, 0.61, 0.36, 1], delay: index * 0.05 }}
                className="absolute left-0 top-0 flex flex-col items-center w-full leading-none"
            >
                {strip.map((stripChar, stripIndex) => (
                    <span
                        key={`char-item-${index}-${stripIndex}`}
                        className="inline-flex h-[1em] w-full items-center justify-center"
                    >
                        {stripChar}
                    </span>
                ))}
            </motion.span>
        </span>
    );
}

function RollingMonthlyPayment({ value }: { value: string }) {
    return (
        <div className="inline-flex items-end whitespace-nowrap tracking-normal">
            {value.split("").map((character, index) => (
                <RollingCharacter
                    key={`char-wrap-${index}-${character}-${value}`}
                    character={character}
                    index={index}
                    value={value}
                />
            ))}
            <span className="text-xs lg:text-sm ml-1">/ mes</span>
        </div>
    );
}

export default function HomeSimulator() {

    const [amount, setAmount] = useState<number>(100000);
    const [period, setPeriod] = useState<number>(18);
    const [simulatedPayments, setSimulatedPayments] = useState<any[]>([]);
    const periodOptions = [6, 12, 18, 24, 30, 36];
    useEffect(() => {
        setSimulatedPayments(getSimulatedPayments(amount, period));
    }, [amount, period])

    return (
        <section
            id="simulator"
            className="section-container min-h-full w-full items-center justify-center text-center flex flex-col"
        >
            <div className="flex flex-col w-full max-w-300 gap-4">
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-medium tracking-widest -mt-4 text_purple">Más de $5,000 millones otorgados en préstamos en línea</h2>
                <h3 className="text-sm md:text-xl lg:text-2xl font-normal mb-6 text_light_purple">Más de 4 millones de personas han confiado en nosotros.</h3>
                <div className="flex flex-col md:flex-row w-full gap-8 mt-4">                
                    {/* Datos del simulador */}
                    <div className="flex flex-col items-start justify-start gap-6 md:gap-4 w-full md:w-1/3 py-4">
                        <div className="flex flex-col gap-2 items-start mb-3">
                            <span className="text-xl md:text-2xl text-[#41C7B5] font-semibold tracking-wide text-start">Simula tu crédito en segundos</span>
                            <span className="text-sm tracking-wide font-medium">Calcula cuánto pagarías al mes fácil y rápido</span>
                        </div>
                        
                        <NumberInput
                            isRequired
                            defaultValue={10000}
                            minValue={1000}
                            maxValue={10000000000}
                            variant="bordered"                            
                            value={amount}
                            onValueChange={(val: number) => {
                                setAmount(val);
                            }}
                            label="¿Cuánto necesitas?"
                            labelPlacement="outside-top"
                            color="secondary"
                            startContent={<span className="text-default-600 text-sm">$</span>}
                            endContent={<span className="text-default-600 text-xs">MXN</span>}
                            hideStepper
                            classNames={{
                                label: "text-sm tracking-wide font-medium text-start text-secondary mb-0.5",
                                input: "text-[#1b3439] font-semibold text-sm text-[15px]",
                                description: "hidden",
                                errorMessage: "hidden",
                                inputWrapper: `
                                    rounded-4xl shadow-md
                                    border-2 border-secondary focus-within:border-secondary/80 data-[invalid]:border-danger hover:border-secondary/80
                                    bg-transparent h-12 hover:bg-transparent data-[disabled]:bg-success-600                                     
                                `,                                
                            }}
                        />

                        <div className="flex flex-col gap-3 w-full">
                            <span className="text-sm tracking-wide font-medium text-start text-secondary">Plazo (meses)*</span>
                            <div className="grid grid-cols-6 gap-3 h-10 md:h-12 w-full">
                                {periodOptions.map((option) => (
                                    <button
                                        key={option}
                                        onClick={() => setPeriod(option)}
                                        className={`
                                            w-full h-full font-medium flex items-center justify-center
                                            ${period === option ? "bg-[#7B5CF1]/60 text-white inset-shadow-sm inset-shadow-[#7B5CF1]" : "bg-white"} transition-colors duration-300
                                            rounded-full shadow-xl hover:bg-[#7B5CF1]/40 hover:text-white
                                        }`}
                                    >
                                        {option}
                                    </button>
                                ))}
                            </div>
                        </div>                 
                    </div>
                    

                    {/* Tabla de resultados */}
                    <div className="flex flex-col w-full md:w-2/3 rounded-4xl items-start gap-3 justify-between p-8 bg-white/90">
                    
                        <div className="flex flex-col w-full items-center gap-3">
                            <span className="text-xl md:text-2xl text-[#41C7B5] font-semibold tracking-wide text-center w-full">¡Compara las tasas y los pagos mensuales!</span>
                            <div className="flex flex-col items-center gap-1">
                                <span className="text-md lg:text-lg tracking-wide text_purple font-normal">Pago mensual</span>
                                <span className="text-xl md:text-2xl text-center tracking-wide text-secondary font-bold">{simulatedPayments[0]?.monthlyPayment || "$0.00"}</span>
                            </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 w-full md:gap-3">
                            {simulatedPayments.map((card, index) => (
                                <div 
                                    key={index} 
                                    className={`flex flex-col gap-1 bg-white/90 rounded-2xl p-4 mt-4 items-center md:items-start shadow-md 
                                                relative hover:-translate-y-1 hover:shadow-lg transition-all duration-500
                                                ${index === 0 ? "border border-[#41C7B5]" : ""}`}
                                >
                                    <span className={`${index === 0 ? "absolute -top-3 bg-[#41C7B5] text-white rounded-xl px-2 py-1 text-sm font-semibold" : "hidden"}`}>Mejor opción</span>
                                    <span className="text-sm lg:text-lg tracking-wide font-medium text-default-700">{card.title}</span>
                                    <span className={`text-2xl lg:text-3xl tracking-wide font-semibold ${index === 0 ? 'text-secondary' : index === 1 ? 'text-default-700' : 'text-danger'}`}>{card.rate}</span>
                                    <div className="text-sm lg:text-lg tracking-wide font-medium text-default-700">
                                        <RollingMonthlyPayment value={card.monthlyPayment} />
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col md:flex-row w-full gap-6 mt-2">
                            <Link href="/contact" className="button_teal w-full p-2 rounded-2xl text-white font-medium mt-4">
                                Solicitar mi préstamo
                            </Link>
                        </div>
                    </div>
                </div>
                <p className="text-xs md:text-sm text-start text-default-700 mt-4">
                    Tasa de interés anual y fija de 8.9% a 38.9% sin IVA, sujeta a evaluación y calificación de nuestra área de crédito. Ejemplo representativo: monto de crédito por $425,000.00, con tasa anual de 18.48% y a un plazo de 36 meses. Monto total a pagar: $590,629.55 sin IVA. Sujeto a aprobación de préstamo. CAT PROMEDIO: 26.05% sin IVA. Fecha de cálculo 15 de diciembre 2025. Calculado para fines informativos y de comparación exclusivamente.
                </p>
            </div>
        </section>
    )
}