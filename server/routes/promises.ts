import { Router } from 'express'

import * as db from '../db/dataBaseFunctions/promisesDB'
import { validateAccessToken } from '../auth0'

const router = Router()

router.get('/', validateAccessToken, async (req, res) => {
  const auth0Id = req.auth?.payload.sub

  if (!auth0Id) {
    res.status(400).json({ message: 'Please provide an id' })
    return
  }

  try {
    const user = await db.getAllPromisesById(auth0Id)
    res.status(200).json(user)
  } catch (error) {
    console.error(error)
    res
      .status(500)
      .json({ message: 'Unable to retrieve promises from database' })
  }
})

export default router
