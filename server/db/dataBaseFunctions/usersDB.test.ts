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
import config from '../knexfile'
import request from 'supertest'
import server from '../../server'
import * as db from './usersDB'
import { User, UserDraft } from '../../../models/user_models'
import { getMockToken } from './mockToken'
const testDb = knex(config.test)
vi.mock('./usersDB')
beforeAll(async () => {
  await testDb.migrate.latest()
})

beforeEach(async () => {
  await testDb.seed.run()
})

afterAll(async () => {
  await testDb.destroy()
})

describe('getUserById', () => {
  it('makes sure the user contains the correct propertys', async () => {
    expect.assertions(3)
    const user = await db.getUser('1', testDb)

    expect(user).toHaveProperty('name')
    expect(user).toHaveProperty('username')
    expect(user).toHaveProperty('bio')
  })
})

describe('userExist', () => {
  it('returns true if user exist', async () => {
    const userExist = await db.getUser('non user', testDb)
    expect(userExist).toBeFalsy
  })
  it('returns true if user exist', async () => {
    const userExist = await db.getUser('1', testDb)
    expect(userExist).toBeTruthy()
  })
})

describe('POST /api/v1/user', () => {
  it('should return 201 when creating a new profile', async () => {
    const fakeProfile: UserDraft = {
      name: 'NameFromTest',
      username: 'NicknameFromTest',
      bio: 'BioFromTest',
    }

    vi.mocked(db.addUser).mockResolvedValue([15])
    const response = await request(server)
      .post('/api/v1/user')
      .set('authorization', `Bearer ${getMockToken()}`)
      .send(fakeProfile)
    expect(response.status).toBe(201)
  })

  it('should return 400 if the body does not match the zod schemea', async () => {
    const fakeProfile = {}

    vi.mocked(db.addUser).mockResolvedValue([15])
    const response = await request(server)
      .post('/api/v1/user')
      .set('authorization', `Bearer ${getMockToken()}`)
      .send(fakeProfile)
    expect(response.status).toBe(400)
  })
})
