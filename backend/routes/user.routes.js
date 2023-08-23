const express = require ("express")
const userRouter = express.Router();



const {getAllUser, getUser,allProduct}= require ("../controller/user.controller")
const {createUser, login} = require ("../controller/auth.controller");

const protect = require("../middleware/jwt.auth");


userRouter.get("/",protect, getAllUser);
userRouter.post("/add-user", createUser);
userRouter.post("/login-user",login)
// userRouter.get("/:id",getUser)
userRouter.get("/product",protect,allProduct)


module.exports=userRouter