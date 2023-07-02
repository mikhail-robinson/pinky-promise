import express from 'express'
import { join } from 'node:path'

import userRoutes from './routes/users'
import promisesRoutes from './routes/promises'
import friendsRoutes from './routes/friends'

const server = express()

server.use(express.json())
server.use(express.static(join(__dirname, 'public')))

server.use('/api/v1/user', userRoutes)
server.use('/api/v1/promises', promisesRoutes)
server.use('/api/v1/friends', friendsRoutes)

export default server
