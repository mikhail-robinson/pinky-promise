import connection from '../connection'
import { Pledge } from '../../../models/pledge_models'

export function getAllPromises(db = connection): Promise<Pledge[]> {
  return db('promises').select()
}

export function getPromiseById(db = connection, id: string): Promise<Pledge[]> {
  return db('promises').where('id', id).select('promise_name as promiseName')
}

export async function getAllPromisesById(db = connection, userId: string) {
  return await db('promises').select('promise_name as promiseName')
}

table.increments('id')
table.string('promise_name')
table.string('promise_description')
table.string('user_id').references('users.auth0_id')
table.string('friend_user_id').references('users.auth0_id')
table.string('status')
table.string('date_created')
table.string('date_due')
