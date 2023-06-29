import connection from '../connection'
import { Pledge, PledgeDraft } from '../../../models/pledge_models'

export function getAllPromises(db = connection): Promise<Pledge[]> {
  return db('promises').select()
}

export function getPromiseById(db = connection, id: string): Promise<Pledge[]> {
  return db('promises').where('id', id).select('promise_name as promiseName')
}

export function addPromise(input: PledgeDraft, db = connection) {
  const newDate = Number(new Date(Date.now()))
  console.log('Are you working here?', input)

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
