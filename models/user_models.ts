import * as z from 'zod'

export const UserDraftSchema = z.object({
  username: z.string(),
  name: z.string(),
  bio: z.string(),
})

export const User = UserDraftSchema.extend({
  id: z.string(),
})

export type UserDraft = z.infer<typeof UserDraftSchema>
export type User = z.infer<typeof User>
