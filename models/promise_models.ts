import * as z from 'zod'

export const Promise_Draft_Schema = z.object({
  promise_name: z.string(),
  promise_description: z.string(),
  user_id: z.string(),
  friend_user_id: z.string(),
  status: z.string(),
  date_created: z.date(),
  date_due: z.date(),
})

export const Promises = Promise_Draft_Schema.extend({
  id: z.number(),
})

export type Promise_Draft = z.infer<typeof Promise_Draft_Schema>
export type Promise = z.infer<typeof Promises>
