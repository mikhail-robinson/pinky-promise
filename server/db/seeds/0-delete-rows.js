exports.seed = async (knex) => {
    await knex('promises').del()
    await knex('friends').del()
    await knex('users').del()
}