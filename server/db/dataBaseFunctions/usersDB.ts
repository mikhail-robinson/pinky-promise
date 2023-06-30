import connection from '../connection'
import { User, UserDraft } from '../../../models/user_models'

export function getUser(id: string, db = connection): Promise<User> {
  return db('users').where('auth0_id', id).select().first()
}

export function addUser(input: UserDraft, auth0Id: string, db = connection) {
  const { username, name, bio } = input

  return db('users').insert({ auth0_id: auth0Id, username, name, bio })
}
