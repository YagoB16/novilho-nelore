import React from "react";
import { MapPin, Clock, Phone } from "lucide-react";

interface SectionProps {
    id: string;
}

const stores = [
    {
        id: 1,
        name: "Matriz - Vila Prudente",
        address: "Rua Ibitirama, 124/132 - São Paulo, SP",
        hours: "Seg a Sáb: 7h30 às 19h30 | Dom: 7h00 às 14h",
        phone: "(11) 96625-0656",
        mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.7865103447937!2d-46.591244!3d-23.576081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5c088f170b09%3A0x2a149b29e011d615!2sR.%20Ibitirama%2C%20124%20-%20Vila%20Prudente%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2003133-100!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr",
    },
    {
        id: 2,
        name: "Empório de Carnes Novilho Nelore",
        address: "Rua ibitirama, 1151 - Vila Prudente, SP",
        hours: "Seg a Sáb: 7h30 às 19h30 | Dom: 7h00 às 14h",
        phone: "(11) 96625-0656",
        mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7312.762674849934!2d-46.58632661802068!3d-23.59065302406467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5c6dca5a2415%3A0x79407fac0749cefd!2sR.%20Ibitirama%2C%201151%20-%20Vila%20Prudente%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2003133-200!5e0!3m2!1spt-BR!2sbr!4v1790717634684!5m2!1spt-BR!2sbr",
    }
];

export default function Lojas({ id }: SectionProps) {
    return (
        <section id={id} className="w-full bg-[var(--color-background)]  py-16 sm:py-24">
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

                <div className="mb-12 text-center">
                    <h4 className="mb-2 text-lg font-semibold uppercase tracking-wider !text-white">
                        Onde nos encontrar
                    </h4>
                    <h2 className="text-3xl font-bold !text-white md:text-5xl">
                        Nossas Unidades
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl !text-[var(--lightest-slate)]">
                        Escolha a loja mais próxima de ti. Oferecemos o mesmo padrão de excelência, limpeza e qualidade em todas as nossas unidades.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {stores.map((store) => (
                        <div key={store.id} className="flex h-full flex-col overflow-hidden rounded-2xl border border-gray-700 bg-black shadow-black">

                            <div className="h-48 w-full shrink-0 border-b border-[var(--color-accent)]">
                                <iframe
                                    src={store.mapSrc}
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen={false}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title={`Mapa da ${store.name}`}
                                ></iframe>
                            </div>

                            {/* O container pai (p-6) garante a margem interna */}
                            <div className="flex flex-1 flex-col p-6 sm:p-7">

                                {/* Textos utilizam flex-1 para empurrar o botão para o fundo caso as alturas sejam diferentes */}
                                <div className="flex-1 space-y-4">
                                    <h3 className="text-xl font-bold !text-[var(--color-text-secondary)]">
                                        {store.name}
                                    </h3>

                                    <div className="flex items-start gap-3 !text-[var(--lightest-slate)]">
                                        <MapPin className="mt-1 shrink-0 text-red-500" size={20} />
                                        <p className="text-sm leading-relaxed">{store.address}</p>
                                    </div>

                                    <div className="flex items-start gap-3 !text-[var(--lightest-slate)]">
                                        <Clock className="mt-1 shrink-0 text-[var(--color-text-secondary)]" size={20} />
                                        <p className="text-sm leading-relaxed">{store.hours}</p>
                                    </div>
                                </div>

                                {/* Botão livre de amarras (sem div wrapper e sem w-full). O flex-col do pai estica-o perfeitamente até ao limite do padding. */}
                                <a
                                    href={`https://wa.me/55${store.phone.replace(/\D/g, '')}`}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="mt-6 flex items-center justify-center gap-2 rounded-xl border border-[var(--green-wpp)] bg-[var(--green-wpp)]/20 px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-[var(--green-wpp)]"
                                >
                                    <Phone size={18} />
                                    Falar com esta loja
                                </a>

                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
