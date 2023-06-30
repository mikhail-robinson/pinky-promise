import request from 'superagent'
import { PledgeFrontEnd } from '../../models/pledge_models'

const rootUrl = '/api/v1/promises'

export async function getPromiseById(promiseId: number, token: string): Promise<PledgeFrontEnd> {
  const res = await request
  .get(rootUrl + `/` + promiseId)
  .set('Authorization', `Bearer ${token}`)
    return res.body
}