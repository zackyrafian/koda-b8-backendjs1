import authRouter from "./auth.router.js";
import { Router } from "express";
import usersRouter from "./users.router.js";

const router = Router() 
router.use("/auth", authRouter)
router.use("/users", usersRouter)
export default router