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
      'auth0|649caf539da0538e8a440ef7',
      testDb
    )
    const friendLength = friends.length

    expect(friends).toHaveLength(friendLength)
    expect(friends[0]).toHaveProperty('friendName')
    expect(friends[0]).toHaveProperty('username')
    expect(friends[0]).toHaveProperty('friendUserId')
  })
})

describe('addFriend', () => {
  it('adds a friend to the database', async () => {
    const fakeFriend = {
      id: 1,
      userId: 'auth0|6491331aa4bd45e690ea1e87',
      friendUserId: 'google-oauth2|117005350284520001031',
      dateCreated: '2023-06-30T02:05:35.428Z',
    }

    await db.addFriend(fakeFriend, testDb)

    const [friendForm] = await testDb('friends').where({
      id: fakeFriend.id,
      user_id: fakeFriend.userId,
      friend_user_id: fakeFriend.friendUserId,
      date_created: fakeFriend.dateCreated,
    })

    expect(friendForm.user_id).toBe(fakeFriend.userId)
    expect(friendForm.friend_user_id).toBe(fakeFriend.friendUserId)
    expect(friendForm.date_created).toBe(fakeFriend.dateCreated)
  })
})
