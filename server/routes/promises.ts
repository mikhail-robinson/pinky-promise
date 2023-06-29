import { Router } from 'express'
import { PledgeDraftSchema } from '../../models/promise_models'
import * as db from '../db/dataBaseFunctions/promisesDB'
import { validateAccessToken } from '../auth0'

const router = Router()

router.post('/', validateAccessToken, async (req, res) => {
  try {
    const input = req.body
    const promiseData = PledgeDraftSchema.parse(input)
    const promise = await db.addPromise(promiseData)
    res.json(promise)
  } catch (error) {
    if (error instanceof Error) {
      console.error(error)
      res.status(500).json({ error: 'Internal Server Error' })
    }
  }
})

export default router
