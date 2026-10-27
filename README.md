# Conversor de Bases Numéricas API (Node.js + Express)

Uma API REST simples desenvolvida em **Node.js** com **Express** para conversão de bases numéricas (decimal para binário e hexadecimal), com testes automatizados utilizando **Jest** e **Supertest**, além de documentação baseada na especificação **OpenAPI 3.0**.

Projeto desenvolvido como atividade prática universitária com foco em criação de rotas, validação de parâmetros, testes automatizados e geração de relatórios de cobertura e integração contínua (CI).

---

## 🚀 Tecnologias e Ferramentas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Jest](https://jestjs.io/)
- [Supertest](https://github.com/ladjs/supertest)
- [Jest-JUnit](https://github.com/jest-community/jest-junit)
- [OpenAPI 3.0](https://swagger.io/specification/)

---

## 📁 Estrutura do Projeto

```text
teste-nodejs/
├── spec/                   # Suíte de testes com Jasmine
│   └── testSpec.js
├── test/                   # Testes unitários e de integração (Jest & Supertest)
│   ├── app.js              # Instância Express modularizada para testes
│   ├── app.test.js         # Testes de integração dos endpoints
│   ├── test.js             # Testes com Mocha/Assert
│   └── validateDecimal.js  # Middleware de validação do parâmetro numérico
├── documentacao.yml        # Especificação OpenAPI 3.0 da API
├── index.js                # Ponto de entrada principal da aplicação
├── jest.config.js          # Configuração dos relatórios de teste do Jest
├── package.json            # Metadados do projeto, dependências e scripts
└── README.md               # Documentação do projeto
```

---

## Como Executar o Projeto

### Pré-requisitos
- [Node.js](https://nodejs.org/) instalado (versão 18 ou superior)
- [Git](https://git-scm.com/) instalado

### 1. Clonar o repositorio

```bash
git clone https://github.com/Raccoon-Ozzy/teste-nodejs.git
cd teste-nodejs
```

### 2. Instalar as dependencias

```bash
npm install
```

### 3. Iniciar o servidor
```bash
node index.js
```
O servidor iniciará na porta padrão: `http://localhost:3000`

---

## Endpoints da API

### 1. Decimal para Binário
Converte um número decimal recebido como parâmetro de rota para binário.

- **Rota:** `GET /to-binary/:decimal`
- **Exemplo de chamada:**
  ```bash
  curl http://localhost:3000/to-binary/10
  ```
- **Resposta de sucesso (`200 OK`):**
  ```json
  {
    "decimal": 10,
    "binary": "1010"
  }
  ```
- **Resposta de erro (`400 Bad Request`):**
  ```json
  {
    "error": "Invalid decimal number"
  }
  ```

---

### 2. Decimal para Hexadecimal
Converte um número decimal recebido como parâmetro de rota para hexadecimal (em maiúsculas).

- **Rota:** `GET /to-hex/:decimal`
- **Exemplo de chamada:**
  ```bash
  curl http://localhost:3000/to-hex/255
  ```
- **Resposta de sucesso (`200 OK`):**
  ```json
  [
    255,
    "FF"
  ]
  ```
- **Resposta de erro (`400 Bad Request`):**
  ```json
  {
    "error": "Invalid decimal number"
  }
  ```

---

## Testes Automatizados

O projeto conta com testes automatizados cobrindo os cenários de sucesso e validação de parâmetros inválidos.

### Executar testes
```bash
npm test
```

### Executar testes com relatório de cobertura (Coverage)
```bash
npm run coverage
```
Os relatórios serão gerados na pasta `/coverage`.

### Executar testes para integração contínua (CI)
```bash
npm run test:ci
```
Gera um relatório no formato JUnit XML (`reports/junit.xml`), compatível com pipelines de CI/CD (GitHub Actions, Jenkins, GitLab CI, etc.).

---

## 📄 Documentação OpenAPI

O repositório inclui o arquivo [`documentacao.yml`](documentacao.yml) com a especificação OpenAPI 3.0. Para visualizá-lo de forma interativa, você pode carregá-lo no [Swagger Editor](https://editor.swagger.io/).

---

## 👤 Autor

Desenvolvido por **[Raccoon-Ozzy](https://github.com/Raccoon-Ozzy)**.
