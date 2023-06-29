exports.seed = function (knex) {
  return knex('friends').then(function () {
    return knex('friends').insert([
      {
        id: 1,
        user_id: 'auth0|6491331aa4bd45e690ea1e87',
        friend_user_id: 'google-oauth2|117005350284520001031',
        date_created: '2023-06-30T02:05:35.428Z',
      },
    ])
  })
}
