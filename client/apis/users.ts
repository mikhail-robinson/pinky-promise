import request from 'superagent'
import { users } from '../../models/user_models'

const rootUrl = '/api/v1'

export async function getUser(token: string): Promise<string[]> {
  const res = await request
  .get(rootUrl + `/users/`)
  .set('Authorization', `Bearer ${token}`)
  .set('Content-Type', 'application/json')
    return res.body as users
  
}
