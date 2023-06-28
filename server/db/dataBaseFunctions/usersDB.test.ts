import { beforeEach, beforeAll, afterAll, describe, it, expect } from 'vitest'
import knex from 'knex'
import config from '../knexfile'
const testDb = knex(config.test)

import * as db from './usersDB'

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
  it('returns the correct id from the user', async () => {
    expect.assertions(3)
    const user = await db.getUser(testDb, '1')

    expect(user.username).toBe('khailjuice')
    expect(user.name).toBe('Mikhail')
    expect(user.bio).toBe('Fun loving guy')
  })
})

describe('userExist', () => {
  it('returns true if user exist', async () => {
    const userExist = await db.getUser(testDb, 'non user')
    expect(userExist).toBeFalsy
  })
  it('returns true if user exist', async () => {
    const userExist = await db.getUser(testDb, '1')
    expect(userExist).toBeTruthy()
  })
})
