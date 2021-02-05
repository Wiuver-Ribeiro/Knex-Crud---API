
exports.up = function(knex) {
  return knex.schema.createTable('projects', function (table) {
    table.increments('id');
    table.text('title')
  
    //Relationship
    //Primeiro nome do campo e o segundo e qual tabela e campo ele está referenciado
    table.integer('user_id').references('users.id').notNullable()
    .onDelete('CASCADE');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('projects');
};
