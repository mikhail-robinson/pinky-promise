import { Router } from 'express'

import * as db from '../db/usersDB'
import { validateAccessToken } from '../auth0'
import { user_draft_schema } from '../../models/user_models'

const router = Router()

export default router

router.post('/', validateAccessToken, async (req, res) => {
  try {
    const input = req.body
    const userData = user_draft_schema.parse(input)
    const user = await db.addUser(userData)
    res.json(user)
  } catch (error) {
    if (error instanceof Error) {
      console.error(error)
      res.status(500).json({ error: 'Internal Server Error' })
    }
  }
})

// router.get('/', async (req, res) => {
//   try {
//     const fruits = await db.getAllFruits()

//     res.json({ fruits: fruits.map((fruit) => fruit.name) })
//   } catch (error) {
//     console.log(error)
//     res.status(500).json({ message: 'Something went wrong' })
//   }
// })
