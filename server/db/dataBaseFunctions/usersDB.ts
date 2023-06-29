import connection from '../connection'
import { User } from '../../../models/user_models'

export function getUser(id: string, db = connection): Promise<User> {
  return db('users').where('auth0_id', id).select().first()
}
