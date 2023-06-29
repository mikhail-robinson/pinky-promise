import request from 'superagent'
import { Pledge, PledgeDraft } from '../../models/pledge_models'

const rootUrl = '/api/v1'

export async function addPromise(pledgeDraft: PledgeDraft, token: string) {
  await request
    .post(rootUrl + `/promises/`)
    .set('Authorization', `Bearer ${token}`)
    .set('Content-Type', 'application/json')
    .send(pledgeDraft)
}
