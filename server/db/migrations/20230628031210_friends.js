exports.up = function (knex) {
    return knex.schema.createTable('friends', (table) => {
      table.increments('id')
      table.string('user_id').references('users.auth0_id')
      table.string('friend_user_id').references('users.auth0_id')
      table.timestamps('date_created')
    })
  }
  
  exports.down = function (knex) {
    return knex.schema.dropTable('friends')
  }
  