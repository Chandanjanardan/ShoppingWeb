require('dotenv').config();
const jwt = require("jsonwebtoken")
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const catchAsync = require("../error/error.controller")
const userModel = require("../models/user.model")
const secret = process.env.JWT_SECRET;



const createUser = catchAsync(async (req, res,next) => {
   
    const { username, phone, password } = req.body;
    const token =jwt.sign({username,phone},secret,{
        expiresIn:"12h"
    })
    const cookieOptions = {
        expires: new Date(Date.now() + 90 * 2 * 24 * 60 * 60 * 1000),
        httpOnly: true,
    }
    const encodePass = await bcrypt.hash(password, 10);
    console.log(username,phone,password)
    const userObj = new userModel({
       
      username: username,
      phone: phone,
      password: encodePass,
    });
    const usernameCheck= await userModel.findOne({username})
    if(usernameCheck){
      return res.status(302).json({
          status:"found",
          
          msg:{
              msg:`${username} already have an account`
          }
      })
    }else{
    const addUser = await userModel(userObj).save();
    console.log(addUser);
    res.status(200).cookie("jwt",token,cookieOptions).json({
      status:"success",
      token,
      data:{
      userAdded: `${addUser} is registed successfully`
      }
    })}
  
})


const login=async(req,res)=>{
    const {username,password}= req.body
    // console.log(req.headers)
    try {
        
        
        // 1 username and password exist
        if(!username || !password){
            return res.status(200).json({
                status:"bad request",
                msg:"Please provide username and password"
            })
            
        }
    const data = await userModel.findOne({username})
    // console.log(await bcrypt.compare(password,data.password))
    
    if(data && (await bcrypt.compare(password,data.password))){
        res
        const token =jwt.sign({data:data},secret,{
            expiresIn:"12h"})
            const cookieOptions = {
                expires: new Date(Date.now() + 90 * 2 * 24 * 60 * 60 * 1000),
                httpOnly: true,
            }
       
            res.status(200).cookie("jwt",token,cookieOptions).json({
            status:"success",
            token,
            data:{
                data
            }        
    })
    }else{
        res.status(400).json({
            status:"Not found",
            msg:"username and password is wrong"
        })
}}
        // 3 If everything is ok send the token
    catch (error) {
        res.status(400).json({msg:`error in signin ${error}`})
    }
}

module.exports={createUser,login}