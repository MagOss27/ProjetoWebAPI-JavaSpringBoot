// Seleciona o formulário na página HTML
const formulario = document.querySelector("form");
// Seleciona os campos de input com as classes 'nome', 'email' e 'senha'
const Inome = document.querySelector(".nome");
const Iemail = document.querySelector(".email");
const Isenha = document.querySelector(".senha");

// Função para cadastrar o cliente
function Cadastrar() {

    // Realiza uma requisição HTTP usando fetch para enviar os dados do cliente para o servidor
    fetch("http://localhost:8080/clientes",
        {
            // Define os headers da requisição, aceitando e enviando JSON
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            // Define o método da requisição como POST
            method: "POST",
            // Converte os dados do formulário em JSON e os envia no corpo da requisição
            body: JSON.stringify({
                nome: Inome.value,    // Valor do campo nome
                email: Iemail.value,  // Valor do campo email
                senha: Isenha.value   // Valor do campo senha
            })
        })
        // Quando a requisição for bem-sucedida, redireciona o usuário para a página de login
        .then(function (res) {
            if (res.status === 201) {  // Verifica se o cadastro foi realizado com sucesso
                console.log("Cadastro realizado com sucesso.");
                window.location.href = "LoginCliente.html";  // Redireciona para a página de login
            } else {
                console.log("Erro ao cadastrar o cliente.");
            }
        })
        // Caso ocorra algum erro na requisição, exibe o erro no console
        .catch(function (res) {
            console.log("Erro na requisição:", res);
        });
};

// Função para limpar os campos do formulário
function limpar() {
    // Define os valores dos campos como vazios, limpando o formulário
    Inome.value = "";
    Iemail.value = "";
    Isenha.value = "";
};

// Adiciona um listener ao formulário para executar quando for submetido
formulario.addEventListener('submit', function (event) {
    // Previne o comportamento padrão do formulário, que seria recarregar a página
    event.preventDefault();

    // Chama a função Cadastrar para enviar os dados
    Cadastrar();
    // Chama a função limpar para limpar os campos do formulário após o envio
    limpar();
});


////Dados para a Criação do Banco de Dados\\\\

// Use flowerexperience;

// CREATE TABLE cliente (
//     id INTEGER AUTO_INCREMENT PRIMARY KEY, 
//     nome_completo VARCHAR(200) NOT NULL,  
//     email VARCHAR(50) NOT NULL UNIQUE,     
//     senha TEXT NOT NULL                   
// );

// INSERT INTO cliente VALUES (NULL, "Magnus", "Magnus@gmail.com", "123");

// SELECT * FROM cliente;