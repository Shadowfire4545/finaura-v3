"use client"

import { useDisclosure } from "@heroui/react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import { NavbarLinks } from "@/config/navbarLinks";

export default function Navbar() {
    const pathname = usePathname();
    const isHomePage = pathname === "/";
    const [isScrolled, setIsScrolled] = useState(false);
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    useEffect(() => {
        const threshold = 90;
        const onScroll = () => setIsScrolled(window.scrollY > threshold);

        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const shouldBeScrolled = isHomePage ? isScrolled : true;
  
    return (
        <header
            className="relative z-999 w-full transition-all duration-300 h-auto flex items-center justify-center"
        >
            <nav className={clsx(
                    'top-0 flex items-center justify-between h-14 lg:h-18 py-2 px-6 max-w-sm lg:max-w-300 w-full transition-all duration-300',
                    shouldBeScrolled
                    ? "fixed text-gray-900 shadow-md mt-3 bg-linear-to-br from-[#21d6c7]/90 via-20% to-[#7358e0]/90 rounded-full"
                    : "absolute bg-transparent text-white border-b border-transparent"
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
                    <Link href={'/contact'} className={`button_teal px-4 py-2 rounded-2xl tracking-wider font-sans font-medium text-white`}>
                        Registrate
                    </Link>
                </div>
            </nav>
        </header>
    )
}