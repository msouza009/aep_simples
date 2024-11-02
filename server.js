const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const db = require('./db'); // Importar a conexão com o banco de dados

// Configurações
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Rotas
app.post('/api/cadastrar', (req, res) => {
    const { nome, email, senha } = req.body;
    // Lógica para cadastrar usuário no banco de dados
    const query = 'INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)';
    db.query(query, [nome, email, senha], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Erro ao cadastrar usuário' });
        }
        res.json({ message: 'Usuário cadastrado com sucesso!' });
    });
});

app.post('/api/gerar-senha', (req, res) => {
    const { usuarioId, descricao } = req.body;
    // Lógica para gerar senha e armazenar no banco de dados
    const query = 'INSERT INTO senhas (usuario_id, descricao) VALUES (?, ?)';
    db.query(query, [usuarioId, descricao], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Erro ao gerar senha' });
        }
        res.json({ message: 'Senha gerada com sucesso!' });
    });
});

app.get('/api/historico-logins', (req, res) => {
    // Lógica para obter o histórico de logins do banco de dados
    const query = 'SELECT * FROM historico_logins'; // Substitua pela lógica real
    db.query(query, (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Erro ao obter histórico' });
        }
        res.json(results);
    });
});

// Iniciar o servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
