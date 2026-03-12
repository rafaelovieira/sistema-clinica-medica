## 🔭 Visão Geral
 
O **Sistema Clínica Médica** é uma aplicação SPA (Single Page Application) voltada para o gerenciamento de operações de uma clínica médica. O projeto está em fase de desenvolvimento do front-end, sendo construído com foco em componentes reutilizáveis, separação de responsabilidades e boas práticas de código.
 
A aplicação simula dados via arquivos locais na pasta `/data`, servindo como mock até a integração com uma API REST.
 
---
 
## 🛠 Stack Tecnológica
 
| Tecnologia | Versão | Finalidade |
|---|---|---|
| [React](https://react.dev/) | 18.x | Biblioteca principal de UI |
| [Vite](https://vitejs.dev/) | 5.x | Bundler e dev server |
| [ESLint](https://eslint.org/) | 9.x | Linting e qualidade de código |
| JavaScript | ES2023 | Linguagem principal |
| CSS3 | — | Estilização dos componentes |
 
---
 
## 🏗 Arquitetura do Projeto
 
O projeto segue uma arquitetura baseada em **componentes React**, com separação clara entre dados, lógica e apresentação:
 
```
sistema-clinica-medica/
├── data/               # Mock de dados locais (substitui API)
├── public/             # Assets estáticos públicos
├── src/                # Código-fonte principal
│   ├── assets/         # Imagens, ícones e fontes
│   ├── components/     # Componentes reutilizáveis
│   ├── pages/          # Páginas da aplicação
│   ├── App.jsx         # Componente raiz
│   └── main.jsx        # Entry point da aplicação
├── index.html          # Template HTML base
├── vite.config.js      # Configuração do Vite
├── eslint.config.js    # Configuração do ESLint
└── package.json        # Dependências e scripts
```
 
---
 
## ✅ Funcionalidades
 
> O sistema está em desenvolvimento ativo. As funcionalidades abaixo refletem o escopo planejado para o front-end.
 
- [ ] Dashboard com visão geral da clínica
- [ ] Cadastro e listagem de pacientes
- [ ] Agendamento de consultas
- [ ] Gerenciamento de médicos e especialidades
- [ ] Histórico de atendimentos
- [ ] Interface responsiva para diferentes dispositivos
 
---
 
## 📁 Estrutura de Diretórios
 
```
src/
├── assets/
│   └── ...                  # Recursos estáticos importados nos componentes
├── components/
│   └── ...                  # Componentes reutilizáveis (botões, cards, modais, etc.)
├── pages/
│   └── ...                  # Páginas completas da aplicação
├── App.jsx                  # Definição de rotas e layout global
└── main.jsx                 # Renderização da árvore React no DOM
 
data/
└── ...                      # Arquivos JSON com mock de dados para desenvolvimento
```
 
---
 
## 🗺 Roadmap
 
### Front-end (em andamento)
- [x] Setup inicial com React + Vite
- [x] Configuração de ESLint
- [ ] Implementação das páginas principais
- [ ] Componentização e design system
- [ ] Responsividade mobile-first
- [ ] Testes de componentes com Vitest
 
### Back-end (planejado)
- [ ] API REST com Node.js / Express
- [ ] Banco de dados relacional (PostgreSQL ou MySQL)
- [ ] Autenticação JWT
- [ ] Integração front-end ↔ back-end
 
---