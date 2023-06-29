import * as z from 'zod'

export const PledgeDraftSchema = z.object({
  promise_name: z.string(),
  promise_description: z.string(),
  user_id: z.string(),
  friend_user_id: z.string(),
  status: z.string(),
  date_created: z.date(),
  date_due: z.date(),
})

export const Pledge = PledgeDraftSchema.extend({
  id: z.number(),
})

export type PledgeDraft = z.infer<typeof PledgeDraftSchema>
export type Pledge = z.infer<typeof Pledge>
