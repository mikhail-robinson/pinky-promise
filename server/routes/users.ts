import { Router } from 'express'

import * as db from '../db/usersDB'
import { validateAccessToken } from '../auth0'

const router = Router()

export default router

// router.get('/', async (req, res) => {
//   try {
//     const fruits = await db.getAllFruits()

//     res.json({ fruits: fruits.map((fruit) => fruit.name) })
//   } catch (error) {
//     console.log(error)
//     res.status(500).json({ message: 'Something went wrong' })
//   }
// })
