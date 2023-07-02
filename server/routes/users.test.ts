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
import * as db from '../db/dataBaseFunctions/usersDB'
import { User, UserDraft } from '../../models/user_models'
import { getMockToken } from '../db/dataBaseFunctions/mockToken'
const testDb = knex(config.test)
vi.mock('../db/dataBaseFunctions/usersDB')
beforeAll(async () => {
  await testDb.migrate.latest()
})

beforeEach(async () => {
  await testDb.seed.run()
})

afterAll(async () => {
  await testDb.destroy()
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

describe('PUT /api/v1/user', () => {
  it('Should return 200 when updating a user profile', async () => {
    const fakeProfile: UserDraft = {
      name: 'NewNameFromTest',
      username: 'NewUsernameFromTest',
      bio: 'NewBioFromTest',
    }

    vi.mocked(db.updateUser).mockResolvedValue(1)
    const response = await request(server)
      .patch('/api/v1/user')
      .set('authorization', `Bearer ${getMockToken()}`)
      .send(fakeProfile)
    expect(response.status).toBe(200)
  })

  it('should return 400 if the body does not match the zod schema', async () => {
    const fakeProfile = {}

    vi.mocked(db.updateUser).mockResolvedValue(1)
    const response = await request(server)
      .patch('/api/v1/user')
      .set('authorization', `Bearer ${getMockToken()}`)
      .send(fakeProfile)
    expect(response.status).toBe(400)
  })

  it('should return 400 if the user does not exist', async () => {
    const fakeProfile: UserDraft = {
      name: 'fakeName',
      username: 'fakeUserName',
      bio: 'fakeBio',
    }

    vi.mocked(db.updateUser).mockResolvedValue(0) 
    const response = await request(server)
      .patch('/api/v1/user')
      .set('authorization', `Bearer ${getMockToken()}`)
      .send(fakeProfile)
    expect(response.status).toBe(400)
  })
})

