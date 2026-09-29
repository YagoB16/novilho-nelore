"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface SectionProps {
    id: string;
}

// Adaptado da imagem para o contexto do Novilho Nelore
const faqData = [
    {
        question: "Quais formas de pagamento vocês aceitam?",
        answer: "Aceitamos todos os cartões de crédito e débito, além dos principais cartões de refeição e alimentação do mercado.",
    },
    {
        question: "Vocês fazem entrega / delivery?",
        answer: "Sim! Trabalhamos com delivery rápido para a nossa região. Basta enviar uma mensagem no nosso WhatsApp com o seu pedido e endereço para consultarmos a taxa de entrega.",
    },
    {
        question: "Vocês fazem cortes personalizados / sob medida?",
        answer: "Com certeza. Nossos açougueiros são especializados e podem preparar a carne exatamente do jeito que você precisa: em bifes, cubos, moída na hora ou peças com limpezas específicas.",
    },
    {
        question: "Aceitam encomenda para churrasco, festas ou grandes quantidades?",
        answer: "Sim, aceitamos encomendas para eventos de todos os tamanhos. Inclusive, podemos ajudar você a calcular a quantidade ideal de carne por pessoa para o seu churrasco não faltar nada!",
    },
    {
        question: "As carnes são de produção própria?",
        answer: "Trabalhamos em parceria com os melhores frigoríficos e fornecedores selecionados do mercado, garantindo cortes padronizados, com extrema maciez e sabor premium (padrão Nelore).",
    },
    {
        question: "Quero trabalhar no Novilho Nelore. Como faço?",
        answer: "Estamos sempre em busca de bons profissionais! Você pode entregar seu currículo impresso diretamente no balcão da nossa loja na Rua Ibitirama, 124.",
    },
    {
        question: "Sou fornecedor/vendedor. Como ofereço meus produtos ou serviços?",
        answer: "Por favor, entre em contato através do nosso WhatsApp comercial e selecione a opção de fornecedores, ou visite nossa loja em horário comercial para falar com a gerência.",
    }
];

export default function Service({ id }: SectionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id={id} className="w-full bg-[var(--color-background-light)] py-16 sm:py-24">
            <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-12">
                    <h4 className="mb-2 text-lg font-semibold uppercase tracking-wider !text-[var(--color-text-secondary)]">
                        Tire suas dúvidas
                    </h4>
                    <h2 className="text-3xl md:text-5xl font-bold text-[var(--lightest-slate)]">
                        Perguntas Frequentes
                    </h2>
                </div>

                <div className="flex flex-col gap-4">
                    {faqData.map((faq, index) => (
                        <div
                            key={index}
                            className="overflow-hidden rounded-xl border border-gray-700 bg-[var(--color-background)] transition-all duration-300 shadow-black"
                        >
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="flex w-full items-center justify-between p-5 text-left transition-colors hover:bg-[var(--lightest-navy)] focus:outline-none"
                                aria-expanded={openIndex === index}
                            >
                                <span className="font-semibold !text-[var(--lightest-slate)] md:text-lg">
                                    {faq.question}
                                </span>
                                <span className="ml-4 flex-shrink-0 text-[var(--lightest-slate)]">
                                    {openIndex === index ? (
                                        <ChevronUp size={24} />
                                    ) : (
                                        <ChevronDown size={24} />
                                    )}
                                </span>
                            </button>

                            <div
                                className={`transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                                    }`}
                            >
                                <div className="border-t border-gray-700 p-5 !text-[var(--lightest-slate)]/90 leading-relaxed">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <p className="text-[var(--slate)] mb-4">
                        Ainda tem dúvidas? Fale com a gente diretamente!
                    </p>
                    <a
                        href="https://wa.me/5511966250656"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center rounded-full bg-[var(--green-wpp)] px-8 py-3 text-base font-bold text-white transition-all hover:bg-red-700 hover:-translate-y-1 shadow-black"
                    >
                        Chamar no WhatsApp
                    </a>
                </div>

            </div>
        </section>
    );
}
