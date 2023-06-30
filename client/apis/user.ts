import request from 'superagent'
import { UserDraft, User } from '../../models/user_models'

const rootUrl = '/api/v1/user'

export async function insertProfile(userDraft: UserDraft, token: string) {
  return await request
    .post(rootUrl)
    .set('Authorization', `Bearer ${token}`)
    .set('Content-Type', 'application/json')
    .send(userDraft)
}

export async function getUser(token: string): Promise<User> {
  const res = await request
    .get(rootUrl)
    .set('Authorization', `Bearer ${token}`)
    .set('Content-Type', 'application/json')
  return res.body as User
}

export async function updateProfile(userDraft: UserDraft, token: string) {
  return await request
    .put(rootUrl)
    .set('Authorization', `Bearer ${token}`)
    .set('Content-Type', 'application/json')
    .send(userDraft)
}
