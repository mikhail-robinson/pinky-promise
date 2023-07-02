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

describe('POST /api/v1/friends', () => {
  it('should return 201 when creating a new profile', async () => {
    const fakeFriend: FriendsDraft = {
      userId: 'auth0|6491331aa4bd45e690ea1e87',
      friendUserId: 'google-oauth2|117005350284520001031',
      dateCreated: '2023-06-30T02:05:35.428Z',
    }

    vi.mocked(db.addFriend).mockResolvedValue([15])
    const response = await request(server)
      .post('/api/v1/friends')
      .set('authorization', `Bearer ${getMockToken()}`)
      .send(fakeFriend)
    expect(response.status).toBe(201)
  })

  it('should return 400 if the body does not match the zod schemea', async () => {
    const fakeProfile = {}

    vi.mocked(db.addFriend).mockResolvedValue([15])
    const response = await request(server)
      .post('/api/v1/friends')
      .set('authorization', `Bearer ${getMockToken()}`)
      .send(fakeProfile)
    expect(response.status).toBe(400)
  })
})
