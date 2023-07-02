import { Router } from 'express'
import { pledgeDraftSchema } from '../../models/pledge_models'
import * as db from '../db/dataBaseFunctions/promisesDB'
import { validateAccessToken } from '../auth0'
import { PledgeFrontEnd } from '../../models/pledge_models'

const router = Router()

router.post('/', validateAccessToken, async (req, res) => {
  try {
    const auth0Id = req.auth?.payload.sub
    if (!auth0Id) {
      res.status(400).json({ message: 'Please provide an id' })
      return
    }
    const input = { ...req.body, userId: auth0Id }

    const promiseData = pledgeDraftSchema.safeParse(input)

    if (!promiseData.success) {
      res.status(400).json({
        error: {
          title: 'Input did not match schema',
        },
      })
      return
    }

    await db.addPromise(promiseData.data)
    res.sendStatus(201)
  } catch (error) {
    if (error instanceof Error) {
      console.error('This is the error', error)
      res.status(500).json({ error: 'Unable to add new promise' })
    }
  }
})

router.get('/', validateAccessToken, async (req, res) => {
  const auth0Id = req.auth?.payload.sub
  if (!auth0Id) {
    res.status(400).json({ message: 'Please provide an id' })
    return
  }

  try {
    const user = (await db.getAllPromisesById(auth0Id)) as PledgeFrontEnd[]

    res.status(200).json(user)
  } catch (error) {
    console.error(error)
    res
      .status(500)
      .json({ message: 'Unable to retrieve promises from database' })
  }
})

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
    // console.log(pledge)

    res.status(200).json(pledge)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Unable to get promise' })
  }
})

export default router
