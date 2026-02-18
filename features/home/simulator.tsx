"use client";

import { NumberInput } from "@heroui/react";
import Link from "next/link";
import { useState } from "react";

export default function HomeSimulator() {

    const [amount, setAmount] = useState<number>(100000);
    const [period, setPeriod] = useState<number>(18);

    const cardsTemp = [
        {
            title: 'Tasa Preferente',
            rate: '12.5%',
            monthlyPayment: '$10,000.00',
        },
        {
            title: 'Tasa Plus',
            rate: '15.0%',
            monthlyPayment: '$12,500.00',
        },
        {
            title: 'Otros Bancos',
            rate: '17.5%',
            monthlyPayment: '$15,000.00',
        }
    ]

    return (
        <section
            id="simulator"
            className="section-container min-h-full w-full items-center justify-center text-center flex flex-col"
        >
            <div className="flex flex-col lg:flex-row w-full max-w-300 gap-8 p-6 rounded-2xl shadow-md bg-linear-to-br from-[#41C7B5]/40 to-[#41C7B5]/20 shadow-[#71BC51]/20">
                {/* Datos del simulador */}
                <div className="flex flex-col items-start gap-4 w-full lg:w-1/3 py-4">
                    <span className="text-2xl text-[#41C7B5] font-semibold tracking-wide text-start">Simula tu crédito en segundos</span>
                    <span className="text-sm tracking-wide font-medium">Ajusta monto y plazo</span>

                    <NumberInput
                        isRequired
                        defaultValue={100000}
                        minValue={100000}
                        maxValue={10000000000}
                        variant="bordered"                            
                        value={amount}
                        onValueChange={(val) => {
                            setAmount(val);
                        }}
                        label="Cantidad"
                        labelPlacement="outside-top"
                        color="secondary"
                        startContent={<span className="text-default-600 text-sm">$</span>}
                        endContent={<span className="text-default-600 text-xs">MXN</span>}
                        description="* El monto mínimo de inversión es de $100,000"
                        errorMessage="* El monto mínimo de inversión es de $100,000"
                        hideStepper
                        classNames={{
                            label: "text-start text-secondary text-xs 2xl:text-sm font-semibold",
                            input: "text-[#1b3439] font-semibold text-sm text-[15px]",
                            description: "text-start text-secondary font-semibold text-xs 2xl:text-sm",
                            errorMessage: "text-start text-secondary font-semibold text-xs 2xl:text-sm",
                            inputWrapper: "bg-transparent hover:bg-transparent data-[disabled]:bg-success-600 border-secondary data-[disabled]:border-success-800! hover:border-secondary",                                
                        }}
                    />

                    <div className="flex flex-col gap-1 w-full">
                        <span className="text-sm tracking-wide font-medium text-start text-secondary">Plazo (meses)*</span>
                        <div className="flex justify-between w-full rounded-2xl border-2 border-secondary font-medium">
                            <button onClick={() => setPeriod(6)} className={`w-full rounded-l-xl py-2 ${period === 6 ? "bg-[#7B5CF1]/60 text-white" : ""} transition-colors duration-300`}>6</button>
                            <button onClick={() => setPeriod(12)} className={`w-full py-2 ${period === 12 ? "bg-[#7B5CF1]/60 text-white" : ""} transition-colors duration-300 border-l-2 border-secondary`}>12</button>
                            <button onClick={() => setPeriod(18)} className={`w-full py-2 ${period === 18 ? "bg-[#7B5CF1]/60 text-white" : ""} transition-colors duration-300 border-l-2 border-secondary`}>18</button>
                            <button onClick={() => setPeriod(24)} className={`w-full py-2 ${period === 24 ? "bg-[#7B5CF1]/60 text-white" : ""} transition-colors duration-300 border-l-2 border-secondary`}>24</button>
                            <button onClick={() => setPeriod(30)} className={`w-full py-2 ${period === 30 ? "bg-[#7B5CF1]/60 text-white" : ""} transition-colors duration-300 border-l-2 border-secondary`}>30</button>
                            <button onClick={() => setPeriod(36)} className={`w-full rounded-r-xl py-2 ${period === 36 ? "bg-[#7B5CF1]/60 text-white" : ""} transition-colors duration-300 border-l-2 border-secondary`}>36</button>
                        </div>
                    </div>

                    <Link href="/contact" className="button_teal w-full p-2 rounded-2xl text-white font-medium mt-4">
                        Simular ahora
                    </Link>
                </div>
                
                <hr className="flex lg:hidden my-1 w-full border-0 h-px bg-secondary" />
                <div className="hidden lg:block mx-1 w-0.5 self-stretch bg-secondary" />

                {/* Tabla de resultados */}
                <div className="flex flex-col w-full lg:w-2/3 rounded-4xl items-start gap-3 justify-between py-4">
                
                    <div className="flex flex-col lg:flex-row w-full items-center gap-3">
                        <div className="flex flex-col items-center lg:items-start gap-1 lg:order-1 order-2">
                            <span className="text-lg tracking-wide text-secondary font-normal">Pago mensual</span>
                            <span className="text-xl tracking-wide text-secondary font-bold">$10,000,000.00</span>
                        </div>
                        <span className="order-1 lg:order-2 text-xl text-[#41C7B5] font-semibold tracking-wide text-center w-full">¡Compara las tasas y los pagos mensuales!</span>
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-3 w-full lg:gap-4">
                        {cardsTemp.map((card, index) => (
                            <div 
                                key={index} 
                                className={`flex flex-col gap-1 bg-white/90 rounded-2xl p-4 mt-4 items-center lg:items-start shadow-sm 
                                            relative hover:-translate-y-1 hover:shadow-md transition-all duration-500
                                            ${index === 0 ? "border border-[#41C7B5]" : ""}`}
                            >
                                <span className={`${index === 0 ? "absolute -top-3 bg-[#41C7B5] text-white rounded-xl px-2 py-1 text-sm font-semibold" : "hidden"}`}>Mejor opción</span>
                                <span className="text-lg tracking-wide font-medium text-default-700">{card.title}</span>
                                <span className={`text-3xl tracking-wide font-semibold ${index === 0 ? 'text-secondary' : index === 1 ? 'text-default-700' : 'text-danger'}`}>{card.rate}</span>
                                <span className="text-lg tracking-wide font-medium text-default-700">{card.monthlyPayment}<span className="text-sm"> / mes</span></span>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col lg:flex-row w-full gap-6 mt-2">
                        <div className="flex flex-col w-full lg:w-1/3 items-start">
                            <span className="mb-2 font-medium text-md text-secondary">Monto total a pagar:</span>
                            {cardsTemp.map((card, index) => (
                                <div key={index} className="flex w-full justify-between">
                                    <span className="font-sans text-sm font-medium tracking-wide">{card.title}:</span>
                                    <span className={`text-base tracking-wide ${index === 0 ? 'text-secondary' : index === 1 ? 'text-default-700' : 'text-danger'} font-semibold`}>
                                        {(parseFloat(card.monthlyPayment.replace(/[$,]/g, '')) * period).toLocaleString('es-MX', { style: 'currency', currency: 'MXN' })}
                                    </span>
                                </div>
                            ))}
                        </div>
                        {/* Gráfica */}
                        <div className="flex w-full lg:w-2/3 flex-col gap-2 ">
                            <div className="flex items-end gap-4 h-32 w-full">
                                {cardsTemp.map((card, index) => {
                                    const totalAmount = parseFloat(card.monthlyPayment.replace(/[$,]/g, '')) * period;
                                    const maxAmount = Math.max(...cardsTemp.map(c => parseFloat(c.monthlyPayment.replace(/[$,]/g, '')) * period));
                                    const heightPixels = (totalAmount / maxAmount) * 80; // 140px es la altura máxima (h-40 menos espacio para labels)
                                    
                                    return (
                                        <div key={index} className="flex flex-col items-center gap-2 flex-1 h-full justify-end">
                                            <span className="text-sm font-bold text-default-600">
                                                {(totalAmount / 1000).toFixed(0)}k
                                            </span>
                                            <div 
                                                className={`w-full rounded-t-xl transition-all duration-700 ${
                                                    index === 0 ? 'bg-secondary' : 
                                                    index === 1 ? 'bg-default-400' : 
                                                    'bg-danger'
                                                }`}
                                                style={{ height: `${heightPixels}px`, minHeight: '20px' }}
                                            />
                                            <span className="text-xs font-semibold text-default-600 text-center">
                                                {card.title.includes('Preferente') ? 'Preferente' : card.title.includes('Plus') ? 'Plus' : 'Bancos'}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}