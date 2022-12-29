# Strapi application

### RODANDO O BACKEND
## 0-Faça o clone do projeto com o comando abaix0:
```
$ git clone 
```

## 1-Rodar o compando `docker-compose up` dentro do repositório (`application`).
```
$ docker-compose up
```

## 2-Para entrar no Dashboard do Stipre digite a url(http://localhost:1337/admin/) no navegador, será necessário realizar um cadastro inicial.


## 3-Após subir os containers do Docker, rodar o comando abaixo para subir o Dump do banco de dados para o postgres no Docker.
```
$ cat backend/strapi.sql | docker exec -i strapi_database psql -U strapi -d strapi
```


## 4-Dentro do painel, seré necessário fazer duas configuraçoes

 # - Ir em `Settings > Internationalization` (clique na opção de editar a ligua 'English'), na opção `ADVANCED SETTINGS`, habilite a opção `"Set as default locale"`
  # - Ir em `Settings > Roles` de (USERS & PERMISSIONS PLUGIN)` entre na opção `Public` em Permissions(APPLICATION) habilite todas as opções para dar permissão para a API ter acesso aos dados. Clique em Salvar e reinicie os containers do Docker caso tenha erro no frontend.



### RODANDO O FRONTEND
## 5-Entre da pasta (`frontend`), Rodar o comando `yarn` para instalar as dependencias, certifique de utilizar a versão `node 16`.
```
$ cd frontend
$ yarn
```

## 6-Dentro da pasta (`frontend`), Rodar o comando `yarn dev` para iniciar o projeto.
```
$ yarn dev
```