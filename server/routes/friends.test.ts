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

import * as db from '../db/dataBaseFunctions/friendsDB'
import { getMockToken } from '../db/dataBaseFunctions/mockToken'
const testDb = knex(config.test)

vi.mock('../db/dataBaseFunctions/friendsDB')
beforeAll(async () => {
  await testDb.migrate.latest()
})

beforeEach(async () => {
  await testDb.seed.run()
})

afterAll(async () => {
  await testDb.destroy()
})

describe('GET /api/v1/friends', () => {
  it('should return 200 when retrieving friends', async () => {
    const fakeFriends: any = [
      {
        friendName: 'NameFromTest',
        username: 'NicknameFromTest',
        friendUserId: 'UserIDFromTest',
      },
    ]

    vi.mocked(db.getAllFriendsById).mockResolvedValue(fakeFriends)
    const response = await request(server)
      .get('/api/v1/friends')
      .set('authorization', `Bearer ${getMockToken()}`)
    expect(response.status).toBe(200)
    expect(response.body).toEqual(fakeFriends)
  })
})
