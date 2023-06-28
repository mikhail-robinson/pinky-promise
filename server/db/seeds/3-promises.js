exports.seed = function (knex) {
    return knex('promises')
      .then(function () {
        return knex('promises').insert([
          {id: 1, promise_name: 'Finish this assignment', promise_description: 'Please let us finish', status: 'pending',}
        ])
      })
  }
  