const express = require('express');
const connection = require('./config/db');
const app = express();

app.use(express.json()); // Middleware para parsear JSON

// Rota para inserir um novo usuário
app.post('/usuarios', (req, res) => {
    const { nome, email, senha } = req.body;

    if (!nome || !email || !senha) {
        return res.status(400).send('Nome, email e senha são obrigatórios.');
    }

    const query = 'INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)';
    connection.query(query, [nome, email, senha], (err, results) => {
        if (err) {
            console.error('Erro ao inserir usuário:', err); // Log do erro
            return res.status(500).send(`Erro ao inserir usuário: ${err.message}`); // Resposta com erro
        }
        res.status(201).send(`Usuário inserido com ID: ${results.insertId}`); // Resposta de sucesso
    });
});

// Rota para recuperar todos os usuários
app.get('/usuarios', (req, res) => {
    connection.query('SELECT * FROM usuarios', (err, results) => {
        if (err) {
            console.error('Erro ao recuperar usuários:', err);
            return res.status(500).send('Erro ao recuperar usuários'); // Resposta com erro
        }
        res.status(200).json(results); // Resposta com os usuários
    });
});

// Inicia o servidor na porta 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
