import * as z from 'zod'

export const pledgeDraftSchemaFrontEnd = z.object({
  promiseName: z.string(),
  promiseDescription: z.string(),
  friendUserId: z.string(),
  status: z.string(),
  dateDue: z.string(),
})

export const pledgeDraftSchema = pledgeDraftSchemaFrontEnd.extend({
  userId: z.string(),
})

export const pledge = pledgeDraftSchema.extend({
  id: z.number(),
  dateCreated: z.string(),
})

export type PledgeFrontEnd = {
  promiseId: number
  promiseName: string
  promiseDescription: string
  userId: string
  friendName: string
  status: string
  dateCreated: string
  dateDue: string
}

export const pledgeForm = {
  promiseName: z.string(),
  promiseDescription: z.string(),
  friendUserId: z.string(),
  status: z.string(),
  dateDue: z.string(),
}

export type PledgeDraft = z.infer<typeof pledgeDraftSchema>
export type Pledge = z.infer<typeof pledge>
export type PledgeDraftSchemaFrontEnd = z.infer<
  typeof pledgeDraftSchemaFrontEnd
>
