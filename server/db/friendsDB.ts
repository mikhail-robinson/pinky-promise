import connection from './connection'
import { friend } from '../../models/friends_models'


export function getAllFriends(db = connection): Promise<friend[]> {
  return db('friends').select()
}

