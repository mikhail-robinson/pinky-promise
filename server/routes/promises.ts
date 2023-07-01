import { Router } from 'express'

import * as db from '../db/dataBaseFunctions/promisesDB'
import { validateAccessToken } from '../auth0'
import { PledgeFrontEnd, pledgeStatusUpdate } from '../../models/pledge_models'

const router = Router()

router.get('/:promiseId', validateAccessToken, async (req, res) => {
  const promiseId = Number(req.params.promiseId)
  const auth0Id = req.auth?.payload.sub

  if (!auth0Id) {
    res.status(400).json({ message: 'Please provide an id' })
    return
  }

  try {
    const promise = (await db.getPromiseByIdWithFriendName(
      promiseId
    )) as PledgeFrontEnd
    // console.log(pledge)

    res.status(200).json(promise)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Unable to get promise' })
  }
})

router.put('/:promiseId', validateAccessToken, async (req, res) => {
  try {
    const promiseUpdateResult = pledgeStatusUpdate.safeParse(req.body)
    console.log(req.body);
    
    if (!promiseUpdateResult) {
      res.status(400).json({ message: 'Invalid pledge' })
      return
    }
    const updatedPromise = pledgeStatusUpdate.parse(req.body)

    const auth0Id = req.auth?.payload.sub
    if (auth0Id) {
      const promise = await db.updatePromiseStatus(updatedPromise)
      // console.log(pledge)
      res.status(200).json(promise)
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Unable to update promise' })
  }
})
export default router
