import connection from '../connection'
import { User, UserDraft } from '../../../models/user_models'

export function getUser(id: string, db = connection): Promise<User> {
  return db('users').where('auth0_id', id).select().first()
}

export function addUser(input: UserDraft, db = connection) {
  const { username, name, bio } = input
  return db('users').insert({ username, name, bio })
}
