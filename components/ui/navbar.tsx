
import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import { NavbarLinks } from "@/config/navbarLinks";

export default function Navbar() {

    return (
        <header
            className="relative z-999 w-full transition-all duration-300 h-auto flex items-center justify-center"
        >
            <nav className={clsx(`
                    top-0 flex items-center justify-between h-14 lg:h-18 py-2 px-6 
                    max-w-sm lg:max-w-300 w-full transition-all duration-300 
                    fixed text-gray-900 shadow-md mt-3 rounded-full
                    bg-linear-to-br from-[#332475]/90 via-20% to-[#332475] `,
                )}
            >
                <Link href="/" className={`flex gap-2 shrink-0 w-auto`}>
                    <Image
                        src={"/favicon_white.avif"}
                        alt="Logo"
                        width={40}
                        height={24}
                        priority
                    />
                    <Image
                        src={'/finaura_white.avif'}
                        alt="Finaura Logo"
                        width={80}
                        height={24}
                        priority
                        className="py-2"
                    />
                </Link>

                {/* LINKS */}
                <div className="hidden lg:flex gap-4">
                    {NavbarLinks.map((link, index) => (
                        <Link key={index} href={link.href} className={clsx(
                            "font-semibold tracking-wide text-white hover:text-white/80"
                        )}>
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* BUTTONS */}
                <div className="hidden lg:flex">
                    <Link href={'/contact'} className={`bg-linear-to-tr from-[#7760eb] to-[#4fc5b7] px-4 py-2 rounded-2xl tracking-wider font-sans font-medium text-white`}>
                        Registrate
                    </Link>
                </div>
            </nav>
        </header>
    )
}