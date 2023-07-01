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
import { Pledge, PledgeDraft } from '../../models/pledge_models'
import { getMockToken } from '../db/dataBaseFunctions/mockToken'
const testDb = knex(config.test)
vi.mock('../db/dataBaseFunctions/promisesDB')
beforeAll(async () => {
  await testDb.migrate.latest()
})

beforeEach(async () => {
  await testDb.seed.run()
})

afterAll(async () => {
  await testDb.destroy()
})
