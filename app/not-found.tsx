import Image from "next/image"
import Link from "next/link"

export default function NotFoundPage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center gap-2">
            <div className="flex flex-col md:flex-row gap-3 md:gap-8 items-center justify-center text-center">
                <h1 
                    className="
                        text-8xl md:text-9xl lg:text-[9rem] 2xl:text-[12rem] 
                        tracking-wider font-medium mb-6 2xl:mb-12
                        bg-[linear-gradient(110deg,#6A4BE0_0%,#7B5CF1_36%,#41C7B5_100%)] bg-clip-text text-transparent"
                >
                    404
                </h1>
                <div className="relative h-40 md:h-50 w-40 md:w-50">
                    <Image
                        src="/error404.avif"
                        alt="404 Not Found"
                        fill
                        className="object-contain"
                    />
                </div>
            </div>
            <span className="text-lg md:text-2xl lg:text-3xl font-medium tracking-wide text_purple">Página no encontrada</span>
            <p className="text-base md:text-lg text_light_purple">Lo sentimos, la página que buscas no existe.</p>
            <div className="flex justify-between gap-4 mt-4">
                <Link href="/" className="rounded-full text-white bg-[#7B5CF1]/60 px-6 py-1.5 tracking-wide hover:bg-[#7B5CF1]/80 hover:transition-transform-colors hover:duration-300">Volver al inicio</Link>
                <Link href="/contact" className="rounded-full px-6 py-1.5 border-1 border-[#7B5CF1] text_purple tracking-wider hover:bg-[#7B5CF1]/20 hover:transition-transform-colors hover:duration-300">Contáctanos</Link>
            </div>
        </div>
    )
}