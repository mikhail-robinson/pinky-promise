import request from 'superagent'
import { user_draft } from '../../models/user_models'

const rootUrl = '/api/v1/users'

export async function insertProfile(userDraft: user_draft, token: string) {
  return await request
    .post(rootUrl + '/:id')
    .set('Authorization', `Bearer ${token}`)
    .set('Content-Type', 'application/json')
    .send(userDraft)
}
