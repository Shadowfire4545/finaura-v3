import Image from "next/image";

export default function HomeBanner () {
    return (
        <section
            id="banner-home-page"
            className=" min-h-150 w-full flex items-center justify-center 
                        shadow-2xl 
                        bg-linear-to-br from-[#6A4BE0] to-[#71D4C4] text-white"
        >
            <div className="flex w-full min-h-150 justify-between">
                <div className="absolute lg:relative flex flex-col gap-4 items-center justify-center w-full lg:w-1/2 lg:px-12">
                    <h2 className="text-3xl lg:text-6xl font-bold tracking-wider leading-18 text-center w-3/4">
                        Obtén un préstamo exclusivo por ser cliente de<span className="text-[#41C7B5]"> BLISS</span>
                    </h2>
                    <p className="text-2xl italic w-1/2 text-center text-default-200">Premiamos tus pagos puntuales con un préstamo a tu medida</p>
                </div>
                <div className="h-150 flex w-full lg:w-1/2 items-end justify-end">
                    <div className="relative h-110 w-full bottom-0">
                        <Image
                            src={'/assets/home/banner.png'}
                            alt="Banner Image"
                            className="object-contain"
                            fill
                            priority
                        />
                        <div className="flex lg:hidden bg-black/80"/>
                    </div>
                </div>
            </div>
        </section>
    )
}