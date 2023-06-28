import { Router } from 'express'

import * as db from '../db/dataBaseFunctions/usersDB'
import { validateAccessToken } from '../auth0'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const fruits = await db.getAllFruits()

    res.json({ fruits: fruits.map((fruit) => fruit.name) })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.post('/protected', validateAccessToken, async (req, res) => {
  const auth0Id = req.auth?.payload.sub
  // STRETCH example of making a friend request
  const friendRequest = {
    user1: auth0Id,
    user2: req.body.user2,
  }
  try {
    res.send('this is a protected route')
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router
