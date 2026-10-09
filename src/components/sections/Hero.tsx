"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Importe as suas imagens aqui
import fachada from "@/src/app/assets/image/fachada_nn.jpg";
import picanha from "@/src/app/assets/image/picanha-imagem.webp";
import pecasPicanha from "@/src/app/assets/image/pecas-picanha.jpg"
import chorizo from "@/src/app/assets/image/chorizo.jpg"

const carouselImages = [
    picanha,
    pecasPicanha,
    chorizo,
    fachada,
];

export default function Hero() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
        );
    };

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
        );
    };

    // Efeito para trocar a imagem automaticamente
    useEffect(() => {
        if (carouselImages.length <= 1) return;

        const timer = setInterval(() => {
            nextImage();
        }, 4000);

        return () => clearInterval(timer);
    }, [currentImageIndex]);

    return (
        <section id="home" className="w-full overflow-x-hidden bg-[var(--color-background-light)] px-4 py-12 sm:px-4 sm:py-20 lg:px-8">
            <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-12 md:flex-row md:items-center lg:gap-16">

                {/* Coluna da Esquerda: Textos e Botão */}
                <div className="flex w-full flex-col items-center text-center md:w-1/2 md:items-start md:text-left ">
                    <h1 className="text-4xl font-extrabold leading-tight !text-[var(--color-text-primary-red)] sm:text-5xl md:text-6xl">
                        O autêntico sabor que a sua família merece.
                    </h1>

                    <p className="mt-6 max-w-xl text-base text-gray-800 sm:text-lg leading-relaxed">
                        Muito mais que um açougue, somos especialistas em carnes. Com procedência garantida, ambiente impecável e um atendimento de excelência, preparamos o seu corte exatamente como você gosta — seja para o almoço do dia a dia ou para o churrasco perfeito.
                    </p>

                    <div className="mt-10 flex w-full flex-col gap-4 sm:w-auto sm:flex-row sm:gap-5">
                        <a
                            href="https://wa.me/5511971303732?text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20um%20pedido!"
                            target="_blank"
                            rel="noreferrer"
                            className="flex min-h-[56px] w-full items-center justify-center rounded-full bg-[#6a040f] px-8 text-base font-bold text-white transition-all hover:bg-[#57030c] hover:-translate-y-1 sm:w-auto shadow-black"
                        >
                            Entrar em contato
                        </a>
                    </div>
                </div>

                {/* Coluna da Direita: Carrossel */}
                <div className="w-full md:w-1/2">
                    {/* O group ajuda a mostrar as setas apenas quando passa o mouse (opcional) */}
                    <div className="group relative aspect-square w-full overflow-hidden rounded-3xl sm:aspect-[4/3] md:aspect-square shadow-black border-4 border-[#6a040f]/70 bg-black">

                        {/* Imagens */}
                        {carouselImages.map((img, index) => (
                            <Image
                                key={index}
                                src={img}
                                alt={`Apresentação Novilho Nelore ${index + 1}`}
                                fill
                                priority={index === 0}
                                className={`object-cover transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? "opacity-100" : "opacity-0"
                                    }`}
                                sizes="(min-width: 768px) 50vw, 100vw"
                            />
                        ))}

                        {/* Só renderiza se houver mais do que 1 imagem */}
                        {carouselImages.length > 1 && (
                            <>
                                {/* Seta Esquerda */}
                                <button
                                    onClick={prevImage}
                                    className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition-all hover:bg-[#6a040f] hover:scale-110"
                                    aria-label="Imagem anterior"
                                >
                                    <ChevronLeft size={24} />
                                </button>

                                {/* Seta Direita */}
                                <button
                                    onClick={nextImage}
                                    className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition-all hover:bg-[#6a040f] hover:scale-110"
                                    aria-label="Próxima imagem"
                                >
                                    <ChevronRight size={24} />
                                </button>

                                {/* Bolinhas indicadoras */}
                                <div className="absolute bottom-4 left-0 right-0 z-10 flex justify-center gap-2">
                                    {carouselImages.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentImageIndex(index)}
                                            className={`h-2.5 rounded-full transition-all duration-300 ${index === currentImageIndex
                                                ? "w-8 bg-[#d4af37]"
                                                : "w-2.5 bg-white/60 hover:bg-white"
                                                }`}
                                            aria-label={`Ir para imagem ${index + 1}`}
                                        />
                                    ))}
                                </div>
                            </>
                        )}
                    </div>
                </div>

            </div>
        </section>
    );
}
