# Knex CRUD-API

- [] Para iniciar um projeto `npm init -y`
- [] Instalar depedências ` npm i knex express pg nodemon`
- [] Criar um arquivo Knex `npx knex init` 
- [] Logar no banco de dados local `psql -U postgres`
- [] Criar uma migration `npx knex migrate:make nome_da_tabela`
- [] Rodar o comando de criação da tabela `npx knex migrate:latest`

## Comando SQL

- INSERT 
  * knex('table').insert({valores})
