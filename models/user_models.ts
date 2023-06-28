import * as z from 'zod'

export const users_draft_schema = z.object({
  username: z.string(),
  name: z.string(),
  bio: z.string(),
})

export const users = users_draft_schema.extend({
  id: z.number(),
})

export type user_draft = z.infer<typeof users_draft_schema>
export type users = z.infer<typeof users>
