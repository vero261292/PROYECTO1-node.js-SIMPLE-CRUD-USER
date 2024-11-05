import { Router } from 'express'
import { getAllUser, putUser, getUserId, deleteUser, postUser } from './UserControllers.js'

const routerUsers = Router()

routerUsers.get('/users', getAllUser)

routerUsers.get('/users/:id', getUserId)

routerUsers.post('/users', postUser)

routerUsers.put('/users', putUser)

routerUsers.delete('/users', deleteUser)

export default routerUsers
