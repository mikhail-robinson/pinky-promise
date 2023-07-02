import {
  beforeEach,
  beforeAll,
  afterAll,
  describe,
  it,
  expect,
  vi,
} from 'vitest'
import knex from 'knex'
import config from '../db/knexfile'
import request from 'supertest'
import server from '../server'
import * as db from '../db/dataBaseFunctions/promisesDB'

import { getMockToken } from '../db/dataBaseFunctions/mockToken'
const testDb = knex(config.test)
vi.mock('../db/dataBaseFunctions/promisesDB')
beforeAll(async () => {
  await testDb.migrate.latest()
})

beforeEach(async () => {
  await testDb.seed.run()
})

afterAll(async () => {
  await testDb.destroy()
})

describe('GET /api/v1/promises', () => {
  it('should return 200 with an array', async () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const fakePromises: any = [
      {
        promiseId: 1,
        promiseName: 'This is a Promise',
        friendName: 'This is a Username',
      },
    ]

    vi.mocked(db.getAllPromisesById).mockResolvedValue(fakePromises)
    const response = await request(server)
      .get('/api/v1/promises')
      .set('authorization', `Bearer ${getMockToken()}`)
    expect(response.status).toBe(200)
    expect(response.body).toEqual(fakePromises)
  })

  it('should return 500 when no access token is passed', async () => {
    vi.mocked(db.getAllPromisesById).mockRejectedValue(new Error('test'))
    const response = await request(server)
      .get('/api/v1/promises')
      .set('authorization', `Bearer ${getMockToken()}`)
    expect(response.status).toBe(500)
    expect(response.body).toEqual({
      message: 'Unable to retrieve promises from database',
    })
  })
})
