import { Router } from 'express'

import * as db from '../db/dataBaseFunctions/usersDB'
import { validateAccessToken } from '../auth0'
import { UserDraftSchema } from '../../models/user_models'

const router = Router()

router.post('/', validateAccessToken, async (req, res) => {
  try {
    const input = req.body
    const userData = UserDraftSchema.parse(input)
    const user = await db.addUser(userData)
    res.json(user)
  } catch (error) {
    if (error instanceof Error) {
      console.error(error)
      res.status(500).json({ error: 'Internal Server Error' })
    }
  }
})

export default router
