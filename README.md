# Strapi application

A quick description of your strapi application

## 1-Rodar o compando `docker-compose up` dentro do repositório (application).
```
$ docker-compose up
```

## 2-Após subir os containers do Docker, rodar o comando abaixo dentro da pasta `backend` para subir o Dump do banco de dados para o postgres no Docker.
```
$ cat strapi.sql | docker exec -i strapiDB psql -U strapi -d strapi
```

## 3-Dentro da pasta `frontend`, Rodar o comando `yarn` para instalar as dependencias utilizar a versão `node 16`.
```
$ yarn
```

## 4-Dentro da pasta `frontend`, Rodar o comando `yarn dev` para iniciar o projeto.
```
$ yarn dev
```