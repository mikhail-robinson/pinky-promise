import connection from '../connection'
import { User } from '../../../models/user_models'

export function getUser(db = connection, id: string): Promise<user> {
  return db('users').where('auth0_id', id).select().first()
}
