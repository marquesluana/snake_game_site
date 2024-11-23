# Snake Game | CI/CD 4º semestre de 2024 | DSM - Fatec Araras

A aplicação Snake Game foi desenvolvida com o objetivo de aplicar os conhecimentos de rodar aplicações em docker.

## Participantes

<p align="center">
  <a href="https://github.com/MarquesFabiano">
    <img src="https://avatars.githubusercontent.com/MarquesFabiano" width="15%">
  </a>
  <a href="https://github.com/isabalmeida">
    <img src="https://avatars.githubusercontent.com/isabalmeida" width="15%">
  </a>
  <a href="https://github.com/JPacolla376">
    <img src="https://avatars.githubusercontent.com/JPacolla376" width="15%">
  </a>
  <a href="https://github.com/marquesluana">
    <img src="https://avatars.githubusercontent.com/marquesluana" width="15%">
  </a>
  <a href="https://github.com/MaikonGino">
    <img src="https://avatars.githubusercontent.com/MaikonGino" width="15%">
  </a>
</p>

## COMO RODAR ESSE PROJETO?

### 1. Criar o Dockerfile
No diretório principal do projeto, crie um arquivo chamado Dockerfile com o seguinte conteúdo:

    FROM nginx:alpine
    COPY src /usr/share/nginx/html

Este Dockerfile utiliza a imagem oficial do Nginx e copia os arquivos do projeto para o diretório onde o Nginx serve o conteúdo (localizado em /usr/share/nginx/html).

### 2. Construir a Imagem Docker
No terminal, navegue até o diretório do projeto e execute o comando:

    docker build -t snake_game_site .

Este comando cria uma imagem Docker chamada snake_game_site, que contém os arquivos do projeto.

### 3. Rodar o Contêiner
Após construir a imagem, execute o seguinte comando para iniciar o contêiner:

    docker run -d -p 8080:80 --name snake_game_container snake_game_site

Este comando:

- Executa o contêiner em modo detached (-d).
- Mapeia a porta 8080 do host para a porta 80 do contêiner (-p 8080:80).
- Dá ao contêiner o nome snake_game_container.

Agora, você pode acessar o jogo no navegador através de:
http://localhost:8080

### Recomendações Adicionais
- Para parar o contêiner:

      docker stop snake_game_container
  
- Para remover o contêiner:

      docker rm snake_game_container

- Para listar as imagens Docker:

      docker images

- Para listar os contêineres em execução:

      docker ps
