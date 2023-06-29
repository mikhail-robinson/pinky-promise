import connection from '../connection'
import { Friend } from '../../../models/friends_models'

export function getAllFriends(db = connection): Promise<Friend[]> {
  return db('friends').select()
}
