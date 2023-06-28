import request from 'superagent'
import { user_draft } from '../../models/user_models'

const rootUrl = '/api/v1'

export async function addUser(userDraft: user_draft) {
  return await request.post(rootUrl + '/user').send(userDraft)
}
