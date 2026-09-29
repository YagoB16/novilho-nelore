"use client";

import React from "react";

interface SectionProps {
    id: string;
}

export default function Contact({ id }: SectionProps) {
    return (
        <section id={id} className="w-full bg-[#f8f9fa] py-16 sm:py-24">
            <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">

                {/* Cabeçalho */}
                <div className="mb-10 text-center">
                    <h2 className="text-4xl font-extrabold text-[#6a040f] md:text-5xl">
                        Fale Conosco
                    </h2>
                    <p className="mt-3 text-base text-gray-600 sm:text-lg">
                        Dúvidas, sugestões ou elogios? Estamos à disposição
                    </p>
                </div>

                {/* Cartão do Formulário */}
                <div className="rounded-2xl bg-white p-6 shadow-xl sm:p-10">
                    <form className="flex flex-col gap-6">

                        {/* Linha 1: Nome e Telefone */}
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="nome" className="text-sm font-bold text-[#6a040f]">
                                    Nome <span className="text-[#d4af37]">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="nome"
                                    placeholder="Seu nome completo"
                                    required
                                    className="rounded-lg border border-gray-300 bg-gray-50/50 p-3 text-gray-900 focus:border-[#6a040f] focus:outline-none focus:ring-1 focus:ring-[#6a040f]"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="telefone" className="text-sm font-bold text-[#6a040f]">
                                    Telefone <span className="text-[#d4af37]">*</span>
                                </label>
                                <input
                                    type="tel"
                                    id="telefone"
                                    placeholder="(11) 00000-0000"
                                    required
                                    className="rounded-lg border border-gray-300 bg-gray-50/50 p-3 text-gray-900 focus:border-[#6a040f] focus:outline-none focus:ring-1 focus:ring-[#6a040f]"
                                />
                            </div>
                        </div>

                        {/* Linha 2: E-mail */}
                        <div className="flex flex-col gap-2">
                            <label htmlFor="email" className="text-sm font-bold text-[#6a040f]">
                                E-mail <span className="text-[#d4af37]">*</span>
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="seu@email.com"
                                required
                                className="rounded-lg border border-gray-300 bg-gray-50/50 p-3 text-gray-900 focus:border-[#6a040f] focus:outline-none focus:ring-1 focus:ring-[#6a040f]"
                            />
                        </div>

                        {/* Linha 3: Tipo de Contato */}
                        <div className="flex flex-col gap-2">
                            <label htmlFor="tipoContato" className="text-sm font-bold text-[#6a040f]">
                                Tipo de Contato <span className="text-[#d4af37]">*</span>
                            </label>
                            <select
                                id="tipoContato"
                                required
                                className="rounded-lg border border-gray-300 bg-gray-50/50 p-3 text-gray-500 focus:border-[#6a040f] focus:outline-none focus:ring-1 focus:ring-[#6a040f]"
                            >
                                <option value="">Selecione o tipo</option>
                                <option value="duvida">Dúvida</option>
                                <option value="sugestao">Sugestão</option>
                                <option value="elogio">Elogio</option>
                                <option value="reclamacao">Reclamação</option>
                            </select>
                        </div>

                        {/* Linha 4: Loja */}
                        <div className="flex flex-col gap-2">
                            <label htmlFor="loja" className="text-sm font-bold text-[#6a040f]">
                                Loja
                            </label>
                            <select
                                id="loja"
                                className="rounded-lg border border-gray-300 bg-gray-50/50 p-3 text-gray-500 focus:border-[#6a040f] focus:outline-none focus:ring-1 focus:ring-[#6a040f]"
                            >
                                <option value="">Selecione a loja (opcional)</option>
                                <option value="vila-prudente">Vila Prudente (Rua Ibitirama)</option>
                            </select>
                        </div>

                        {/* Linha 5: Assunto */}
                        <div className="flex flex-col gap-2">
                            <label htmlFor="assunto" className="text-sm font-bold text-[#6a040f]">
                                Assunto <span className="text-[#d4af37]">*</span>
                            </label>
                            <input
                                type="text"
                                id="assunto"
                                placeholder="Resumo do seu contato"
                                required
                                className="rounded-lg border border-gray-300 bg-gray-50/50 p-3 text-gray-900 focus:border-[#6a040f] focus:outline-none focus:ring-1 focus:ring-[#6a040f]"
                            />
                        </div>

                        {/* Linha 6: Mensagem */}
                        <div className="flex flex-col gap-2">
                            <label htmlFor="mensagem" className="text-sm font-bold text-[#6a040f]">
                                Mensagem <span className="text-[#d4af37]">*</span>
                            </label>
                            <textarea
                                id="mensagem"
                                rows={5}
                                placeholder="Escreva sua mensagem aqui..."
                                required
                                className="resize-y rounded-lg border border-gray-300 bg-gray-50/50 p-3 text-gray-900 focus:border-[#6a040f] focus:outline-none focus:ring-1 focus:ring-[#6a040f]"
                            ></textarea>
                        </div>

                        {/* Botão Enviar */}
                        <button
                            type="submit"
                            className="mt-4 w-full rounded-lg bg-[#6a040f] py-4 text-lg font-bold text-white transition-colors hover:bg-[#57030c] focus:outline-none focus:ring-4 focus:ring-[#6a040f]/50"
                        >
                            Enviar Mensagem
                        </button>
                    </form>
                </div>

            </div>
        </section>
    );
}
