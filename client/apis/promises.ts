import request from 'superagent'
import { Pledge } from '../../models/pledge_models'

const rootUrl = '/api/v1/promises'

export async function getPromiseById(promiseId: number): Promise<Pledge> {
  const res = await request
  .get(rootUrl + `${promiseId}`)
    return res.body as Pledge  
}