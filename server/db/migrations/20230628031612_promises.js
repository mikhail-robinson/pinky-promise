exports.up = function (knex) {
    return knex.schema.createTable('promises', (table) => {
      table.increments('id')
      table.string('promise_name')
      table.string('promise_description')
      table.string('user_id').references('users.auth0_id')
      table.string('friend_user_id').references('users.auth0_id')
      table.string('status')
      table.timestamps('date_created')
      table.date('date_due')
    })
  }
  
  exports.down = function (knex) {
    return knex.schema.dropTable('promises')
  }
  