# Use a imagem oficial do Node.js como imagem base
FROM node:16

# Crie um diretório para a aplicação
WORKDIR /usr/src/app

# Copie o package.json e package-lock.json para o diretório do contêiner
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o restante da aplicação
COPY . .

# Exponha a porta que a aplicação usará
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["node", "server.js"]
