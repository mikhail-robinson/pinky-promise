import connection from '../connection'
import {
  AddFriendDraft,
  Friend,
  FriendNames,
} from '../../../models/friends_models'

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
      'friends.friend_user_id as friendUserId'
    )
}

export function getNotFriends(auth0_id: string, db = connection) {
  return db('users')
    .leftJoin('friends', function () {
      this.on(function () {
        this.on('users.auth0_id', '=', 'friends.user_id').andOn(
          'friends.friend_user_id',
          '=',
          db.raw('?', [auth0_id])
        )
      }).orOn(function () {
        this.on('users.auth0_id', '=', 'friends.friend_user_id').andOn(
          'friends.user_id',
          '=',
          db.raw('?', [auth0_id])
        )
      })
    })
    .whereNull('friends.user_id')
    .andWhere('users.auth0_id', '!=', auth0_id) // Exclude the current user
    .select(
      'users.name as friendName',
      'users.username as username',
      'users.auth0_id as friendUserId'
    )
}

export function addFriend(
  input: AddFriendDraft,
  auth0_id: string,
  db = connection
) {
  const newDate = new Date().toString()
  const { friendUserId } = input
  return db('friends').insert({
    user_id: auth0_id,
    friend_user_id: friendUserId,
    date_created: newDate,
  })
}
