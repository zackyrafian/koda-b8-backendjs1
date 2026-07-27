import { Router } from "express"
import * as usersContoller from "../controllers/users.contoller.js"

const usersRouter = Router()

usersRouter.get('/', usersContoller.getAll)
usersRouter.get('/:id', usersContoller.getById)
usersRouter.delete('/:id', usersContoller.deleteUser)
usersRouter.patch('/:id', usersContoller.edit)

export default usersRouter