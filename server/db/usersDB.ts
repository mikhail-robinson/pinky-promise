import connection from './connection'
import { users } from '../../models/user_models'

export function getUser(db = connection, id: string): Promise<users[]> {
  return db('users').where('auth0_id', id).select()
}
