import connection from '../connection'
import { Pledge } from '../../../models/pledge_models'

export function getAllPromises(db = connection): Promise<Pledge[]> {
  return db('promises').select()
}

export function getPromiseById(db = connection, id: string): Promise<Pledge[]> {
  return db('promises').where('id', id).select('promise_name as promiseName')
}

export async function getAllPromisesById(userId: string, db = connection) {
  return (await db('promises')
    .join('users', 'promises.friend_user_id', 'users.auth0_id')
    .select('id', 'promise_name as promiseName', 'users.username')
    .where('user_id', userId)) as Pledge[]
}
