import { Router } from 'express'
import * as db from '../db/dataBaseFunctions/usersDB'
import { validateAccessToken } from '../auth0'
import { userDraftSchema } from '../../models/user_models'

const router = Router()

router.get('/', validateAccessToken, async (req, res) => {
  const auth0Id = req.auth?.payload.sub

  if (!auth0Id) {
    res.status(400).json({ message: 'Please provide an id' })
    return
  }

  try {
    const user = await db.getUser(auth0Id)
    res.status(200).json(user)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Unable to insert new user to database' })
  }
})

router.post('/', validateAccessToken, async (req, res) => {
  try {
    const input = req.body
    const userData = userDraftSchema.parse(input)
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
