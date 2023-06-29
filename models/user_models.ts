import * as z from 'zod'

export const User_Draft_Schema = z.object({
  username: z.string(),
  name: z.string(),
  bio: z.string(),
})

export const User = User_Draft_Schema.extend({
  id: z.string(),
})

export type User_Draft = z.infer<typeof User_Draft_Schema>
export type User = z.infer<typeof User>
