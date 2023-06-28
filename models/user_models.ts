import * as z from 'zod'

export const user_draft_schema = z.object({
  username: z.string(),
  name: z.string(),
  bio: z.string(),
})

export const user = user_draft_schema.extend({
  id: z.string(),
})

export type user_draft = z.infer<typeof user_draft_schema>
export type user = z.infer<typeof user>
