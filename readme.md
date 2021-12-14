<h1 align="center">
  <image src="github/logo.png"/>
</h1>

<h2>
  Sumário
</h2>

<p>
  <a href="#about">Sobre o Projeto</a> •
  <a href="#techs">Tecnologias</a> •
  <a href="#how-to-use">Como usar</a>
</p>

<h2 id="about">
  Sobre o Projeto
</h2>

<p>
  O MyMovies API é uma aplicação feita para ser consumida pelo front-end e ajudar o usuário a encontrar seus filmes favoritos, ver as informações e salvá-los em um catálogo pessoal. Também é útil para manter o usuário informado sobre os filmes que estão em cartaz.
  <h3>Features</h3>
  <ul>
    <li>Realização de cadastro com nome, e-mail e senha</li>
    <li>Autenticação JWT com e-mail e senha</li>
    <li>Possibilidade de receber os dados por uma requisição POST e salvar um filme desejado em um catálogo pessoal</li>
    <li>Listagem dos filmes salvos no catálogo</li>
    <li>Possibilidade de remover um filme do catálogo</li>
  </ul>
</p>

<h2 id="techs">Tecnologias</h2>
<p>O MyMovies foi desenvolvido com as seguintes tecnologias:</p>
<ul>
<li>JavaScript</li>
<li>NodeJS</li>
<li>Express</li>
<li>JSON Web Token</li>
<li>PostgreSQL</li>
<li>Docker</li>
</ul>

<h2 id="how-to-use">Como utilizar</h2>
<h3>Pré-requisitos</h3>
<p>Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
<a href="https://git-scm.com">GIT</a>, <a href="https://nodejs.org/en/">NodeJS</a>, <a href="https://docker.com">Docker</a> e <a href="https://hub.docker.com/_/postgres">imagem do PostgreSQL</a>

```bash
  # Clonar este repositório
  $ git clone https://github.com/philipeF4ria/mymoviesapi.git
  
  # Entrar no diretório do projeto
  $ cd mymoviesapi
  
  # Instalar as dependências
  $ yarn
  
  # Certifique-se de ter o Docker executando com a imagem do Postgres

  # Executando a API
  $ yarn dev

  # O servidor iniciará em http://localhost:3333
  
```

<h2>Rotas da API</h2>
<h3><i>POST users/</i></h3>
<p>Rota que aciona o método para <b>criar um usuário</b></p>
<h3><i>POST users/auth/</i></h3>
<p>Rota que aciona o método para a <b>autenticação do usuário</b></p>

<h3><i>POST movies/</i></h3>
<p>Rota que aciona o método para <b>salvar filme no banco de dados</b></p>
<h3><i>GET movies/</i></h3>
<p>Rota que aciona o método para <b>listar todos os filmes do usuário</b></p>
<h3><i>GET movies/:id</i></h3>
<p>Rota que aciona o método para <b>listar apenas o filme especificado</b></p>
<h3><i>DELETE movies/:id</i></h3>
<p>Rota que aciona o método para <b>deletar o filme especificado</b></p>
<br />

<p>Desenvolvido com 💙 por Philipe Faria<p>

[Meu Linkedin](https://www.linkedin.com/in/philipe-faria/)
