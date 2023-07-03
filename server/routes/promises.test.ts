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
import { PledgeFrontEnd, PledgeStatusUpdate } from '../../models/pledge_models'
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
  }),
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

describe('GET /api/v1/promises/promiseId', () => {
  it('200 should return a promise', async () => {
    const fakePledge: PledgeFrontEnd = {
      promiseId: 1,
      promiseName: 'name',
      promiseDescription: 'text',
      userId: '1',
      friendName: '3',
      status: 'pending',
      dateCreated: 'dateCreated',
      dateDue: 'dateDue ',
    }
    vi.mocked(db.getPromiseByIdWithFriendName).mockResolvedValue(fakePledge)
    const response = await request(server)
      .get('/api/v1/promises/1')
      .set('authorization', `Bearer ${getMockToken()}`)
    expect(response.status).toBe(200)
    expect(response.body).toEqual(fakePledge)
  }),
  it('should return 500 when no access token is passed', async () => {
    vi.mocked(db.getPromiseByIdWithFriendName).mockRejectedValue(new Error('test'))
    const response = await request(server)
      .get('/api/v1/promises/1')
      .set('authorization', `Bearer ${getMockToken()}`)
    expect(response.status).toBe(500)
    expect(response.body).toEqual({
      message: 'Unable to get promise',
    })
  })
})

describe('PUT /api/v1/promises/:promiseId', () => {
  it('200 should return a promise', async () => {
    const fakeUpdatePledge: PledgeStatusUpdate = {
      promiseId: 1,
      status: 'kept', 
    }
    vi.mocked(db.updatePromiseStatus).mockResolvedValue(1)
    const response = await request(server)
    .put(`/api/v1/promises/1`)
    .set('Authorization', `Bearer ${getMockToken()}`)
    .set('Content-Type', 'application/json')
    .send(fakeUpdatePledge)
    expect(response.status).toBe(200)
    expect(response.body).toEqual(1)
  }),
  it('should return 500 when no access token is passed', async () => {
    vi.mocked(db.updatePromiseStatus).mockRejectedValue(new Error('test'))
    const response = await request(server)
      .put('/api/v1/promises/1')
      .set('authorization', `Bearer ${getMockToken()}`)
    expect(response.status).toBe(500)
    expect(response.body).toEqual({
      message: 'Unable to update promise',
    })
  })
})