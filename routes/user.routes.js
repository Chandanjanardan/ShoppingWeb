const express = require ("express")
const userRouter = express.Router();


const {getAllUser,createUser, getUser}= require ("../controller/user.controller")


userRouter.get("/", getAllUser);
userRouter.post("/add-user", createUser);
userRouter.get("/:id",getUser)


module.exports=userRouter