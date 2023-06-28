exports.seed = function (knex) {
    return knex('friends')
      .then(function () {
        return knex('friends').insert([
          {id: 1}
        ])
      })
  }
  