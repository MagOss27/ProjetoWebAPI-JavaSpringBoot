// Função para buscar a lista de usuários
function carregarUsuarios() {
    fetch("http://localhost:8080/clientes", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        // Seleciona o div onde os cards serão exibidos
        const tabelaUsuarios = document.getElementById('usuarios');

        // Limpa o conteúdo existente (caso exista)
        tabelaUsuarios.innerHTML = '';

        // Itera sobre a lista de usuários retornada
        data.forEach(usuario => {
            // Cria um card para cada usuário
            const card = document.createElement('div');
            card.className = 'card';

            // Cria um título com o ID do usuário
            const titulo = document.createElement('h3');
            titulo.textContent = `ID: ${usuario.id}`;

            // Cria um campo de texto para o nome do usuário
            const nomeCampo = document.createElement('input');
            nomeCampo.type = 'text';
            nomeCampo.value = usuario.nome;

            // Cria um campo de texto para o e-mail do usuário
            const emailCampo = document.createElement('input');
            emailCampo.type = 'email';
            emailCampo.value = usuario.email;

            // Cria um botão para deletar o usuário
            const botaoDeletar = document.createElement('button');
            botaoDeletar.textContent = 'Deletar';
            botaoDeletar.onclick = () => {
                deletarUsuario(usuario.id);
            };

            // Adiciona os elementos ao card
            card.appendChild(titulo);
            card.appendChild(document.createTextNode('Nome:'));
            card.appendChild(nomeCampo);
            card.appendChild(document.createTextNode('Email:'));
            card.appendChild(emailCampo);
            card.appendChild(botaoDeletar); // Adiciona o botão de deletar ao card

            // Adiciona o card ao contêiner
            tabelaUsuarios.appendChild(card);
        });
    })
    .catch(error => {
        console.error('Erro ao carregar os usuários:', error);
    });
}

// Função para deletar um usuário
function deletarUsuario(id) {
    fetch(`http://localhost:8080/clientes/${id}`, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (response.status === 204) {
            alert('Usuário deletado com sucesso!');
            carregarUsuarios(); // Recarrega a lista de usuários após a exclusão
        } else {
            alert('Erro ao deletar o usuário!');
        }
    })
    .catch(error => {
        console.error('Erro ao deletar o usuário:', error);
    });
}

// Carrega a lista de usuários quando a página é carregada
window.onload = carregarUsuarios;