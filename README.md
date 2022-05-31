# Back-end Coodesh Challenge 2021
## Space Flight News

#### Foi utilizado
- Jest
    - SWC **(Utilizado para deixa mais performático o jest com o typescript)**
- Typescript
- Express
- Prisma
    - MongoDB
- Swagger
    - Swagger-UI-Express

## Instalação
```bash
$ git clone https://github.com/SDMasterGames/coodesh-api-spaceflight.git
$ cd coodesh-api-spaceflight
$ yarn
```

## Como Usar?
Olhando o `package.json` pode ter noção das opções que tem disponíveis.
```json
"scripts": {
    "dev": "tsnd --respawn --transpile-only --exit-child  src/server.ts",
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage",
    "build": "tsc --build --clean && tsc --build",
    "start": "yarn build && node dist/server.js"
  },
```
- `dev`: Utilizado para ambiente de desenvolvimento.
- `test`: Utilize para realizar apenas um teste na aplicação **(os testes são focados apenas nos UseCases)**
- `test:watch`: Semelhante ao `test` porém com atualização automática a cada mudança nos testes.
- `test:coverage`: Para visualizar como está a cobertura dos testes na aplicação.
- `build`: Usado para realizar a compilação do projeto convertendo os arquivos .ts para .js, ele remove os arquivos do build anterior e adiciona os novos.
- `start`: Utilizado para subir a aplicação em produção, já realiza o build para não ter falhas caso esqueça.

## Rotas
- `[GET]/: `  Retornar um Status: 200 e uma Mensagem "Back-end Challenge 2021 🏅 - Space Flight News"
- `[GET]/v1/docs:` Obter a documentação da aplicação.
- `[GET]/v1/articles/:`   Listar todos os artigos da base de dados, utilizar o sistema de paginação para não sobrecarregar a REQUEST
- `[GET]/v1/articles/{id}:` Obter a informação somente de um artigo
- `[POST]/v1/articles/:` Adicionar um novo artigo
- `[PUT]/v1/articles/{id}:` Atualizar um artigo baseado no id
- `[DELETE]/v1/articles/{id}:` Remover um artigo baseado no id


>  This is a challenge by [Coodesh](https://coodesh.com/)
