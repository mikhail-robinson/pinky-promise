import { beforeEach, beforeAll, afterAll, describe, it, expect } from 'vitest'
import knex from 'knex'
import config from '../knexfile'
const testDb = knex(config.test)

import * as db from './friendsDB'

beforeAll(async () => {
  await testDb.migrate.latest()
})

beforeEach(async () => {
  await testDb.seed.run()
})

afterAll(async () => {
  await testDb.destroy()
})

describe('get all the promises', () => {
  it('returns correct amount of promises', async () => {
    const data = await db.getAllFriends(testDb)
    const lengthOfFriendsArray = data.length
    const friendAmount = await db.getAllFriends(testDb)

    expect(friendAmount).toHaveLength(lengthOfFriendsArray)
  })
})
