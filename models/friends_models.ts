import * as z from 'zod'

export const Friends_Draft_Schema = z.object({
  date_created: z.date(),
  user_id: z.string(),
  friend_user_id: z.string(),
})

export const Friends = Friends_Draft_Schema.extend({
  id: z.number(),
})

export type Friends_Draft = z.infer<typeof Friends_Draft_Schema>
export type Friend = z.infer<typeof Friends>
