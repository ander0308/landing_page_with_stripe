# Strapi application in Docker

### RODANDO O BACKEND

0 - Faça o clone do projeto com o comando abaixo:
```
$ git clone https://github.com/ander0308/landing_page_with_stripe
```

1 - Rodar o comando `docker-compose up` ou `docker compose up` dentro do repositório.
```
$ docker-compose up
```

2 - Após subir os containers do Docker, para entrar no Dashboard do Strapi, digite a url http://localhost:1337/admin/ no navegador, será necessário realizar um cadastro inicial.


3 - Rodar o comando abaixo para subir o Dump do banco de dados para o postgres no Docker.
```
$ cat backend/strapi.sql | docker exec -i strapi_database psql -U strapi -d strapi
```

4 - Dentro do painel, seré necessário fazer duas configurações

- Ir em `Settings > Internationalization` (clique na opção de editar a lingua 'English'), na opção `ADVANCED SETTINGS`, habilite a opção `"Set as default locale"`

- Ir em `Settings > Roles` de (USERS & PERMISSIONS PLUGIN)` entre na opção `Public` em Permissions(APPLICATION) habilite todas as opções para dar permissão da API ter acesso aos dados. Clique em Salvar e reinicie os containers do Docker caso tenha erro no frontend.


### RODANDO O FRONTEND

5 - Entre da pasta (`frontend`), e rode o comando `yarn` para instalar as dependencias do projeto, certifique de utilizar a versão `node 16`.
```
$ cd frontend
$ yarn
```

6 - Dentro da pasta (`frontend`), rode o comando `yarn dev` para iniciar o projeto.
```
$ yarn dev
```
