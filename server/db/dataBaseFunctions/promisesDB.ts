import connection from '../connection'
import { Promise } from '../../../models/promise_models'

export function getAllPromises(db = connection) {
  return db('promises').select() as Promise[]
}

export function getPromiseById(
  db = connection,
  id: string
): Promise<Promise[]> {
  return db('promises').where('id', id).select('promise_name as promiseName')
}
