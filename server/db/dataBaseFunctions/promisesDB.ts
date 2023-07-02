import connection from '../connection'
import {
  Pledge,
  PledgeFrontEnd, PledgeStatusUpdate,
  PledgeDraft,
} from '../../../models/pledge_models'

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

export function addPromise(input: PledgeDraft, db = connection) {
  const newDate = new Date().toString()

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
    date_created: newDate,
    date_due: dateDue,
  })
}

export async function getAllPromisesById(
  userId: string,
  db = connection
): Promise<PledgeFrontEnd[]> {
  return await db('promises')
    .join('users', 'promises.friend_user_id', 'users.auth0_id')
    .select(
      'id as promiseId',
      'promise_name as promiseName',
      'users.username as friendName'
    )
    .where('user_id', userId)
}

export function updatePromiseStatus(promise:PledgeStatusUpdate, db = connection) {
  return db('promises').where('id', promise.promiseId).update({status: promise.status})
}