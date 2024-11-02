document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    // Obtenha a lista de usuários do localStorage ou inicie uma nova lista
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    
    // Adicione o novo usuário
    const novoUsuario = { id: usuarios.length + 1, nome: nome, email: email };
    usuarios.push(novoUsuario);
    
    // Salve a lista atualizada de usuários no localStorage
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    
    document.getElementById('cadastroForm').reset();
    
    atualizarTabela();
});

function atualizarTabela() {
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    const tableBody = document.getElementById('usuariosTable').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = ''; // Limpa a tabela

    usuarios.forEach(usuario => {
        const row = tableBody.insertRow();
        row.insertCell(0).innerText = usuario.id;
        row.insertCell(1).innerText = usuario.nome;
        row.insertCell(2).innerText = usuario.email;
    });
}

// Atualize a tabela ao carregar a página
window.onload = atualizarTabela;
