import request from 'superagent'
import {
  PledgeFrontEnd,
  PledgeDraftSchemaFrontEnd,
} from '../../models/pledge_models'

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

export async function addPromise(
  pledgeDraft: PledgeDraftSchemaFrontEnd,
  token: string
) {
  await request
    .post(rootUrl)
    .set('Authorization', `Bearer ${token}`)
    .set('Content-Type', 'application/json')
    .send(pledgeDraft)
}

export async function getPromisesbyUserId(
  token: string
): Promise<PledgeFrontEnd[]> {
  const res = await request.get(rootUrl).set('Authorization', `Bearer ${token}`)
  return res.body
}
