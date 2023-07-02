import request from 'superagent'
import { PledgeFrontEnd } from '../../models/pledge_models'
import { set } from 'zod'

const rootUrl = '/api/v1/promises'

export async function getPromiseByPromiseId(
  promiseId: number,
  token: string
): Promise<PledgeFrontEnd> {
  const res = await request
    .get(rootUrl + `/` + promiseId)
    .set('Authorization', `Bearer ${token}`)
  return res.body
}

export async function getPromisesbyUserId(
  token: string
): Promise<PledgeFrontEnd[]> {
  const res = await request.get(rootUrl).set('Authorization', `Bearer ${token}`)
  return res.body
}
