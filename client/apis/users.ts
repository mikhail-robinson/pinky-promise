import request from 'superagent'
import { User } from '../../models/user_models'

const rootUrl = '/api/v1'

export async function getUser(token: string): Promise<User[]> {
  const res = await request
    .get(rootUrl + `/users/`)
    .set('Authorization', `Bearer ${token}`)
    .set('Content-Type', 'application/json')
  return res.body as User[]
}
