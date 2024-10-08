// Seleciona o formulário e os campos de input
const formulario = document.querySelector("form");
const Iemail = document.querySelector(".email");
const Isenha = document.querySelector(".senha");

// Função para realizar o login
function login() {
    fetch("http://localhost:8080/clientes/login",
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({
                email: Iemail.value,   // Valor do campo email
                senha: Isenha.value    // Valor do campo senha
            })
        })
        .then(function (res) {
            if (res.status === 200) {
                // Redireciona para a página da área do cliente se o login for bem-sucedido
                window.location.href = "TelaCliente.html";
            } else {
                alert("Login inválido! Verifique suas credenciais.");
            }
        })
        .catch(function (res) {
            console.log(res);
        });
}

// Adiciona o evento ao formulário para prevenir a ação padrão e executar o login
formulario.addEventListener('submit', function (event) {
    event.preventDefault();
    login();
});
