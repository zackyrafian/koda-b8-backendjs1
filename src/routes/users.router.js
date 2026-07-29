import { Router } from "express"
import * as usersContoller from "../controllers/users.contoller.js"
import authMiddlewware from "../middlewares/auth.middleware.js"
import uploadMiddleware from "../middlewares/upload.middleware.js"
import multer from "multer"

const usersRouter = Router()

usersRouter.use(authMiddlewware)
usersRouter.get('/', usersContoller.getAll)
usersRouter.get('/:id', usersContoller.getById)
usersRouter.delete('/:id', usersContoller.deleteUser)
usersRouter.patch('/:id', usersContoller.edit)
usersRouter.patch('/:id/picture', uploadMiddleware, usersContoller.updateProfile)

export default usersRouter