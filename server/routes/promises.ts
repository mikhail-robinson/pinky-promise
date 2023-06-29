import { Router } from 'express'
import { pledgeDraftSchema } from '../../models/pledge_models'
import * as db from '../db/dataBaseFunctions/promisesDB'
import { validateAccessToken } from '../auth0'

const router = Router()

router.post('/', validateAccessToken, async (req, res) => {
  try {
    const promiseData = pledgeDraftSchema.safeParse(req.body)

    if (!promiseData.success) {
      res.status(400).json({
        error: {
          title: 'Input did not match schema',
        },
      })
      return
    }

    await db.addPromise(promiseData.data)
    res.sendStatus(201)
  } catch (error) {
    if (error instanceof Error) {
      console.error('This is the error', error)
      res.status(500).json({ error: 'Unable to add new promise' })
    }
  }
})

export default router
