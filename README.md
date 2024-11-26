# Projeto Web API - Java Spring Boot

Este projeto é uma API web construída com Java Spring Boot, que integra com um banco de dados MySQL. A aplicação permite gerenciar informações sobre plantas, desidratadas, arranjos e orquídeas, bem como clientes que fazem compras de flores.

## Banco de Dados (MySQL)

1. Criação do Banco de Dados

   ```sql
   CREATE DATABASE flowerexperience;
   USE flowerexperience;

2. Criação das Tabelas:

   ```sql
   CREATE TABLE cliente (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome_completo VARCHAR(200) NOT NULL,
    email VARCHAR(50) NOT NULL UNIQUE,
    senha TEXT NOT NULL
   );

   CREATE TABLE planta (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    categoria VARCHAR(100) NOT NULL,
    descricao TEXT NOT NULL,
    tamanho VARCHAR(50) NOT NULL,
    imagem VARCHAR(255) NOT NULL
   );

   CREATE TABLE desidratada (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    categoria VARCHAR(100) NOT NULL,
    descricao TEXT NOT NULL,
    tamanho VARCHAR(50) NOT NULL,
    imagem VARCHAR(255) NOT NULL
   );

   CREATE TABLE arranjo (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    categoria VARCHAR(100) NOT NULL,
    descricao TEXT NOT NULL,
    tamanho VARCHAR(50) NOT NULL,
    imagem VARCHAR(255) NOT NULL
   );

   CREATE TABLE orquidea (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    categoria VARCHAR(100) NOT NULL,
    descricao TEXT NOT NULL,
    tamanho VARCHAR(50) NOT NULL,
    imagem VARCHAR(255) NOT NULL
   );

3. Consultas para Visualizar os Dados:

   ```sql
   SELECT * FROM planta;
   SELECT * FROM desidratada;
   SELECT * FROM arranjo;
   SELECT * FROM orquidea;
   SELECT * FROM cliente;

## Backend: (flowerexperience)

Instalação das Extensões

Certifique-se de instalar as seguintes extensões para o ambiente de desenvolvimento:
    
- Extension Pack for Java
- MySQL
- Spring Boot Extension Pack

## Frontend: (flowerexperiencesa)

Para instalar as dependências, execute o seguinte comando:

    npm install

Instale o Axios com o seguinte comando:

    npm install axios
    
Rodar a Aplicação:

Para iniciar o servidor de desenvolvimento, execute o seguinte comando:

    npm run dev
