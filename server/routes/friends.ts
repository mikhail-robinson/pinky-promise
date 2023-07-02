import { Router } from 'express'
import * as db from '../db/dataBaseFunctions/friendsDB'
import { validateAccessToken } from '../auth0'
import { friendsDraftSchema } from '../../models/friends_models'

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

router.post('/', validateAccessToken, async (req, res) => {
  const input = req.body
  try {
    const friendDraftResult = friendsDraftSchema.safeParse(input)

    if (!friendDraftResult.success) {
      res.status(400).json({ message: 'Invalid form' })
      return
    }
    const auth0Id = req.auth?.payload.sub
    const userData = friendsDraftSchema.parse(input)

    if (friendDraftResult.success && auth0Id) {
      const user = await db.addFriend(userData)
      res.status(201).json(user)
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error(error)
      res.status(500).json({ error: 'Internal Server Error' })
    }
  }
})

router.get('/add-friends', validateAccessToken, async (req, res) => {
  const auth0Id = req.auth?.payload.sub

  if (!auth0Id) {
    res.status(400).json({ message: 'Please provide an id' })
  }
  try {
    const friends = await db.getNotFriends(auth0Id as string)
    res.status(200).json(friends)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'unable to retrieve data' })
  }
})

export default router
