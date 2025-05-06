# projeto_api_de_entregas_de_produtos
API de entrega de produtos aonde vamos ter autenticação e autorização para cliente e vendedor, também iremos utilizar o ORM, prisma para o gerenciamento de tabelas do banco de dados SQLite,  para o backend vamos utilizar node, express e a linguagem de programação será o typescript.

## Passo a Passo
- Criamos o package.json : npm init -y
- Instalamos o express : npm i express
- Instalamos o typescript : npm i typescript -D
- Instalamos o ts-node : npm i ts-node -D
- Instalamos o express async errors : npm i express-async-errors

Criamos o arquivo tsconfig.json : npx tsc --init

Criamos a pasta SRC
  app.ts : criamos o servidor
  server.ts : importamos o app.ts e iniciamos o servidor, foi feito isso para o servidor não iniciar duas vezes quando colocarmos os testes com o jest.
  pasta Middlewares
    error-handling.ts : criamos o middleware de tratamento de erros
  pasta utils
    AppError.ts : criamos a classe de erro, para que possamos colocar erros personalizados, após isso importamos eles no middleware de tratamento de erros.
  pasta Controllers
      users-Controller.ts : criamos a classe que vai ser responsável pelas ações da rota de autenticação
  pasta Routes
      users-Routes.ts : para criar as rotas de autenticação
      index.ts : para importar as rotas de autenticação
após isso voltamos ao arquivo app.ts e importamos as rotas de autenticação e o middleware de tratamento de erros.

Criamos o arquivo docker-compose.yml : para criar o container do banco de dados postgres (quando vamos criar as configurações do container temos que tomar cuidado com a identação)
  service:
  postgres:
    image: "bitnami/postgresql:latest" // imagem do postgres que está  no docker hub da bitnami
    ports: 
      - "5432:5432" // porta que vai ser exposta para o container primeiro é a porta do servidor e depois a porta do container
    environment: // aqui estamos colocando as variáveis de ambiente que vão ser usadas no container
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: postgres
      POSTGRES_DB: api

comando para criar o container : docker-compose up -d

após isso demos o comando para instalar o prisma : npm i prisma -D e o comando npx prisma init --datasource-provider postgresql para criar o arquivo prisma.schema e o arquivo .env na raiz do projeto

após isso editamos o arquivo .env e colocamos as informações do banco de dados e criamos uma cópia do arquivo.env para o arquivo .env-example como um exemplo de como deve ser preenchido o arquivo.env

Criar as migrations, que são as tabelas e os seus relacionamentos no banco de dados : npx prisma migrate dev

### 