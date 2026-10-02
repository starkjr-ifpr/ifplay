# IFPlay

O IFPlay é uma plataforma acadêmica para votação anônima de músicas que serão reproduzidas durante os intervalos. O sistema permite que estudantes sugiram músicas, participem das votações e acompanhem os resultados, enquanto a administração gerencia o processo sem escolher diretamente quais músicas serão reproduzidas.

## Objetivo do projeto

```text
Sugestão
   ↓
Votação
   ↓
Votos dos estudantes
   ↓
Resultado
   ↓
Rádio
```

> Toda música reproduzida pelo sistema deve ter participado de uma votação.

## Stack

### React

Biblioteca utilizada para construir a interface.

### Vite

Ferramenta responsável pelo ambiente de desenvolvimento e build do frontend.

### React Router

Responsável pela navegação entre páginas.

### Tailwind CSS

Utilizado para estilização da interface.

### Node.js

Runtime utilizado para executar o backend.

### Fastify

Framework utilizado para construir a API REST.

### TypeScript

Utilizado para adicionar tipagem estática ao projeto.

### PostgreSQL

Banco de dados relacional.

### Prisma

ORM utilizado pelo backend para comunicação com o PostgreSQL.

### Docker

Utilizado inicialmente para facilitar a execução do PostgreSQL no ambiente de desenvolvimento.

## Arquitetura

```text
Frontend
React + Vite
     │
     │ HTTP/REST
     ▼
Backend
Node.js + Fastify
     │
     │ Prisma
     ▼
PostgreSQL
```

- O frontend **não acessa o banco diretamente**.
- O backend é responsável pelas regras de negócio.
- O Prisma é responsável pela comunicação com o banco.
- O PostgreSQL armazena os dados.

Fluxo completo:

```text
React
  ↓
HTTP Request
  ↓
Fastify API
  ↓
Regra de negócio
  ↓
Prisma
  ↓
PostgreSQL
```

## Estrutura de pastas

| Pasta                      | Responsabilidade                           |
| -------------------------- | ------------------------------------------ |
| `frontend/`                | Aplicação React                            |
| `backend/`                 | API Fastify                                |
| `docs/`                    | Documentação do projeto                    |
| `docker/`                  | Arquivos auxiliares relacionados ao Docker |
| `frontend/src/components/` | Componentes reutilizáveis                  |
| `frontend/src/pages/`      | Páginas                                    |
| `frontend/src/layouts/`    | Layouts                                    |
| `frontend/src/hooks/`      | Hooks reutilizáveis                        |
| `frontend/src/services/`   | Comunicação com API                        |
| `backend/src/modules/`     | Módulos de negócio                         |
| `backend/src/plugins/`     | Plugins/configurações do Fastify           |
| `backend/src/database/`    | Configuração relacionada ao banco          |
| `backend/prisma/`          | Schema e migrations do Prisma              |

## Começando o desenvolvimento

### 1. Clonar o projeto

```bash
git clone <URL_DO_REPOSITORIO>
cd ifplay
```

### 2. Instalar dependências

Frontend:

```bash
cd frontend
npm install
```

Backend:

```bash
cd backend
npm install
```

### 3. Configurar ambiente

Copie os arquivos de exemplo e preencha as variáveis necessárias:

```bash
cp frontend/.env.example frontend/.env
cp backend/.env.example backend/.env
```

Variáveis principais:

- `frontend/.env` → `VITE_API_URL` (ex.: `http://localhost:3000`)
- `backend/.env` → `DATABASE_URL` e `PORT`

### 4. Iniciar banco

```bash
docker compose up -d
```

### 5. Iniciar backend

```bash
cd backend
npm run prisma:generate
npm run dev
```

A API ficará disponível em `http://localhost:3000`.

Verifique com:

```bash
curl http://localhost:3000/health
```

Resposta esperada:

```json
{ "status": "ok" }
```

### 6. Iniciar frontend

```bash
cd frontend
npm run dev
```

A interface ficará disponível em `http://localhost:5173`.

## Scripts úteis

Na raiz:

```bash
npm run docker:up      # sobe o PostgreSQL
npm run docker:down    # para o PostgreSQL
npm run dev:frontend   # atalho para o frontend
npm run dev:backend    # atalho para o backend
```

No frontend (`frontend/`):

```bash
npm run dev
npm run build
npm run lint
```

No backend (`backend/`):

```bash
npm run dev
npm run build
npm run start
npm run lint
npm run prisma:generate
npm run prisma:migrate
```

## Onde devo colocar meu código?

```text
Precisa criar uma página?
→ frontend/src/pages

Precisa criar um botão/componente reutilizável?
→ frontend/src/components

Precisa fazer uma chamada para a API?
→ frontend/src/services

Precisa criar uma rota da API?
→ backend/src/modules

Precisa implementar uma regra de negócio?
→ backend/src/modules/<modulo>/service.ts

Precisa acessar o banco?
→ backend/src/modules/<modulo>/repository.ts

Precisa alterar o banco?
→ backend/prisma/schema.prisma
```

### Padrão interno dos módulos (backend)

Quando for implementar funcionalidades, use:

```text
module/
├── routes.ts
├── controller.ts
├── service.ts
├── repository.ts
├── schema.ts
└── types.ts
```

Fluxo:

```text
Route → Controller → Service → Repository → Prisma → PostgreSQL
```

## Regras de arquitetura

### Regra 1

Frontend não acessa PostgreSQL diretamente.

### Regra 2

Regras de negócio devem ficar no backend.

### Regra 3

Controllers não devem concentrar regras complexas.

### Regra 4

Components devem ser reutilizáveis quando fizer sentido.

### Regra 5

Não criar abstrações sem necessidade.

### Regra 6

Não adicionar uma biblioteca simplesmente porque ela existe.

### Regra 7

Antes de criar uma nova estrutura, verificar se a estrutura atual já resolve o problema.

## Princípio

O IFPlay é um projeto de aprendizado e desenvolvimento colaborativo.

A arquitetura deve ser **simples o suficiente para um iniciante entender e estruturada o suficiente para uma equipe inteira trabalhar nela.**

**Keep it simple. Build the product. Learn along the way.**
