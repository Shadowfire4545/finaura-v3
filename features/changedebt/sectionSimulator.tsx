"use client";

import { NumberInput, Select, SelectItem } from "@heroui/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getSimulatedPayments } from "../home/lib/simulator";
import { bankData } from "./data/banksData";
import Image from "next/image";
import { CiCreditCard1 } from "react-icons/ci";
import { calculatedSimulatedPaymentsConsolidated } from "./lib/simulator";

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

function RollingMonthlyPayment({ value }: { value: string | number }) {
    const formattedValue = typeof value === "number"
        ? value.toLocaleString("es-MX", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
            style: "currency",
            currency: "MXN",
        })
        : String(value ?? "$0.00");

    return (
        <div className="inline-flex items-end whitespace-nowrap tracking-normal">
            {formattedValue.split("").map((character, index) => (
                <RollingCharacter
                    key={`char-wrap-${index}-${character}-${formattedValue}`}
                    character={character}
                    index={index}
                    value={formattedValue}
                />
            ))}
        </div>
    );
}

export default function ChangeDebtSimulator() {

    const [amount, setAmount] = useState<number>(100000);
    const [period, setPeriod] = useState<number>(18);
    const [simulatedPaymentsConsolidated, setSimulatedPaymentsConsolidated] = useState<any[]>([]);
    const [selectedBank, setSelectedBank] = useState<string>();
    const [selectedCard, setSelectedCard] = useState<string>();
    const periodOptions = [6, 12, 18, 24, 30, 36];

    useEffect(() => {
        setSimulatedPaymentsConsolidated(calculatedSimulatedPaymentsConsolidated(19.9, amount, period));
    }, [amount, period])

    return (
        <section
            id="simulator"
            className="section-container min-h-full w-full items-center justify-center text-center flex flex-col"
        >
            <div className="flex flex-col w-full max-w-300 gap-4">
                <div className="flex flex-col md:flex-row w-full gap-8 mt-0 md:mt-4">                
                    {/* Datos del simulador */}
                    <div className="flex flex-col items-start justify-start gap-6 md:gap-4 w-full md:w-1/3 py-4">
                        <div className="flex flex-col gap-2 items-start mb-3">
                            <span className="text-xl md:text-2xl text-[#41C7B5] font-semibold tracking-wide text-start">¿Cuánto debes? Simula tu préstamo para consolidar deudas</span>
                            <span className="text-sm tracking-wide font-medium text-start">Elige el plazo que deseas y descubre cuánto puedes ahorrar:</span>
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
                            label="¿Cuánto debes?"
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

                        <Select
                            label="¿Cuál es tu banco?"
                            labelPlacement="outside-top"
                            placeholder="Selecciona un banco"
                            color="secondary"
                            variant="bordered"
                            className="w-full"
                            selectedKeys={selectedBank ? new Set([selectedBank]) : new Set()}
                            onSelectionChange={(keys) => setSelectedBank(Array.from(keys)[0] as string)}
                            radius="full"
                            startContent={
                                        selectedBank && <Image 
                                            src={bankData.find(bank => bank.name === selectedBank)?.icon || '/assets/changeDebt/bankList/banamex.png'}
                                            width={16} 
                                            height={16} 
                                            alt={selectedBank || 'Banamex'} 
                                        />
                                    }
                            classNames={{
                                label: "text-sm tracking-wide font-medium text-start text-secondary mb-0.5",
                                trigger: `
                                    border-2 border-secondary focus-within:border-secondary/80 data-[invalid=true]:border-danger hover:border-secondary/80
                                    bg-transparent h-12 hover:bg-transparent data-[hover=true]:bg-transparent
                                `,
                                value: "text-[#1b3439] font-semibold text-[15px]",
                                selectorIcon: "text-default-600",
                            }}
                        >
                            {bankData.map((bank) => (
                                <SelectItem 
                                    key={bank.name} 
                                    startContent={
                                        <Image 
                                            src={bank.icon || '/assets/changeDebt/bankList/banamex.png'}
                                            width={16} 
                                            height={16} 
                                            alt={bank.name} 
                                        />
                                    }
                                >
                                    {bank.name}
                                </SelectItem>
                            ))}
                        </Select>
                        <Select
                            label="Tarjeta de crédito"
                            labelPlacement="outside-top"
                            placeholder="Selecciona una tarjeta"
                            isDisabled={!selectedBank}
                            color="secondary"
                            variant="bordered"
                            className="w-full"
                            radius="full"
                            selectedKeys={selectedCard ? new Set([selectedCard]) : new Set()}
                            onSelectionChange={(keys) => setSelectedCard(Array.from(keys)[0] as string)}
                            startContent={<CiCreditCard1 className="text-default-600 w-4 h-4"/>}
                            classNames={{
                                label: "text-sm tracking-wide font-medium text-start text-secondary mb-0.5",
                                trigger: `
                                    border-2 border-secondary focus-within:border-secondary/80 data-[invalid=true]:border-danger hover:border-secondary/80
                                    bg-transparent h-12 hover:bg-transparent data-[hover=true]:bg-transparent
                                `,
                                value: "text-[#1b3439] font-semibold text-sm",
                                selectorIcon: "text-default-600",
                            }}
                        >
                            {selectedBank 
                            ? bankData.find(bank => bank.name === selectedBank)?.cards.map((card) => (
                                <SelectItem key={card.name} startContent={<CiCreditCard1 className="text-default-600 w-4 h-4"/>}>                                        
                                    {card.name}
                                </SelectItem>
                            )) || []
                            : (
                                <SelectItem key="placeholder">
                                    Selecciona un banco
                                </SelectItem>
                            )
                            }
                        </Select>

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
                        <p className="text-start ">
                            Esta es una cotización preliminar, la tasa definitiva dependerá del análisis completo de tu solicitud.
                        </p>            
                    </div>
                    

                    {/* Tabla de resultados */}
                    <div className="flex flex-col w-full md:w-2/3 rounded-4xl gap-3 md:gap-6 p-8 bg-white/90">
                    
                        <span className="text-xl md:text-2xl text-[#41C7B5] font-semibold tracking-wide text-center w-full">¡Liquida tus deudas y paga menos!</span>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-3 h-full mt-2">
                            {simulatedPaymentsConsolidated.map((card, index) => (
                                <div className="flex flex-col relative justify-between border-2 border-[#41C7B5]/30 rounded-2xl p-8 min-h-full shadow-lg hover:shadow-xl hover:transition-all hover:duration-300" key={index}>
                                    <span className={`${index === 0 ? "absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#41C7B5] text-white rounded-xl px-2 py-1 text-sm font-semibold" : "hidden"}`}>Mejor opción</span>                                    
                                    <div className="flex flex-col items-center">
                                        {card.name === 'bank' 
                                        ? (selectedBank 
                                            ? <Image 
                                                src={bankData.find(bank => bank.name === selectedBank)?.icon || '/assets/changeDebt/bankList/banamex.png'}
                                                width={32} 
                                                height={32} 
                                                alt={selectedBank || 'Banamex'} 
                                                />
                                            : <CiCreditCard1 className="text-default-600 w-8 h-8"/>
                                        ) :
                                            <Image
                                                src={'/favicon_color.avif'}
                                                alt="Finaura logo"
                                                width={36}
                                                height={36}
                                            />
                                        }
                                        <span className="text-lg lg:text-2xl tracking-wide font-medium text-default-700">{card.name === 'bank' ? (selectedBank ? selectedBank : 'Tu Banco') : 'Finaura'}</span>
                                    </div>
                                    <div className="flex flex-col text-center gap-1 items-center justify-center">
                                        <span className="text-sm tracking-wide text_purple font-medium">Tasa</span>
                                        <span className={`text-lg lg:text-2xl tracking-wide font-semibold text-default-700`}>{card.rate}%</span>
                                    </div>
                                    <div className="flex flex-col text-center items-center justify-center">
                                        <span className="text-sm tracking-wide text_purple font-medium">Intereses</span>
                                        <span className="text-center text-lg md:text-xl lg:text-2xl font-medium text-default-700 tracking-wider">
                                            <RollingMonthlyPayment value={parseFloat(card.totalInterest).toLocaleString('es-MX', { style: 'currency', currency: 'MXN' })} />
                                        </span>
                                    </div>
                                    <div className="flex flex-col text-center items-center justify-center ">
                                        <span className="text-sm tracking-wide text_purple font-medium">Pago Mensual:</span>
                                        <span className="text-center text-lg md:text-xl lg:text-2xl text_teal font-medium tracking-wider">
                                            <RollingMonthlyPayment value={parseFloat(card.monthlyPayment).toLocaleString('es-MX', { style: 'currency', currency: 'MXN' })} />
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        
                        <div className="flex flex-col gap-1 text-center w-full mt-3 md:mt-0">
                            <span className="text-md lg:text-lg tracking-wide text_purple font-normal">Pago mensual</span>
                            <span className="text-xl md:text-2xl text-center tracking-wide text_teal font-semibold">
                                <RollingMonthlyPayment value={simulatedPaymentsConsolidated[0]?.monthlyPayment ? parseFloat(simulatedPaymentsConsolidated[0].monthlyPayment).toLocaleString('es-MX', { style: 'currency', currency: 'MXN' }) : "$0.00"} />
                            </span>
                        </div>

                        <Link href="/contact" className="button_teal mx-auto py-2 px-6 rounded-2xl text-white font-medium">
                            Solicitar mi préstamo
                        </Link>
                    </div>
                </div>
                <p className="text-xs md:text-sm text-start text-default-700 mt-4">
                    Tasa de interés anual y fija de 8.9% a 38.9% sin IVA, sujeta a evaluación y calificación de nuestra área de crédito. Ejemplo representativo: monto de crédito por $425,000.00, con tasa anual de 18.48% y a un plazo de 36 meses. Monto total a pagar: $590,629.55 sin IVA. Sujeto a aprobación de préstamo. CAT PROMEDIO: 26.05% sin IVA. Fecha de cálculo 15 de diciembre 2025. Calculado para fines informativos y de comparación exclusivamente.
                </p>
            </div>
        </section>
    )
}