import request from 'superagent'
import { user_draft, user } from '../../models/user_models'

const rootUrl = '/api/v1/users'

export async function insertProfile(userDraft: user_draft, token: string) {
  return await request
    .post(rootUrl)
    .set('Authorization', `Bearer ${token}`)
    .set('Content-Type', 'application/json')
    .send(userDraft)
}

export async function getUser(token: string): Promise<user> {
  const res = await request
    .get(rootUrl)
    .set('Authorization', `Bearer ${token}`)
    .set('Content-Type', 'application/json')
  return res.body as user
}
