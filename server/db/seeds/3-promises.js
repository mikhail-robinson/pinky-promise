exports.seed = function (knex) {
    return knex('promises')
      .then(function () {
        return knex('promises').insert([
          {id: 1, promise_name: 'Finish this assignment', promise_description: 'Please let us finish', user_id: '1', friend_user_id: '3', status: 'pending',}
        ])
      })
  }
  