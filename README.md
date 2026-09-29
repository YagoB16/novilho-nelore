
# 🥩 Novilho Nelore Casa de Carnes - Website

## 📖 Sobre o Projeto
Website oficial (Single Page Application) desenvolvido para servir como a montra digital do açougue premium **Novilho Nelore**. O projeto foca-se em apresentar a tradição da marca, a localização das unidades físicas, os cortes de excelência e, principalmente, facilitar as encomendas e o atendimento direto aos clientes através do WhatsApp.

## 🏗️ Arquitetura do Projeto

### Estrutura de Diretórios
```text
web-profile/
├── src/
│   ├── app/
│   │   ├── assets/               # Imagens e recursos estáticos (ex: logos)
│   │   ├── globals.css           # Estilos globais, variáveis CSS e bloqueios de overflow
│   │   ├── layout.tsx            # Layout raiz da aplicação
│   │   └── page.tsx              # Página principal (SPA) que agrupa as secções
│   └── components/
│       ├── layout/
│       │   ├── Footer.tsx        # Rodapé com informações legais e links
│       │   └── NavBar.tsx        # Navegação principal fixa (Sticky/Fixed) com menu mobile
│       ├── sections/
│       │   ├── Hero.tsx          # Apresentação inicial e CTAs principais (#home)
│       │   ├── About.tsx         # Secção "Nossas Lojas" com mapas e horários (#lojas)
│       │   ├── Service.tsx       # Secção de "Dúvidas Frequentes / FAQ" (#services)
│       │   ├── Work.tsx          # Secção "Nossos Produtos / Vitrine" (#work)
│       │   └── Contact.tsx       # Formulário de contacto e atendimento (#contato)
│       └── ui/
│           └── skeleton.tsx      # Componente de carregamento (Shimmer effect)
├── lib/
│   └── utils.ts                  # Utilitários gerais
├── package.json                  # Dependências e scripts
├── tailwind.config.js            # Configurações do Tailwind CSS
└── tsconfig.json                 # Configurações do TypeScript

```

### Padrões Arquiteturais Utilizados

* **App Router (Next.js 15+)**: Estrutura moderna de routing da framework.
* **Single Page Application (SPA)**: Navegação fluida por secções na mesma página com scroll suave.
* **Mobile First & Responsividade**: Layout rigorosamente adaptável, com controlo estrito de limites (`border-box`, larguras a 100%) para evitar quebras no telemóvel.
* **Integração CTA Dinâmica**: Botões de ação desenhados para abrir automaticamente links pré-preenchidos do WhatsApp, interpolando produtos e dúvidas.

## ⚙️ Configuração do Ambiente

### Versões e Compatibilidade

* **Node.js**: Compatível com versões LTS (recomendado 18+)
* **Next.js**: 15.2.3
* **React**: 19.0.0
* **TypeScript**: 5.x

### Scripts de Desenvolvimento

```bash
# Iniciar ambiente de desenvolvimento (com Turbopack)
npm run dev

# Compilar o projeto para produção
npm run build

# Iniciar servidor de produção
npm run start

# Executar verificação de erros (Linting)
npm run lint

```

## 🛠️ Tecnologias Utilizadas

### Core Framework

* **Next.js 15.2.3**: Framework React para renderização e estruturação.
* **React 19.0.0**: Biblioteca base para construção da interface de utilizador.
* **TypeScript 5**: Tipagem estática para maior segurança no código.

### Styling & UI

* **Tailwind CSS 4.0.9**: Framework CSS utilitária (com utilização da diretiva `@theme`).
* **Lucide React**: Biblioteca de ícones SVG leves e modernos.
* **shadcn/ui (Skeleton)**: Elementos base de UI.

### Tema e Design System

* **Paleta de Cores Customizada**: Focada nas cores da marca (Vermelho Escuro `#6a040f`, Dourado `#d4af37`, Fundos Marrom/Navy).
* **Variáveis CSS**: Utilizadas em conjunto com Tailwind para facilitar mudanças de tema.

## 📦 Instruções de Deploy

### Pré-requisitos

1. Instalar o Node.js (18+)
2. Ter o `npm` ou `yarn` configurado
3. Conta no GitHub para versionamento

### Deploy Recomendado (Vercel)

A plataforma Vercel é a ideal para projetos em Next.js.

```bash
# 1. Instalar Vercel CLI globalmente
npm i -g vercel

# 2. Fazer login na Vercel via terminal
vercel login

# 3. Publicar em produção
vercel --prod

```

*Alternativa:* Pode simplesmente conectar o repositório do GitHub diretamente no painel da Vercel para que os deploys sejam feitos automaticamente a cada `git push`.

### Otimizações Implementadas

* **Imagens**: Utilização do componente `<Image />` do Next.js para otimização, redimensionamento automático de SVGs/PNGs e lazy-loading.
* **Performance**: Prevenção de CLS (Cumulative Layout Shift) configurando dimensões fixas no NavBar.
* **Fontes**: Fonte Geist integrada nativamente para evitar bloqueios de renderização.

```

