# ProjetoWebAPI_JavaSpringBoot

-- Cria um banco de dados chamado "nome_do_banco"
CREATE DATABASE flowerexperience;

-- Usar o banco criado
Use flowerexperience;

-- Cria uma tabela dentro do banco de dados "nome_do_banco"
-- A tabela tem as colunas: id, nome_completo, email e senha
CREATE TABLE cliente (
    id INTEGER AUTO_INCREMENT PRIMARY KEY, -- Define a coluna "id" como chave primária, com incremento automático
    nome_completo VARCHAR(200) NOT NULL,   -- Coluna "nome_completo" com até 200 caracteres e não pode ser nula
    email VARCHAR(50) NOT NULL UNIQUE,     -- Coluna "email" com até 50 caracteres, não pode ser nula e deve ser única
    senha TEXT NOT NULL                    -- Coluna "senha" que armazena a senha do usuário, não pode ser nula
);

-- Seleciona todos os registros da tabela "nome_do_banco"
SELECT * FROM cliente;

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

