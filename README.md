# 🌐 Voice League Web

**Portal de entrada oficial para o ecossistema Voice League.**

Este projeto é a Landing Page do Voice League, um bot de Discord engenheirado para automatizar a comunicação de times de League of Legends. A página foi desenhada para converter novos usuários e facilitar o suporte da comunidade.

[![Vite](https://img.shields.io/badge/bundler-Vite-646CFF?logo=vite&logoColor=fff)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/UI-React-61DAFB?logo=react&logoColor=000)](https://reactjs.org/)
[![Styled Components](https://img.shields.io/badge/styling-Styled--Components-DB7093?logo=styled-components&logoColor=fff)](https://styled-components.com/)
[![i18next](https://img.shields.io/badge/i18n-i18next-26A69A?logo=i18next&logoColor=fff)](https://www.i18next.com/)

---

## 🚀 Tecnologias

O projeto utiliza tecnologias modernas focadas em performance, SEO e acessibilidade:

- **Framework**: [React](https://react.dev/) com **Vite** para build ultra-rápido.
- **Estilização**: **Styled Components** para CSS-in-JS modular e dinâmico.
- **Internacionalização**: **i18next** com suporte nativo a `pt-BR` e `en`.
- **Animações**: Transições CSS personalizadas e Glassmorphism.
- **Assets**: Imagens otimizadas e paleta inspirada no universo Riot Games.

---

## 🏗️ Arquitetura

O projeto segue padrões de **Código Limpo** e organização modular:

- **Components**: Componentes funcionais reutilizáveis e isolados.
- **Constants**: Centralização de links externos, caminhos de assets e configurações globais.
- **i18n**: Estrutura de locales em JSON para fácil manutenção de múltiplos idiomas.
- **Styles**: Tema centralizado em TypeScript para garantir consistência de cores e espaçamentos.

---

## 🛠️ Pré-requisitos e Instalação

### Pré-requisitos

1. [Node.js](https://nodejs.org/) (recomendado v18+) ou [Bun](https://bun.sh/).

### Instalação

```bash
# Clone o repositório
git clone https://github.com/Dev-Etto/voice-league-web.git

# Instale as dependências
npm install # ou bun install

# Configure as variáveis de ambiente
cp .env.example .env
# Edite o .env com os links funcionais

# Inicie em modo de desenvolvimento
npm run dev # ou bun dev
```

---

## 💎 Padrões de Código

Este projeto prioriza a qualidade técnica e segue rigorosamente:

- **Clean Code & SOLID**: Código modular e de responsabilidade única.
- **TypeScript Estrito**: Tipagem detalhada para props, temas e constantes.
- **Acessibilidade (ARIA)**: Uso de HTML semântico e atributos de acessibilidade.
- **Mobile-First**: Design responsivo priorizando dispositivos móveis.
- **Early Return**: Lógica de controle simplificada.

---

## 📦 Scripts Disponíveis

| Script | Comando | Descrição |
| :--- | :--- | :--- |
| `dev` | `npm run dev` | Inicia o servidor de desenvolvimento com HMR. |
| `build` | `npm run build` | Gera a build otimizada para produção. |
| `preview` | `npm run preview` | Visualiza a build de produção localmente. |
| `lint` | `npm run lint` | Executa a verificação estática do código. |

---

## 🤝 Como Contribuir

1. **Bug Reports & Suggestion**: Abra uma Issue detalhando o problema ou sugestão.
2. **Pull Requests**:
    - Faça um Fork do projeto.
    - Crie sua branch (`git checkout -b feature/minha-feature`).
    - Siga o padrão de commits do projeto.
    - Abra o PR explicando as mudanças.
3. **Contribuição Financeira**: Veja a seção de suporte na [página oficial](https://github.com/Dev-Etto/voice-league-web#support).

---

## 📜 Licença

Distribuído sob a **Licença MIT**. Veja `LICENSE` para mais informações.

---

<p align="center">
Inspirado em <a href="https://www.riotgames.com/">League of Legends</a>. Desenvolvido por <a href="https://github.com/Dev-Etto">Dev-Etto</a>.
</p>
