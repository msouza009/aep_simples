
# Sistema Simples de Gerenciamento de Usuários e Senhas

## Descrição:
Este projeto é uma aplicação simples desenvolvida com Node.js, Express e SQLite para gerenciar usuários e senhas com funcionalidades básicas de registro e geração de senha.

## Instalação:
1. Certifique-se de ter o Node.js instalado.
2. Extraia os arquivos do projeto e navegue até o diretório do projeto no terminal.
3. Execute o comando:
   ```
   npm install
   ```

## Execução:
Para iniciar o servidor, execute o comando:
```
npm start
```

O servidor estará rodando na porta 3000.

## Endpoints disponíveis:
1. **Registrar Usuário**:
   - Rota: `/register`
   - Método: `POST`
   - Corpo da requisição: `{ "nome": "Nome", "email": "email@exemplo.com", "senha": "senha123" }`

2. **Gerar Senha para Usuário**:
   - Rota: `/generate-password`
   - Método: `POST`
   - Corpo da requisição: `{ "id_usuario": 1, "senha": "novaSenha123" }`
