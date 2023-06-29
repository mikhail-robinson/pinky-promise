import connection from '../connection'
import { Pledge } from '../../../models/promise_models'

export function getAllPromises(db = connection): Promise<Pledge[]> {
  return db('promises').select()
}

export function getPromiseById(
  db = connection,
  id: string
): Promise<Pledge[]> {
  return db('promises').where('id', id).select('promise_name as promiseName')
}
