import { Router } from "express"

const userRouter = Router()

userRouter.get("/user", async function(req, res) {
    const username = req.body.user as unknown
    const password = req.body.password
    
})