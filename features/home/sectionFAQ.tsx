"use client";
import { Accordion, AccordionItem } from "@heroui/react";
import { FAQData } from "@/data/FAQData";

export default function HomeFAQ() {
    return (
        <section
            id="home-faq"
            className="section-container w-full"
        >
            <div className="w-full max-w-300 flex flex-col lg:flex-row items-start justify-start gap-8">
                <h2 className="text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl font-medium tracking-widest text-start text_purple">
                    Preguntas frecuentes sobre préstamos Finaura
                </h2>
                <Accordion 
                    defaultExpandedKeys={["0"]}
                    motionProps={{
                        variants: {
                        enter: {
                            y: 0,
                            opacity: 1,
                            height: "auto",
                            overflowY: "unset",
                            transition: {
                            height: {
                                type: "spring",
                                stiffness: 500,
                                damping: 30,
                                duration: 1,
                            },
                            opacity: {
                                ease: "easeInOut",
                                duration: 1,
                            },
                            },
                        },
                        exit: {
                            y: -10,
                            opacity: 0,
                            height: 0,
                            overflowY: "hidden",
                            transition: {
                            height: {
                                ease: "easeInOut",
                                duration: 0.25,
                            },
                            opacity: {
                                ease: "easeInOut",
                                duration: 0.3,
                            },
                            },
                        },
                        },
                    }}
                >
                    {FAQData.map((faq, index) => (
                    <AccordionItem 
                        key={index} 
                        aria-label={faq.question} 
                        title={faq.question} 
                        classNames={{
                            title: "text-lg lg:text-xl font-medium text_purple tracking-wide",
                            content: "tracking-wider text-gray-700 text-justify",                            
                        }}
                    >
                        {faq.answer}
                    </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    )
}