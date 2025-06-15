# 📌 Desafio Técnico - Módulo de Cadastro de Usuários

Este repositório contém a implementação de um **módulo de cadastro de usuários**, desenvolvido como parte de um desafio técnico com o objetivo de aplicar boas práticas de desenvolvimento e organização de código. O projeto é dividido em duas camadas principais: **Frontend e Backend**, que se comunicam por meio de uma API REST.

---

## 🧠 Sobre o Desafio

O desafio propôs a criação de um fluxo completo de **cadastro de usuários**, incluindo:

- Comunicação entre frontend e backend via **API REST**
- Funcionalidade de **criação, listagem, edição e remoção** de usuários


---

## 🚀 Tecnologias Utilizadas

### 🔹 Frontend
- [React.js](https://reactjs.org/) – Biblioteca principal de interface
- [Vite](https://vitejs.dev/) – Ferramenta de build e desenvolvimento
- [Axios](https://www.npmjs.com/package/axios) – Cliente HTTP para requisições à API
- **CSS Modules** – Estilização dos componentes de forma isolada e organizada

### 🔸 Backend
- [Node.js](https://nodejs.org/) – Ambiente de execução JavaScript
- [Express](https://expressjs.com/) – Framework para criação da API
- [Prisma ORM](https://www.prisma.io/) – ORM para manipulação do banco de dados com JavaScript
- [MongoDB](https://www.mongodb.com/) – Banco de dados NoSQL utilizado (acessado via Prisma)

---

## 🧩 Funcionalidades da Plataforma

A plataforma permite realizar as operações básicas e fundamentais sobre usuários:

- ✅ **Cadastro de Usuários** com nome, sobrenome, e-mail, senha e setor
- 📋 **Listagem de Usuários** cadastrados na aplicação
- ✏️ **Edição** das informações dos usuários
- 🗑️ **Remoção** de usuários

### Campos Atualmente Implementados:
- Nome
- Sobrenome
- E-mail
- Senha (campo apenas no frontend)
- Setor

---

## 💡 Melhorias Futuras Planejadas

Para futuras versões, estão previstas as seguintes melhorias:

- 🔒 **Hash de senha** com bcrypt ou outra biblioteca segura, evitando armazenamento direto
- 🕐 Inclusão de **data de entrada** para novos usuários
- 🔁 **Status de atividade** do usuário:
  - Ativo (padrão)
  - Desativado (com possibilidade de adicionar `data de saída`)
- 🗃️ Validações de dados e mensagens de feedback no frontend
- 🌐 Internacionalização (i18n) da interface
- 🧪 Testes automatizados para garantir a confiabilidade da aplicação

---

## 🛠️ Como Executar o Projeto

### Pré-requisitos
- Node.js instalado
- MongoDB em execução (local ou serviço como MongoDB Atlas)

### 📁 Clonando o repositório

```bash
git clone https://github.com/IsisMarieli/Isis-Marieli-Desafio-Tecnico.git

```
### 🔹 Executando o Frontend (React + Vite)

```bash

cd Frontend

npm install

npm run dev

```

### 🔸 Executando o Backend (Node.js + Express)

```bash

cd Backend

npm install

node --watch server.js

```

### 📂 Estrutura de Pastas

```
.
├── Backend
│   ├── generated/              
│   ├── node_modules/           
│   ├── prisma/                 
│   ├── .env                    
│   ├── .gitignore              
│   ├── package.json            
│   ├── package-lock.json       
│   └── server.js               
│
├── Frontend
│   ├── node_modules/           
│   ├── src/                    
│   ├── .gitignore              
│   ├── eslint.config.js        
│   ├── index.html              
│   ├── package.json            
│   ├── package-lock.json       
│   ├── vite.config.js          
│   └── README.md               
│
└── README.md                   

```

### 🔧 Melhorias Futuras

O projeto atual atende aos requisitos do desafio técnico, mas como melhorias futuras, eu planejo implementar os seguintes aprimoramentos na plataforma de cadastro de usuários:

🔐 **Hash de Senhas:** pretendo armazenar as senhas de forma segura no banco de dados utilizando criptografia, garantindo mais segurança para os dados dos usuários.

📅 **Campos de Auditoria:** quero adicionar os campos Data de Entrada e Data de Saida para registrar o histórico de permanência dos usuários.

🟢 **Status do Usuário:** será incluído o campo ativo, que indicará se o usuário está ativo ou desativado no sistema, possibilitando também **filtros por status**.

✅ **Validações de Dados:** tanto no frontend quanto no backend, pretendo adicionar validações mais rigorosas para evitar o envio de informações incompletas ou incorretas.

🔍 **Filtro e Pesquisa:** implementar uma funcionalidade de filtro por, setor ou status, além de input de pesquisa para facilitar a visualização em casos com muitos usuários.

☁️ **Deploy da Aplicação:** por fim, também está nos planos realizar o deploy completo do projeto, utilizando.

## 📫 Contato

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Isis%20Marieli-blue?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/isis-marieli-9a350225b/)
