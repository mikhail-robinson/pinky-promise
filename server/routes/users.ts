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
  const input = req.body
  try {
    const profileDraftResult = userDraftSchema.safeParse(input)

    if (!profileDraftResult.success) {
      res.status(400).json({ message: 'Invalid form' })
      return
    }
    const auth0Id = req.auth?.payload.sub
    const userData = userDraftSchema.parse(input)

    if (profileDraftResult.success && auth0Id) {
      const user = await db.addUser({ ...userData }, auth0Id)
      res.status(201).json(user)
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error(error)
      res.status(500).json({ error: 'Internal Server Error' })
    }
  }
})

router.patch('/', validateAccessToken, async (req, res) => {
  const input = req.body
  const auth0Id = req.auth?.payload.sub

  if (!auth0Id) {
    res.status(400).json({ message: 'Please log in' })
    return
  }

  try {
    const userDraftResult = userDraftSchema.safeParse(input)

    if (!userDraftResult.success) {
      res.status(400).json({ message: 'Invalid update' })
      return
    }

    const userData = userDraftSchema.parse(input)

    if (userDraftResult.success && auth0Id) {
      const user = await db.updateUser({ ...userData }, auth0Id)
      if (user === 0) {
        res.status(400).json({ message: 'User does not exist' })
      } else {
        res.status(200).json(user)
      }
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error(error)
      res.status(500).json({ error: 'Internal Server Error' })
    }
  }
})

export default router
