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

export const pledgeStatusUpdate = z.object({
  promiseId: z.number(),
  status: z.string()
})

export const pledgeFrontEnd = z.object({
  promiseId: z.number(),
  promiseName: z.string(),
  promiseDescription: z.string(),
  userId: z.string(),
  friendName: z.string(),
  status: z.string(),
  dateCreated: z.string(),
  dateDue: z.string(),
})

export type PledgeFrontEnd = z.infer<typeof pledgeFrontEnd>

export type PledgeDraft = z.infer<typeof pledgeDraftSchema>
export type Pledge = z.infer<typeof pledge>
export type PledgeDraftSchemaFrontEnd = z.infer<
  typeof pledgeDraftSchemaFrontEnd
>
export type PledgeStatusUpdate = z.infer<typeof pledgeStatusUpdate>
