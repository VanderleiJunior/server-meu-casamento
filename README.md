
# PDV (Ponto de Venda)

Este é um sistema simples de Ponto de Venda (PDV) construído com **Node.js**, **Express**, **TypeScript** e documentado com **Swagger**. O projeto inclui funcionalidades básicas para gerenciar **produtos**, **vendas**, e **usuários**, e oferece suporte a operações CRUD (Criar, Ler, Atualizar e Excluir) para essas entidades.

## Funcionalidades

- **Gestão de produtos**: CRUD de produtos.
- **Gestão de usuários**: CRUD de usuários.
- **Gestão de vendas**: Registrar e visualizar vendas.
- **Documentação de API**: Utilizando **Swagger** para documentar todas as rotas disponíveis na aplicação.
- **Suporte a erros**: Inclui tratamentos de erros como `401 Unauthorized` e `404 Not Found` em rotas apropriadas.

## Tecnologias Usadas

- **Node.js**: Runtime JavaScript.
- **Express**: Framework web para Node.js.
- **TypeScript**: Suporte para tipagem estática.
- **Swagger**: Ferramenta de documentação de API.
- **dotenv**: Carrega variáveis de ambiente de um arquivo `.env`.
- **nodemon**: Ferramenta para reiniciar automaticamente o servidor durante o desenvolvimento.
- **ts-node-dev**: Ferramenta para rodar e compilar TypeScript no ambiente de desenvolvimento.

## Instalação

1. Clone este repositório:

   ```bash
   git clone https://github.com/seuusuario/pdv.git
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Crie um arquivo `.env` (opcional) para configurar variáveis de ambiente.

4. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

   Isso iniciará o servidor com o **nodemon** e a **compilação automática do TypeScript**.

5. Acesse a documentação da API em:

   ```
   http://localhost:3000/api-docs
   ```

   Isso abrirá a interface do **Swagger** com a documentação da API.

## Estrutura do Projeto

```bash
pdv/
├── src/
│   ├── index.ts          # Arquivo principal do servidor
│   ├── swagger.ts        # Configuração do Swagger
│   ├── routes/
│   │   ├── product.routes.ts # Rotas para gerenciar produtos
│   │   ├── user.routes.ts    # Rotas para gerenciar usuários
│   │   └── sales.routes.ts   # Rotas para gerenciar vendas
├── package.json          # Configurações do npm e scripts
├── tsconfig.json         # Configurações do TypeScript
├── .env                  # Arquivo para variáveis de ambiente
└── README.md             # Documentação do projeto
```

## Documentação da API

A documentação da API é gerada automaticamente pelo Swagger e pode ser acessada em:

```
http://localhost:3000/api-docs
```

### Exemplos de Rotas

- **Produtos**
  - `GET /products`: Lista todos os produtos (com paginação).
  - `POST /products`: Cria um novo produto.
  - `PUT /products/{id}`: Atualiza um produto existente.
  - `DELETE /products/{id}`: Remove um produto.

- **Usuários**
  - `GET /users`: Lista todos os usuários (com paginação).
  - `POST /users`: Cria um novo usuário.
  - `PUT /users/{id}`: Atualiza um usuário existente.
  - `DELETE /users/{id}`: Remove um usuário.

- **Vendas**
  - `GET /sales`: Lista todas as vendas.
  - `POST /sales`: Registra uma nova venda.
  - `PUT /sales/{id}`: Atualiza uma venda existente.
  - `DELETE /sales/{id}`: Remove uma venda.

## Scripts Disponíveis

No arquivo `package.json`, os seguintes scripts estão disponíveis:

- `npm run dev`: Inicia o servidor com **nodemon** para desenvolvimento.
- `npm start`: Inicia o servidor usando **ts-node-dev**.

## Dependências

### Dependências de Produção

- **express**: Framework web minimalista para Node.js.
- **dotenv**: Carrega variáveis de ambiente.
- **swagger-jsdoc**: Gera documentação Swagger a partir de anotações de JSDoc.
- **swagger-ui-express**: Serve a interface Swagger UI em uma rota Express.

### Dependências de Desenvolvimento

- **nodemon**: Ferramenta para reiniciar automaticamente o servidor em desenvolvimento.
- **ts-node-dev**: Executa TypeScript com recompilação automática.
- **typescript**: Superset de JavaScript com tipagem estática.
- **@types/express**: Tipos para o Express.
- **@types/node**: Tipos para o Node.js.
- **@types/swagger-jsdoc**: Tipos para o Swagger JSDoc.
- **@types/swagger-ui-express**: Tipos para o Swagger UI Express.

## Contribuindo

Sinta-se à vontade para abrir **issues** e enviar **pull requests** para melhorar este projeto.

## Licença

Este projeto está licenciado sob a licença **ISC**.
#   s e r v e r - m e u - c a s a m e n t o  
 