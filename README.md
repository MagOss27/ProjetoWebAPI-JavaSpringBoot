# ProjetoWebAPI_JavaSpringBoot

Banco de Dados (MySQL)

CREATE DATABASE flowerexperience;
use flowerexperience;

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


select * from planta;
select * from desidratada;
select * from arranjo;
select * from orquidea;

select * from cliente;

Backend: (flowerexperience)
1. Instalação das extensões:
Instale as seguintes extensões para o seu ambiente de desenvolvimento:

- Extension Pack for Java
- MySQL
- Spring Boot Extension Pack

2. Configuração do banco de dados:
Após concluir a criação do banco de dados, é necessário configurar o backend adequadamente para garantir seu funcionamento contínuo.

Frontend: (flowerexperiencesa)
No frontend, execute os seguintes passos para configurar as dependências:

1. Instale as dependências do projeto com os comandos:

npm install ou npm i 

2. Instale o Axios com o seguinte comando:

npm install axios

3. Rodar a aplicação:
Por fim, para iniciar o servidor de desenvolvimento, execute:

npm run dev


*OBS: Qualquer coisa bota no chat

