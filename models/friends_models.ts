import * as z from 'zod'

export const FriendsDraftSchema = z.object({
  date_created: z.date(),
  user_id: z.string(),
  friend_user_id: z.string(),
})

export const Friends = FriendsDraftSchema.extend({
  id: z.number(),
})

export type FriendsDraft = z.infer<typeof FriendsDraftSchema>
export type Friend = z.infer<typeof Friends>
