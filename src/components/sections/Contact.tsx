"use client";

import React, { useState } from "react";

interface SectionProps {
    id: string;
}

export default function Contact({ id }: SectionProps) {
    // 1. Estado expandido para englobar todos os campos da UI
    const [formData, setFormData] = useState({
        nome: "",
        telefone: "",
        email: "",
        tipoContato: "",
        loja: "",
        assunto: "",
        mensagem: "",
    });

    const [status, setStatus] = useState("");

    // 2. Manipulador de eventos para atualizar o estado
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // 3. Função de envio
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault(); // Evita o recarregamento da página

        // Validação de todos os campos obrigatórios
        if (
            !formData.nome ||
            !formData.telefone ||
            !formData.email ||
            !formData.tipoContato ||
            !formData.assunto ||
            !formData.mensagem
        ) {
            setStatus("Por favor, preencha todos os campos obrigatórios.");
            return;
        }

        setStatus("Enviando mensagem...");

        const webhookUrl =
            "https://discordapp.com/api/webhooks/1427453994346877042/s8tx9qamlx8ocdUjCBFkxB32RYVpHcPwz7yyOZ_An3ccK2KjqJFhau9BxCLgguMnVmYm";

        const payload = {
            username: "YANGO WEBs",
            avatar_url: "https://avatars.githubusercontent.com/u/91913602?s=96&v=4",
            embeds: [
                {
                    title: "Nova mensagem YANGO WEB's criada:",
                    color: 3447003,
                    description: `**${formData.assunto}**`,
                    fields: [
                        {
                            name: "ID",
                            value: `${Date.now()}_${Math.random().toString(36).substring(2, 11)}`,
                        },
                        {
                            name: "Nome",
                            value: formData.nome,
                        },
                        {
                            name: "Telefone",
                            value: formData.telefone,
                        },
                        {
                            name: "Email",
                            value: formData.email,
                        },
                        {
                            name: "Tipo de Contato",
                            value: formData.tipoContato,
                        },
                        {
                            name: "Loja",
                            value: formData.loja || "Não informada",
                        },
                        {
                            name: "Assunto",
                            value: formData.assunto,
                        },
                        {
                            name: "Mensagem",
                            value: formData.mensagem,
                        },
                    ],
                    footer: {
                        text: "Criado em:",
                    },
                    timestamp: new Date().toISOString(),
                },
            ],
        };

        try {
            const response = await fetch(webhookUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            if (response.ok) {
                setStatus("Mensagem enviada com sucesso!");
                setTimeout(() => {
                    // Limpa o formulário após o sucesso
                    setFormData({
                        nome: "",
                        telefone: "",
                        email: "",
                        tipoContato: "",
                        loja: "",
                        assunto: "",
                        mensagem: "",
                    });
                    setStatus("");
                }, 3000);
            } else {
                setStatus("Erro ao enviar mensagem. Tente novamente.");
            }
        } catch (error) {
            setStatus("Erro ao enviar mensagem. Tente novamente.");
            console.error("Erro:", error);
        }
    };

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
                    <form className="flex flex-col gap-6" onSubmit={handleSubmit}>

                        {/* Linha 1: Nome e Telefone */}
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="nome" className="text-sm font-bold text-[#6a040f]">
                                    Nome <span className="text-[#d4af37]">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="nome"
                                    name="nome" // IMPORTANTE: name igual ao do useState
                                    value={formData.nome}
                                    onChange={handleChange}
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
                                    name="telefone"
                                    value={formData.telefone}
                                    onChange={handleChange}
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
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
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
                                name="tipoContato"
                                value={formData.tipoContato}
                                onChange={handleChange}
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
                                name="loja"
                                value={formData.loja}
                                onChange={handleChange}
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
                                name="assunto"
                                value={formData.assunto}
                                onChange={handleChange}
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
                                name="mensagem"
                                value={formData.mensagem}
                                onChange={handleChange}
                                rows={5}
                                placeholder="Escreva sua mensagem aqui..."
                                required
                                className="resize-y rounded-lg border border-gray-300 bg-gray-50/50 p-3 text-gray-900 focus:border-[#6a040f] focus:outline-none focus:ring-1 focus:ring-[#6a040f]"
                            ></textarea>
                        </div>

                        {/* Status do Envio */}
                        {status && (
                            <p className={`text-center font-bold ${status.includes("sucesso") ? "text-green-600" : "text-red-600"}`}>
                                {status}
                            </p>
                        )}

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
