document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    const table = document.getElementById('usuariosTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    newRow.insertCell(0).innerText = table.rows.length; // ID (apenas um número incremental)
    newRow.insertCell(1).innerText = nome;
    newRow.insertCell(2).innerText = email;

    // Limpa os campos do formulário
    document.getElementById('cadastroForm').reset();
});
