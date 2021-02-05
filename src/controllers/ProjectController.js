const knex = require('../database');

module.exports = {
  async index(request, response, next) {
    try {
      const { user_id, page =1  } = request.query;

      const query = knex('projects').limit(5)
      .offset((page -1) * 5)
      const countObject = knex('projects').count()


      if(user_id) {
        query.where({ user_id })
        .join('users', 'users.id', '=', 'projects.user_id')
        .select('projects.*', 'users.username');
        countObject.where({ user_id })
      }
      const [ count ] =  await countObject;
      response.header('X-Total-Count', count['count']);
  

      const result = await query;
      return response.json(result);
    } catch (error) {
      next(error);
    }
  },

  async create(request, response, next) {
    try {
      const { title, user_id } = request.body;
      await knex('projects').insert({
        title,
        user_id
      });
      return response.status(201).send('');

    } catch (error) {
      next(error);
    }
  }
}