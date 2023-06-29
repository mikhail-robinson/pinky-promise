exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users')
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {auth0_id: 'auth0|6491331aa4bd45e690ea1e87', username: 'khailjuice', name: 'Mikhail', bio: 'Fun loving guy'},
        {auth0_id: 'google-oauth2|117005350284520001031', username: 'Andyroo', name: 'Andrew', bio: 'Guy loving fun'},
        {auth0_id: 'auth0|649caf539da0538e8a440ef7', username: 'Maia', name: 'Maia', bio: 'Fun loving guy'},
        {auth0_id: 'google-oauth2|105045456381689455682', username: 'Rocio', name: 'Rocio', bio: 'Fun loving guy'},
        {auth0_id: 'auth0|649cac0335ec6771d5573424', username: 'Steve', name: 'Jordan', bio: 'Fun loving guy'},
        {auth0_id: 'auth0|649cbc8bcb6899372f3cc882', username: 'NotDan', name: 'Daniel Grabczewski', bio: 'Made the repo'},
      ])
    })
}
