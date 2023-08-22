const express = require ("express")
const userRouter = express.Router();


const {getAllUser, getUser}= require ("../controller/user.controller")
const {createUser, login} = require ("../controller/auth.controller")


userRouter.get("/", getAllUser);
userRouter.post("/add-user", createUser);
userRouter.post("/login-user",login)
userRouter.get("/:id",getUser)


module.exports=userRouter