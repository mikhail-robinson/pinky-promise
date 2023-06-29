import connection from '../connection'
import { Promise } from '../../../models/promise_models'

export function getAllPromises(db = connection): Promise<Promise[]> {
  return db('promises').select()
}

export function getPromiseById(
  db = connection,
  id: string
): Promise<Promise[]> {
  return db('promises').where('id', id).select()
}
