"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import logo from "@/public/logo.svg"
const NAV_LINKS = [
    { label: "Início", href: "#home" },
    { label: "Sobre Nós", href: "#about" },
    { label: "Nossas Lojas", href: "#lojas" },
    { label: "Dúvidas", href: "#services" },
    { label: "Contato", href: "#footer" },
];

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeLink, setActiveLink] = useState("#home");

    const handleLinkClick = (href: string) => {
        setActiveLink(href);
        setIsOpen(false);
    };

    return (
        <header className="sticky top-0 z-50 w-full border-b border-red-950 bg-[#000] shadow-lg">
            <nav className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Logo / Nome do Açougue */}
                <Link
                    href="#home"
                    onClick={() => handleLinkClick("#home")}
                    className="flex items-center gap-3 text-xl font-extrabold tracking-tight text-white sm:text-2xl hover:opacity-90 transition-opacity"
                >
                    <Image
                        src={logo}
                        alt="Logo Novilho Nelore"
                        width={60}
                        height={60}
                        className="h-10 w-auto sm:h-12" /* h-10 no mobile (40px), h-12 no desktop (48px) */
                        priority
                    />
                    <span>Novilho Nelore</span>
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden md:flex md:items-center md:gap-2 lg:gap-6">
                    {NAV_LINKS.map((link) => {
                        const isActive = activeLink === link.href;
                        return (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    onClick={() => handleLinkClick(link.href)}
                                    className={`px-5 py-2.5 rounded-xl text-base font-bold transition-all duration-300 ${isActive
                                        ? "bg-[#d4af37] text-[#6a040f]"
                                        : "text-white hover:bg-white/10"
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        );
                    })}
                </ul>

                {/* Mobile Menu Button */}
                <button
                    type="button"
                    onClick={() => setIsOpen((prev) => !prev)}
                    aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
                    aria-expanded={isOpen}
                    className="flex min-h-[48px] min-w-[48px] items-center justify-center rounded-md text-white transition-colors hover:bg-white/10 md:hidden"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </nav>

            {/* Mobile Menu */}
            <div
                className={`overflow-hidden transition-[max-height] duration-300 ease-in-out md:hidden bg-[var(--color-background)] ${isOpen ? "max-h-[400px]" : "max-h-0"
                    }`}
            >
                <ul className="flex flex-col gap-2 px-4 pb-6 pt-4 sm:px-6">
                    {NAV_LINKS.map((link) => {
                        const isActive = activeLink === link.href;
                        return (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    onClick={() => handleLinkClick(link.href)}
                                    className={`flex min-h-[48px] items-center rounded-lg px-4 text-base font-bold transition-colors ${isActive
                                        ? "bg-[#d4af37] text-[#6a040f]"
                                        : "text-white hover:bg-white/10"
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </header>
    );
}
