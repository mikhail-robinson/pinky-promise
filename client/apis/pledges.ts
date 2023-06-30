import request from 'superagent'
import { Pledge } from '../../models/promise_models'

const rootUrl = '/api/v1'

export async function getPromiseById(promiseId: number): Promise<Pledge> {
  const res = await request
  .get(rootUrl + `/pledges/${promiseId}`)
    return res.body as Pledge  
}
