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
    const promise = await db.getPromiseByIdWithFriendName(1, testDb ) as PledgeFrontEnd

    expect(promise).toHaveProperty('promiseId')
    expect(promise).toHaveProperty('promiseName')
    expect(promise).toHaveProperty('promiseDescription')
    expect(promise).toHaveProperty('userId')
    expect(promise).toHaveProperty('status')
    expect(promise).toHaveProperty('userId')
    expect(promise).toHaveProperty('friendName')
  })
})

describe('getAllPromisesbyId', () => {
  it('returns the correct information', async () => {
    const promise = await db.getAllPromisesById(
      'auth0|6491331aa4bd45e690ea1e87',
      testDb
    )

    expect(promise[0]).toHaveProperty('id')
    expect(promise[0]).toHaveProperty('promiseName')
    expect(promise[0]).toHaveProperty('username')
  })
})
