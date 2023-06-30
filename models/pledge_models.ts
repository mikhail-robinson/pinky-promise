import * as z from 'zod'

export const pledgeDraftSchema = z.object({
  promiseName: z.string(),
  promiseDescription: z.string(),
  userId: z.string(),
  friendUserId: z.string(),
  status: z.string(),
  dateCreated: z.string(),
  dateDue: z.string(),
})

export const pledge = pledgeDraftSchema.extend({
  id: z.number(),
})

export type PledgeDraft = z.infer<typeof pledgeDraftSchema>
export type Pledge = z.infer<typeof pledge>
