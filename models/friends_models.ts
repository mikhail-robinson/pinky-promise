import * as z from 'zod'

export const friendsDraftSchema = z.object({
  dateCreated: z.date(),
  userId: z.string(),
  friendUserId: z.string(),
})

export const friends = friendsDraftSchema.extend({
  id: z.number(),
})

export type FriendsDraft = z.infer<typeof friendsDraftSchema>
export type Friend = z.infer<typeof friends>
