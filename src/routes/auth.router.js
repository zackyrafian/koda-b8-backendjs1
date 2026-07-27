import { Router } from "express";
import * as authContoller from "../controllers/auth.contoller.js"

const authRouter = Router()
authRouter.post("/register", authContoller.register)

export default authRouter