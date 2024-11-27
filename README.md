
---

# Server Meu Casamento

Este é o repositório do projeto **Server Meu Casamento**, que utiliza Node.js e TypeScript para gerenciar dados de usuários e casamentos, com funcionalidades como criação, atualização, exclusão e autenticação.

## Estrutura do Projeto

O projeto é organizado da seguinte forma:

- **mineração**
  - Scripts relacionados à mineração de dados e recomendações.
  - **datasets**: Conjunto de dados utilizado no processo de mineração.
  - **mywedding_cost_recommendations.py**: Script em Python para recomendações de custos relacionados a casamentos.
  - **requirements.txt**: Dependências necessárias para o script de mineração em Python.

- **src**
  - **core**
    - **domain**: Definição das regras de negócio e entidades.
    - **usecases**: Casos de uso do sistema.
  - **infra**
    - **adapters**: Adaptações para serviços externos.
    - **database**: Configuração e conexão ao banco de dados.
    - **http**
      - **controllers**: Contém os controladores responsáveis por gerenciar as requisições HTTP. Exemplos:
        - `CreateMarriageController.ts`
        - `GetMarriageByUserController.ts`
        - `LoginUserController.ts`
    - **routes**: Definição das rotas HTTP.
  - **interface**
    - **core**: Interfaces do núcleo do sistema.
    - **infra**: Interfaces relacionadas à infraestrutura.
  - **main**
    - **factories**: Factories para instanciar objetos.
    - **app.ts**: Inicialização do aplicativo.
    - **config.ts**: Configurações gerais.
    - **server.ts**: Inicialização do servidor.
    - **swagger.ts**: Documentação da API.
  - **shared**
    - **errors**: Tratamento de erros personalizados.
    - **helpers**: Funções auxiliares.

## Pré-requisitos

- **Node.js** e **npm/yarn** instalados.
- **Python 3.x** para executar os scripts de mineração.
- Dependências do Python listadas em `requirements.txt`.

## Configuração

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/server-meu-casamento.git
   ```
2. Instale as dependências do projeto:
   ```bash
   npm install
   ```
3. Configure as variáveis de ambiente no arquivo `.env`.

## Executando o Projeto

1. Para iniciar o servidor em modo de desenvolvimento:
   ```bash
   npm run dev
   ```
2. Para executar os scripts de mineração e aprendizado de máquina:
   ```bash
   python mineracao/mywedding_cost_recommendations.py
   ```

## Mineração de Dados e Machine Learning

A explicação sobre o processo de mineração de dados e aprendizado de máquina utilizado neste projeto está disponível neste [vídeo](https://youtu.be/ofDhsDnpFhY).

## Contribuição

Sinta-se à vontade para contribuir com o projeto por meio de pull requests. Sugestões e feedbacks são sempre bem-vindos!

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).

--- 
