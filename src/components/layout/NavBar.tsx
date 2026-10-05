"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import logo from "@/public/logo.svg";

const NAV_LINKS = [
    { label: "Sobre Nós", href: "#hero" },
    { label: "Nossas Lojas", href: "#locations" },
    { label: "Dúvidas", href: "#faq" },
    { label: "Contato", href: "#footer" },
];

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeLink, setActiveLink] = useState("#hero"); // Inicia corretamente com a primeira secção

    // O "Espião de Scroll" (Scroll Spy)
    useEffect(() => {
        const handleScroll = () => {
            // A posição atual do scroll + 100px para compensar a altura do NavBar fixo
            const scrollPosition = window.scrollY + 100;

            let currentActive = activeLink;

            NAV_LINKS.forEach((link) => {
                const sectionId = link.href.substring(1); // Remove o '#' para buscar o ID (ex: "hero")
                const section = document.getElementById(sectionId);

                if (section) {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.offsetHeight;

                    // Se a tela estiver dentro dos limites desta secção, ela torna-se a ativa
                    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                        currentActive = link.href;
                    }
                }
            });

            if (currentActive !== activeLink) {
                setActiveLink(currentActive);
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Corre a verificação uma vez ao carregar a página (útil se o cliente atualizar a página a meio do site)
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, [activeLink]);

    const handleLinkClick = (href: string) => {
        setActiveLink(href);
        setIsOpen(false);
    };

    return (
        <header className="fixed top-0 left-0 z-50 w-full border-b border-red-950 bg-[#000] shadow-lg">
            <nav className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

                {/* Logo / Nome do Açougue */}
                <Link
                    href="#hero"
                    onClick={() => handleLinkClick("#hero")}
                    className="flex items-center gap-3 text-xl font-extrabold tracking-tight text-white sm:text-2xl hover:opacity-90 transition-opacity"
                >
                    <Image
                        src={logo}
                        alt="Logo Novilho Nelore"
                        width={60}
                        height={60}
                        className="h-10 w-auto sm:h-12"
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
