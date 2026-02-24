"use client";

import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import { NavbarLinks } from "@/config/navbarLinks";
import { HiMenu, HiMenuAlt3 } from "react-icons/hi";
import React from "react";

export default function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const menuRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsMenuOpen(false);
            }
        };

        if (isMenuOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isMenuOpen]);

    return (
        <header
            className="relative z-999 w-full transition-all duration-300 h-auto flex items-center justify-center px-4 sm:px-6 lg:px-0"
        >
            <nav className={clsx(`
                    top-0 left-1/2 -translate-x-1/2 flex items-center justify-between h-14 lg:h-18 py-2 px-6
                    w-[calc(100%-2rem)] sm:w-[calc(100%-3rem)] lg:max-w-350 transition-all duration-300
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
                <div className="hidden lg:flex gap-8">
                    {NavbarLinks.map((link, index) => (
                        <Link key={index} href={link.href} className={clsx(
                            "font-normal tracking-wide text-white hover:text-white/80"
                        )}>
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* BUTTONS */}
                <div className="hidden lg:flex">
                    <Link 
                        href={'/contact'} 
                        className={`
                            bg-[#7c6ddf] 
                            hover:bg-[#7c6ddf]/80 hover:transition-colors hover:duration-400
                            px-4 py-2 rounded-full tracking-wider 
                            font-sans font-medium text-white`}
                    >
                        Registrate
                    </Link>
                </div>

                {/* Button Navbar Movile */}
                <div className="lg:hidden">
                    <HiMenu size={28} className={`text-white ${isMenuOpen ? 'hidden' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)} />
                    <HiMenuAlt3 size={28} className={`text-white ${isMenuOpen ? '' : 'hidden'}`} onClick={() => setIsMenuOpen(!isMenuOpen)} />
                </div>

                <div ref={menuRef} className={clsx(`
                    fixed top-full left-1/2 -translate-x-1/2 w-full mt-1 
                    flex justify-center items-center transition-all duration-300`,
                    isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
                )}>
                    <div className="
                        bg-[#332475]/95 rounded-2xl py-8 px-6
                        justify-center w-[calc(100%-1rem)]
                        flex flex-col items-center gap-6 transition-all duration-300
                    ">
                        {NavbarLinks.map((link, index) => (
                            <Link key={index} href={link.href} className={clsx(
                                "font-normal tracking-wider text-white hover:text-white/80 text-base"
                            )}>
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href={'/contact'}
                            className={`
                                bg-[#7c6ddf] 
                                hover:bg-[#7c6ddf]/80 hover:transition-colors hover:duration-400
                                w-full text-center py-2 rounded-full tracking-wider
                                font-sans font-medium text-white text-sm`}
                        >
                            Registrate
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}