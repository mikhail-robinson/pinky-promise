import request from 'superagent'
import { FriendNames } from '../../models/friends_models'

const rootUrl = '/api/v1/friends'

export async function getAllFriendsById(token: string) {
  const res = await request
    .get(rootUrl)
    .set('Authorization', `Bearer ${token}`)
    .set('Content-Type', 'application/json')

  return res.body as FriendNames
}
