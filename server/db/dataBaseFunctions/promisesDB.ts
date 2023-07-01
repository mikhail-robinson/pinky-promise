import connection from '../connection'
import { Pledge, PledgeFrontEnd } from '../../../models/pledge_models'

export function getAllPromises(db = connection): Promise<Pledge[]> {
  return db('promises').select()
}

export function getPromiseByIdWithFriendName(
  id: number,
  db = connection
): Promise<PledgeFrontEnd> {
  return db('promises')
    .join('users', 'promises.friend_user_id', 'users.auth0_id')
    .where('id', id)
    .select(
      'id as promiseId',
      'promise_name as promiseName',
      'promise_description as promiseDescription',
      'user_id as userId',
      'users.username as friendName',
      'status',
      'date_created as dateCreated',
      'date_due as dateDue'
    )
    .first()
}

export async function getAllPromisesById(userId: string, db = connection) {
  return (await db('promises')
    .join('users', 'promises.friend_user_id', 'users.auth0_id')
    .select('id', 'promise_name as promiseName', 'users.username')
    .where('user_id', userId)) as Pledge[]
}
