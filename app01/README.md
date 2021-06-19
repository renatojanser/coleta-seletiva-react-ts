# Rodar o Projeto

- Criar a imagem docker


```
 docker build -t node_app_ts .
````

- Rodar o docker

```
 docker run -it -p 3000:3000 -v ${pwd}:/home/node/app app01
````

- Rodar o docker-compose

```
 docker-compose up -d
````

