import * as z from 'zod'

export const friendsDraftSchema = z.object({
  dateCreated: z.string(),
  userId: z.string(),
  friendUserId: z.string(),
})

export const friends = friendsDraftSchema.extend({
  id: z.number(),
})

export const friendNames = z.object({
  friendName: z.string(),
  username: z.string(),
  friendUserId: z.string(),
})

export type FriendsDraft = z.infer<typeof friendsDraftSchema>
export type Friend = z.infer<typeof friends>
export type FriendNames = z.infer<typeof friendNames>