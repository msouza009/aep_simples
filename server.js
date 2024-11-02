const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

// Configurações
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Rotas
app.post('/api/cadastrar', (req, res) => {
    const { nome, email, senha } = req.body;
    // Lógica para cadastrar usuário no banco de dados
    res.json({ message: 'Usuário cadastrado com sucesso!' });
});

app.post('/api/gerar-senha', (req, res) => {
    const { usuarioId, descricao } = req.body;
    // Lógica para gerar senha e armazenar no banco de dados
    res.json({ message: 'Senha gerada com sucesso!' });
});

app.get('/api/historico-logins', (req, res) => {
    // Lógica para obter o histórico de logins do banco de dados
    const historico = []; // Substitua isso pela lógica real
    res.json(historico);
});

// Iniciar o servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
