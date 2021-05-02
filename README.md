# API REST - nodejs

## Descrição
<p>Projeto de uma API REST implementado em NodeJs utilizando express e MongoDB que realiza operações CRUD</p>

## Tabela de conteúdos
<!--ts-->
   * [Descrição](#descrição)
   * [Features](#features)
   * [Pré-requisitos](#pré-requisitos)
   * [Execução](#execução)
   * [Tecnologias utilizadas](#tecnologias)
   * [Testes](#testes)
   * [Autor](#autor)
<!--te-->

## Features

- [x] Listagem de todos os desenvolvedores
- [x] Listagem de desenvolvedor por ID
- [x] Cadastro de desenvolvedor
- [x] Exclusão de desenvolvedor
- [x] Edição de dado do desenvolvedor

## Pré-requisitos
<p>Será necessário ter instalado em sua maquina o Docker (https://www.docker.com/products/docker-desktop)</p>

## Execução

<p>Para gerar a imagem da aplicação vá até a pasta do projeto e execute:</p>

```bash
docker build -t fonseca/dockernode .
```
<p>Para rodar a imagem da aplicação:</p>

```bash
docker run --name apicrud -p 4000:4000 -d fonseca/dockernode
```

<p>Após isso, o seu container estará rodando e você poderá fazer as requisições na API por meio de alguma ferramenta, no endereço http://localhost:4000/developers</p>

<p>Caso deseje parar a execução do container, utilize:</p>

```bash
docker stop apicrud
```

<p>Após isso, você também pode removê-lo executando:

```bash
docker rm apicrud
```

<p>Você pode deletar a imagem gerada anteriormente utilizando:</p>

```
docker rmi fonseca/dockernode 
```

## Tecnologias
<p>As seguintes ferramentas foram utilizadas na construção do projeto:</p>

- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [body-parser](https://www.npmjs.com/package/body-parser)
- [ejs](https://ejs.co/)
- [Docker](https://www.docker.com/products/docker-desktop)
- [Chai](https://www.chaijs.com/)
- [Mocha](https://mochajs.org/)

## Testes

<p>O projeto conta com testes de integração para as operações CRUD. Para rodar os testes, execute:</p>

```bash
npm run test
```

<!-- ## Status

<p>O projeto não está concluído, segue abaixo algumas das modificações futuras:</p>

- Separar o banco de dados de testes do banco padrão;
- Separar os serviços de controladores;
- Implementar um ID com auto-increment para desenvolvedores;
- Adicionar mais verificações de erro nas requisições;
- Estilizar o front-end. -->

## Autor
---

<a href="https://www.linkedin.com/in/henrique-fonseca-7aa779192/">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/38361543?v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Henrique Fonseca</b></sub></a> <a href="https://www.linkedin.com/in/henrique-fonseca-7aa779192/" title="Teste"> </a>


Feito por Henrique Fonseca, entre em contato!

[![Linkedin Badge](https://img.shields.io/badge/-Henrique-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/henrique-fonseca-7aa779192/)](https://www.linkedin.com/in/henrique-fonseca-7aa779192/) 
[![Gmail Badge](https://img.shields.io/badge/-h.marquesluiz@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:h.marquesluiz@gmail.com)](mailto:h.marquesluiz@gmail.com)