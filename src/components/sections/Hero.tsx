import Image from "next/image";

import fachada from "@/public/fachada_nn.jpg"
export default function Hero() {
    return (
        <section id="home" className="w-full overflow-x-hidden bg-[var(--color-background-light)] px-4 py-12 sm:px-4 sm:py-20 lg:px-8">
            <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-12 md:flex-row md:items-center lg:gap-16">

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

                <div className="w-full md:w-1/2">
                    <div className="relative aspect-square w-full overflow-hidden rounded-3xl sm:aspect-[4/3] md:aspect-square shadow-black border-4 border-[#6a040f]/70">
                        <Image
                            src={fachada}
                            alt="Balcão de carnes premium do Novilho Nelore"
                            fill
                            priority
                            className="object-cover transition-transform duration-700 hover:scale-105"
                            sizes="(min-width: 768px) 50vw, 100vw"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}
