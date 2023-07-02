import connection from '../connection'
import { Friend, FriendNames } from '../../../models/friends_models'

export function getAllFriends(
  auth0: string,
  db = connection
): Promise<Friend[]> {
  return db('friends').select()
}

export function getAllFriendsById(
  auth0Id: string,
  db = connection
): Promise<FriendNames[]> {
  return db('friends')
    .join('users', 'friends.friend_user_id', 'users.auth0_id')
    .where('friends.user_id', auth0Id)
    .select(
      'users.name as friendName',
      'users.username as username',
      'friends.friend_user_id as friendUserId',
    )
}
