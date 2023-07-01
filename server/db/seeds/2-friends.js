exports.seed = function (knex) {
  return knex('friends').then(function () {
    return knex('friends').insert([
      {
        id: 1,
        user_id: 'auth0|6491331aa4bd45e690ea1e87',
        friend_user_id: 'google-oauth2|117005350284520001031',
        date_created: '2023-06-30T02:05:35.428Z',
      },
      {
        id: 2,
        user_id: 'auth0|6491331aa4bd45e690ea1e87',
        friend_user_id: 'auth0|649b980080e8d6023e17e6dd',
        date_created: '2023-06-30T02:05:35.428Z',
      },
      {
        id: 3,
        user_id: 'auth0|649b980080e8d6023e17e6dd',
        friend_user_id: 'auth0|649cac0335ec6771d5573424',
        date_created: '2023-06-30T02:05:35.428Z',
      },
      {
        id: 4,
        user_id: 'auth0|649b980080e8d6023e17e6dd',
        friend_user_id: 'auth0|649cbc8bcb6899372f3cc882',
        date_created: '2023-06-30T02:05:35.428Z',
      },
      {
        id: 5,
        user_id: 'auth0|649b980080e8d6023e17e6dd',
        friend_user_id: 'auth0|649caf539da0538e8a440ef7',
        date_created: '2023-06-30T02:05:35.428Z',
      },
      {
        id: 6,
        user_id: 'auth0|649b980080e8d6023e17e6dd',
        friend_user_id: 'google-oauth2|117005350284520001031',
        date_created: '2023-06-30T02:05:35.428Z',
      },
      {
        id: 7,
        user_id: 'auth0|649caf539da0538e8a440ef7',
        friend_user_id: 'auth0|649cbc8bcb6899372f3cc882',
        date_created: '2023-06-30T02:05:35.428Z',
      },
    ])
  })
}
