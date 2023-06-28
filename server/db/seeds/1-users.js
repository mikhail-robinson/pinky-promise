exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users')
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {auth0_id: '1', username: 'khailjuice', name: 'Mikhail', bio: 'Fun loving guy'},
        {auth0_id: '2', username: 'andyroo', name: 'Andrew', bio: 'Guy loving fun'},
        {auth0_id: '3', username: 'khailjuice', name: 'Maia', bio: 'Fun loving guy'},
        {auth0_id: '4', username: 'khailjuice', name: 'Rocio', bio: 'Fun loving guy'},
        {auth0_id: '5', username: 'khailjuice', name: 'Steve', bio: 'Fun loving guy'},
        {auth0_id: '6', username: 'NotDan', name: 'Daniel Grabczewski', bio: 'Made the repo'},
      ])
    })
}
