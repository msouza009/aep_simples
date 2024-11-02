document.getElementById('gerarSenhaForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    const tamanho = parseInt(document.getElementById('tamanho').value);
    if (isNaN(tamanho) || tamanho <= 0) {
        alert("Por favor, insira um tamanho válido para a senha.");
        return;
    }

    const senha = gerarSenha(tamanho);
    document.getElementById('senhaGerada').value = senha; // Exibe a senha gerada
});

function gerarSenha(tamanho) {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*';
    let senha = '';
    for (let i = 0; i < tamanho; i++) {
        const indice = Math.floor(Math.random() * caracteres.length);
        senha += caracteres.charAt(indice);
    }
    return senha;
}
