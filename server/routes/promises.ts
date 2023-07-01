import { Router } from 'express'

import * as db from '../db/dataBaseFunctions/promisesDB'
import { validateAccessToken } from '../auth0'
import { Pledge, PledgeFrontEnd } from '../../models/pledge_models'

const router = Router()

router.get('/:promiseId', validateAccessToken, async (req, res) => {
  const promiseId = Number(req.params.promiseId)
  const auth0Id = req.auth?.payload.sub

  if (!auth0Id) {
    res.status(400).json({ message: 'Please provide an id' })
    return
  }

  try {
    const pledge = (await db.getPromiseByIdWithFriendName(
      promiseId
    )) as PledgeFrontEnd
    console.log(pledge)

    res.status(200).json(pledge)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Unable to get promise' })
  }
})

export default router
