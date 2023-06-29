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

describe('getAllFriends', () => {
  it('returns correct amount of promises', async () => {
    const friendData = await db.getAllFriends(
      'auth0|6491331aa4bd45e690ea1e87',
      testDb
    )
    const lengthOfFriendsArray = friendData.length

    expect(friendData).toHaveLength(lengthOfFriendsArray)
  })
})

describe('getAllFriendsById', () => {
  it('returns a list of friends', async () => {
    const friends = await db.getAllFriendsById(
      'auth0|6491331aa4bd45e690ea1e87',
      testDb
    )
    const friendLength = friends.length

    expect(friends).toHaveLength(friendLength)
    expect(friends[0]).toHaveProperty('friendName')
    expect(friends[0]).toHaveProperty('username')
    expect(friends[0]).toHaveProperty('friendUserId')
  })
})
