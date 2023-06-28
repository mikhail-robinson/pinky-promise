exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users')
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {auth0_id: 'Hi', username: 'khailjuice', name: 'Mikhail', bio: 'Fun loving guy'}
      ])
    })
}
