import * as z from 'zod'

export const PledgeDraftSchema = z.object({
  promiseName: z.string(),
  promiseDescription: z.string(),
  userId: z.string(),
  friendUserId: z.string(),
  status: z.string(),
  dateCreated: z.date(),
  dateDue: z.date(),
})

export const Pledge = PledgeDraftSchema.extend({
  id: z.number(),
})

export type PledgeDraft = z.infer<typeof PledgeDraftSchema>
export type Pledge = z.infer<typeof Pledge>
