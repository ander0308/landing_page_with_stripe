# Strapi application

A quick description of your strapi application

## 1-Rodar o compando `docker-compose up` dentro do repositório (application)

# Comando para subir o Dump do banco de dados para o postgres no Docker
cat strapi.sql | docker exec -i strapiDB psql -U strapi -d strapi
