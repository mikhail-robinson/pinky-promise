import { Router } from 'express'
import { pledgeDraftSchema } from '../../models/pledge_models'
import * as db from '../db/dataBaseFunctions/promisesDB'
import { validateAccessToken } from '../auth0'
import { PledgeFrontEnd, pledgeStatusUpdate } from '../../models/pledge_models'

const router = Router()

router.post('/', validateAccessToken, async (req, res) => {
  try {
    const auth0Id = req.auth?.payload.sub
    if (!auth0Id) {
      res.status(400).json({ message: 'Please provide an id' })
      return
    }
    
    const dateDue = req.body.dateDue.split('-').reverse().join('/')
    
    const input = { ...req.body, userId: auth0Id, dateDue }

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
    const promise = (await db.getPromiseByIdWithFriendName(
      promiseId,
      auth0Id
    )) as PledgeFrontEnd

    res.status(200).json(promise)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Unable to get promise' })
  }
})

router.put('/:promiseId', validateAccessToken, async (req, res) => {
  const input = req.body
  try {
    const promiseUpdateResult = pledgeStatusUpdate.safeParse(input)

    if (!promiseUpdateResult) {
      res.status(400).json({ message: 'Invalid pledge' })
      return
    }
    const updatedPromise = pledgeStatusUpdate.parse(input)

    const auth0Id = req.auth?.payload.sub
    if (promiseUpdateResult.success && auth0Id) {
      const promise = await db.updatePromiseStatus(updatedPromise)
      res.status(200).json(promise)
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Unable to update promise' })
  }
})
export default router
