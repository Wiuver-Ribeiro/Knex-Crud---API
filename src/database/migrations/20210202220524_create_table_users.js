//criar uma tabela
exports.up = function(knex) { //sempre retorna uma promessa
  //createTable recebe dois argumentos, nome da tabela e uma funcao
  return knex.schema.createTable('users', function(table) {
    table.increments('id');
    table.text('username').unique().notNullable();

    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  })
};

//apagar uma tabela
exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
