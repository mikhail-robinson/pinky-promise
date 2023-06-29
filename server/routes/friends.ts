import { Router } from 'express'

import * as db from '../db/dataBaseFunctions/friendsDB'
import { validateAccessToken } from '../auth0'

const router = Router()

export default router
