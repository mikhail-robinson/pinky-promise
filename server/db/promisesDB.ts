import connection from './connection'
import { promise } from '../../models/promise_models'

export function getAllPromises(db = connection): Promise<promise[]> {
  return db('promises').select()
}

export function getPromiseById(
  db = connection,
  id: string
): Promise<promise[]> {
  return db('promises').where('id', id).select()
}
