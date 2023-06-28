import * as z from 'zod'

export const friends_draft_schema = z.object({
  date_created: z.date(),
  user_id: z.number(),
  friend_user_id: z.number(),
})

export const friends = friends_draft_schema.extend({
  id: z.number(),
})

export type friends_draft = z.infer<typeof friends_draft_schema>
export type friend = z.infer<typeof friends>
