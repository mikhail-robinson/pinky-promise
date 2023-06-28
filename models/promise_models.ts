import * as z from 'zod'

export const promise_draft_schema = z.object({
  promise_name: z.string(),
  promise_description: z.string(),
  user_id: z.string(),
  friend_user_id: z.string(),
  status: z.string(),
  date_created: z.date(),
  date_due: z.date(),
})

export const promises = promise_draft_schema.extend({
  id: z.number(),
})

export type promise_draft = z.infer<typeof promise_draft_schema>
export type promise = z.infer<typeof promises>