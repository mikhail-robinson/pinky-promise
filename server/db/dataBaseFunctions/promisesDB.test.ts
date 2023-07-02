import { beforeEach, beforeAll, afterAll, describe, it, expect } from 'vitest'
import knex from 'knex'
import config from '../knexfile'
const testDb = knex(config.test)

import * as db from './promisesDB'
import { PledgeFrontEnd } from '../../../models/pledge_models'

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
    const data = await db.getAllPromises(testDb)
    const promiseArrLength = data.length
    const promiseAmount = await db.getAllPromises(testDb)

    expect(promiseAmount).toHaveLength(promiseArrLength)
  })
})

describe('getPromisesById', () => {
  it('returns the correct information', async () => {
    const promise = (await db.getPromiseByIdWithFriendName(
      1,
      testDb
    )) as PledgeFrontEnd

    expect(promise).toHaveProperty('promiseId')
    expect(promise).toHaveProperty('promiseName')
    expect(promise).toHaveProperty('promiseDescription')
    expect(promise).toHaveProperty('userId')
    expect(promise).toHaveProperty('status')
    expect(promise).toHaveProperty('userId')
    expect(promise).toHaveProperty('friendName')
  })
})

describe('addPromise ', () => {
  it('adds a promise to the database', async () => {
    const test = {
      promiseName: 'Enemaker',
      promiseDescription: 'Remain enemies',
      userId: 'auth0|6491331aa4bd45e690ea1e87',
      friendUserId: 'google-oauth2|117005350284520001031',
      status: 'Pending',
      dateDue: '2023-06-30T02:05:35.428Z',
    }
    await db.addPromise(test, testDb)
    const [PromiseForm] = await testDb('promises').where({
      promise_name: test.promiseName,
      promise_description: test.promiseDescription,
      user_id: test.userId,
      friend_user_id: test.friendUserId,
      status: test.status,
      date_due: test.dateDue,
    })

    expect(PromiseForm.promise_name).toBe(test.promiseName)
    expect(PromiseForm.promise_description).toBe(test.promiseDescription)
    expect(PromiseForm.user_id).toBe(test.userId)
    expect(PromiseForm.friend_user_id).toBe(test.friendUserId)
    expect(PromiseForm.status).toBe(test.status)
    expect(PromiseForm.date_due).toBe(test.dateDue)
  })
})

describe('getAllPromisesbyId', () => {
  it('returns the correct information', async () => {
    const promise = await db.getAllPromisesById(
      'auth0|6491331aa4bd45e690ea1e87',
      testDb
    )

    expect(promise[0]).toHaveProperty('promiseId')
    expect(promise[0]).toHaveProperty('promiseName')
    expect(promise[0]).toHaveProperty('friendName')
  })
})
