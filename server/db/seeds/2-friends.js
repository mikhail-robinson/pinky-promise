exports.seed = function (knex) {
    return knex('friends')
      .then(function () {
        return knex('friends').insert([
          {id: 1, user_id: '1', friend_user_id: '3'}
        ])
      })
  }
  