import request from 'superagent'
import { FriendNames, FriendsDraft } from '../../models/friends_models'

const rootUrl = '/api/v1/friends'

export async function getAllFriendsById(token: string) {
  const res = await request
    .get(rootUrl)
    .set('Authorization', `Bearer ${token}`)
    .set('Content-Type', 'application/json')

  return res.body as FriendNames[]
}

export async function addFriend(friendsDraft: FriendsDraft, token: string) {
  await request
    .post(rootUrl)
    .set('Authorization', `Bearer ${token}`)
    .set('Content-Type', 'application/json')
    .send(friendsDraft)
}

export async function getNotFriends(token: string) {
  const res = await request
    .get(rootUrl + '/add-friends')
    .set('Authorization', `Bearer ${token}`)
    .set('Content-Type', 'application/json')

  return res.body as FriendNames[]
}
