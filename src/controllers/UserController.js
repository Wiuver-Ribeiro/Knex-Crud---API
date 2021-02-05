// const { update } = require('../database');
const knex = require('../database');
// const { delete } = require('../routes');

module.exports = {
  async index(request, response) {
    const result = await knex('users');

    return response.json(result);
  },

  async create(request, response, next) {
    try {

      const { username } = request.body;
      await knex('users').insert({
        username
      });
      return response.status(201).send('');
    } catch (error) {
      next(error)
    }
  },

  async update(request, response, next) {
    try {
      const { id } = request.params;
      const { username } = request.body;

      await knex('users').update({
        username
      }).where({ id });
      return response.status(201).send('');

    } catch (error) {
      next(error);  
    }
  },

  async delete(request, response, next) {
    try {
      const { id } = request.params;
      await knex('users').where({ id }).delete();

      return response.send('');
    } catch (error) {
      next(error);
    }
  },
} 