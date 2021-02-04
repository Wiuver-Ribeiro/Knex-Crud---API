const knex = require('../database');

module.exports = {
  async index(request, response) {
    const result = await knex('users');

    return response.json(result);
  }
} 