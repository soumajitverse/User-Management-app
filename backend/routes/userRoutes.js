import express from "express"
import { createUser, deleteUser, getAllUsers, updateUser } from "../controllers/userController.js"

const userRouter = express.Router()

userRouter.get("/", getAllUsers)
userRouter.post("/create-user", createUser)
userRouter.put("/update-user/:id", updateUser)
userRouter.put("/delete-user/:id", deleteUser)

export default userRouter