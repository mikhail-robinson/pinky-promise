import { Router } from 'express'
import * as db from '../db/dataBaseFunctions/friendsDB'
import { validateAccessToken } from '../auth0'

const router = Router()

router.get('/', validateAccessToken, async (req, res) => {
  const auth0Id = req.auth?.payload.sub

  if (!auth0Id) {
    res.status(400).json({ message: 'Please provide an id' })
  }
  try {
    const friends = await db.getAllFriendsById(auth0Id as string)
    res.status(200).json(friends)
    
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'unable to retrieve data' })
  }
})

export default router
