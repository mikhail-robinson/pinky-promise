import { Router } from 'express'

import * as db from '../db/dataBaseFunctions/usersDB'
import { validateAccessToken } from '../auth0'

const router = Router()

export default router

router.get('/', validateAccessToken, async (req, res) => {
  const id = req.auth?.payload.sub

  if (!id) {
    res.status(400).json({ message: 'please login in or create an account' })
    return
  }

  try {
    const displayPromises = await db.getUser(id)
    res.status(200).json(displayPromises)
  } catch (err) {
    if (err instanceof Error) {
      res.status(500).json({ message: 'Unable to retrieve promises' })
    }
  }
})
