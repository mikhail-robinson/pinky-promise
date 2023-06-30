exports.seed = function (knex) {
  return knex('promises').then(function () {
    return knex('promises').insert([
      {
        id: 1,
        promise_name: 'Finish this assignment',
        promise_description: 'Please let us finish',
        user_id: 'auth0|6491331aa4bd45e690ea1e87',
        friend_user_id: 'google-oauth2|117005350284520001031',
        status: 'pending',
        date_created: '2023-06-30T02:05:35.428Z',
        date_due: '2023-06-30T02:05:35.428Z',
      },
    ])
  })
}
