# Make Migration
npm run knex -- migrate:make name-migration

# Update Migration
npm run knex -- migrate:latest

# Rollback migration
npm run knex -- migrate:rollback

# Install dependencies
npm install

# Run devel project
npm run dev

# Run build
npm run build

# Run production
npm run start

# Executando em produção é feito o build do client e adicionado a uma pasta com o nome "public" em seguida é feita a build do server e adicionado esta pasta public ao projeto.

# Necessario instalar no servidor se for linux para manter o servidor executando.
npm install forever -g