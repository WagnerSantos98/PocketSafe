# Sistema de Gestão Financeira

## Visão Geral

O Sistena de Gestão Financeira é uma aplicação web desenvolvida para facilitar o gerenciamento de entrada e saída de valores.

## 📜 <a name="table">Índice</a>

1.  ℹ️  [Introdução](#introduction)
2. ⚙️ [Tecnologias Utilizadas](#tech-utility)
3. 💼 [Funcionalidades](#features)
4. 🚀 [Quick Start](#quick-start)
7. 📣 [Contato](#contact)

## <a name="introduction">ℹ️ Introdução</a>

Construído com React.js, Pocket Safe é uma plataforma financeira SaaS que se conecta a várias contas bancárias, exibe transações em tempo real, permite aos usuários transferir dinheiro para outros usuários da plataforma e gerencia suas finanças como um todo.

## <a name="tech-utility">⚙️ Tecnologias Utilizadas</a>

- **Front-end**: React.js
- **Back-end**: Node.js com Express
- **Banco de Dados**: MongoDB
- **Autenticação**: JSON Web Tokens (JWT) e Auth
- **Outras Ferramentas**: Git, Github


## <a name="features">💼 Funcionalidades</a>

✔️ **Página inicial**: mostra uma visão geral da conta do usuário com saldo atual, transações recentes, dinheiro gasto em diferentes categorias, etc.

✔️ **Histórico de transações**: inclui opções de paginação e filtragem para visualizar o histórico de transações de diferentes bancos

✔️ **Atualizações em tempo real**: refletem as alterações em todas as páginas relevantes ao conectar novas contas bancárias.

✔️ **Transferência de fundos**: permite aos usuários transferir fundos usando Dwolla para outras contas com campos obrigatórios e ID do banco destinatário.

✔️ **Capacidade de resposta**: garante que o aplicativo se adapte perfeitamente a vários tamanhos de tela e dispositivos, proporcionando uma experiência de usuário consistente em plataformas de desktop, tablet e dispositivos móveis.

e muito mais, incluindo arquitetura de código e capacidade de reutilização.


## <a name="quick-start">🚀 Quik Start</a>

**Prerequisites**

Certifique-se de ter o seguinte instalado em sua máquina:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/pt)
- [npm](https://www.npmjs.com/) (Node Package Manager)

## Configurações do Ambiente de Desenvolvimento

**Clone o repositório:**
```bash
git clone https://github.com/WagnerSantos98/TrackWise.git
cd TrackWise
```

**Instalação**

Instale as dependências do projeto usando npm:

```bash
npm install
```

2. **Configure as variáveis de ambiente:**

Crie um novo arquivo chamado `.env` na raiz do seu projeto e adicione o seguinte conteúdo:

```env
PORT=
MONGO_URL=
```

**Executando o Projeto**

```bash
npm start || npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para visualizar o projeto.

## <a name="contact">📣 Contato</a>

- Autor: Wagner Santos de Jesus
- Email: wagner.jesus98@outlook.com
- LinkedIn: https://www.linkedin.com/in/wagnersjesus/