import { Router } from 'express'

import * as db from '../db/dataBaseFunctions/promisesDB'
import { validateAccessToken } from '../auth0'

const router = Router()


export default router
