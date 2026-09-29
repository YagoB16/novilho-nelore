import React from "react";
import Image from "next/image";
import { MessageCircle } from "lucide-react";

interface SectionProps {
    id: string;
}

const products = [
    {
        id: 1,
        name: "Carnes de Bovino",
        badge: "Cortes Diários",
        description: "Alcatra, contra filé, patinho, acém e muito mais. Carnes sempre frescas e preparadas na hora para as suas refeições diárias.",
        image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?auto=format&fit=crop&w=800&q=80",
    },
    {
        id: 2,
        name: "Cortes de Frango",
        badge: "Aves",
        description: "Peito, coxa, sobrecoxa e asinhas. Opções limpas e com excelente procedência para garantir uma refeição saudável e saborosa.",
        image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80",
    },
    {
        id: 3,
        name: "Pertences para Feijoada",
        badge: "Tradição",
        description: "Tudo o que precisa para a feijoada perfeita: carnes salgadas, linguiças defumadas, bacon, carne seca e muito mais.",
        image: "https://images.unsplash.com/photo-1585238341267-1cb115e3c830?auto=format&fit=crop&w=800&q=80", // Imagem representativa de embutidos/salgados
    },
    {
        id: 4,
        name: "Carvão e Acendedores",
        badge: "Essencial",
        description: "Não deixe o fogo apagar. Dispomos de sacos de carvão de alta qualidade e acendedores práticos para facilitar o seu churrasco.",
        image: "https://images.unsplash.com/photo-1542314959-1e5ebffaf838?auto=format&fit=crop&w=800&q=80",
    },
    {
        id: 5,
        name: "Pão de Alho",
        badge: "Acompanhamento",
        description: "O clássico que não pode faltar em nenhuma grelha. Opções tradicionais, com queijo ou picantes para agradar a todos.",
        image: "https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?auto=format&fit=crop&w=800&q=80",
    },
    {
        id: 6,
        name: "Queijo Coalho",
        badge: "Entradas",
        description: "O clássico queijo para assar, perfeito para servir como entrada enquanto a carne principal atinge o ponto ideal.",
        image: "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?auto=format&fit=crop&w=800&q=80",
    }
];

export default function Work({ id }: SectionProps) {
    const telefone = "5511966250656";

    return (
        <section id={id} className="w-full bg-[var(--navy)] py-16 sm:py-24">
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

                <div className="mb-12 text-center sm:mb-16">
                    <h4 className="mb-2 text-lg font-semibold uppercase tracking-wider text-red-500">
                        A Nossa Montra
                    </h4>
                    <h2 className="text-3xl font-bold text-[var(--lightest-slate)] md:text-5xl">
                        Os Nossos Produtos
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-[var(--slate)]">
                        Tudo o que precisa para a sua rotina e para o fim de semana. Selecione os itens e faça a sua encomenda connosco.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="group flex flex-col overflow-hidden rounded-2xl border border-gray-700 bg-[var(--light-navy)] shadow-black transition-all duration-300 hover:-translate-y-2 hover:border-red-500/50"
                        >
                            <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-900">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                                />
                                <div className="absolute right-4 top-4 rounded-full bg-red-600 px-3 py-1 text-sm font-bold text-white shadow-lg">
                                    {product.badge}
                                </div>
                            </div>

                            <div className="flex flex-1 flex-col justify-between p-6">
                                <div>
                                    <h3 className="mb-2 text-xl font-bold text-[var(--lightest-slate)] transition-colors group-hover:text-red-400">
                                        {product.name}
                                    </h3>
                                    <p className="mb-6 text-sm leading-relaxed text-[var(--slate)]">
                                        {product.description}
                                    </p>
                                </div>

                                <a
                                    href={`https://wa.me/${telefone}?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20as%20op%C3%A7%C3%B5es%20de%20*${encodeURIComponent(product.name)}*.`}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex w-full items-center justify-center gap-2 rounded-xl border border-gray-600 bg-[var(--lightest-navy)] px-4 py-3 text-sm font-semibold text-white transition-all hover:border-green-600 hover:bg-green-600"
                                >
                                    <MessageCircle size={18} />
                                    Consultar Disponibilidade
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 flex justify-center">
                    <a
                        href={`https://wa.me/${telefone}?text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20uma%20encomenda%20geral.`}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center rounded-full border-2 border-red-600 px-8 py-4 text-base font-bold text-red-500 shadow-black transition-all hover:bg-red-600 hover:text-white"
                    >
                        Fazer Encomenda Completa
                    </a>
                </div>

            </div>
        </section>
    );
}
