import * as z from 'zod'

export const FriendsDraftSchema = z.object({
  dateCreated: z.date(),
  userId: z.string(),
  friendUserId: z.string(),
})

export const Friends = FriendsDraftSchema.extend({
  id: z.number(),
})

export type FriendsDraft = z.infer<typeof FriendsDraftSchema>
export type Friend = z.infer<typeof Friends>
