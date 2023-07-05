import connection from '../connection'
import {
  Pledge,
  PledgeFrontEnd,
  PledgeStatusUpdate,
  PledgeDraft,
} from '../../../models/pledge_models'

export function getAllPromises(db = connection): Promise<Pledge[]> {
  return db('promises').select()
}

export async function getPromiseByIdWithFriendName(
  promiseId: number,
  userId: string,
  db = connection
): Promise<PledgeFrontEnd> {
  const friends1 = await db('promises')
    .join('users', 'promises.friend_user_id', 'users.auth0_id')
    .where('id', promiseId)
    .andWhere('promises.user_id', userId)
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
  const friends2 = await db('promises')
    .join('users', 'promises.user_id', 'users.auth0_id')
    .where('id', promiseId)
    .andWhere('promises.friend_user_id', userId)
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

  return { ...friends1, ...friends2 }
}

export function addPromise(input: PledgeDraft, db = connection) {
  const dateObject = new Date().toLocaleDateString()

  const {
    promiseName,
    promiseDescription,
    userId,
    friendUserId,
    status,
    dateDue,
  } = input

  return db('promises').insert({
    promise_name: promiseName,
    promise_description: promiseDescription,
    user_id: userId,
    friend_user_id: friendUserId,
    status,
    date_created: dateObject,
    date_due: dateDue,
  })
}

export async function getAllPromisesById(
  userId: string,
  db = connection
): Promise<PledgeFrontEnd[]> {
  const friends1 = await db('promises')
    .join('users', 'promises.friend_user_id', 'users.auth0_id')
    .where('promises.user_id', userId)
    .andWhere('promises.status', '=', 'pending')
    .select(
      'promises.id as promiseId',
      'promises.promise_name as promiseName',
      'users.username as friendName'
    )

  const friends2 = await db('promises')
    .join('users', 'promises.user_id', 'users.auth0_id')
    .where('promises.friend_user_id', userId)
    .andWhere('promises.status', '=', 'pending')
    .select(
      'promises.id as promiseId',
      'promises.promise_name as promiseName',
      'users.username as friendName'
    )
  return [...friends1, ...friends2]
}

export function updatePromiseStatus(
  promise: PledgeStatusUpdate,
  db = connection
) {
  return db('promises')
    .where('id', promise.promiseId)
    .update({ status: promise.status })
}
