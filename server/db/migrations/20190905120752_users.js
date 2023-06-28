exports.up = function (knex) {
  return knex.schema.createTable('users', (table) => {
    table.string('auth0_id').primary()
    table.string('username')
    table.string('name')
    table.string('bio')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('users')
}
