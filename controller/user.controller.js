const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userModel = require("../models/user.model")

// apis
// registration

const createUser = async (req, res) => {
    try {
      const { username, phone, password } = req.body;
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
      res.status(200).json({
        status:"success",
        data:{
        userAdded: `${addUser} is registed successfully`
        }
      })}
    } catch (error) {
      console.log("error in adduser", error);
      res.status(500).json({
        error: "Error adding assuser",
      });
    }
    
  };

// getAllUser
const getAllUser = async (req, res) => {
    try {
        
     const allUser= await userModel.find({})
     console.log(allUser)
      res.status(200).json({
        status:"success",
        results:userModel.length,
        users:{
            users:allUser
        }
      })
    
    } catch (error) {
        res.status(400).status({
            status:"not found",
            msg:`Error in get alluser ${error}` 
        })
    }
}


// getuserby id
const getUser= async(req,res)=>{
    try {
        const user= await userModel.findById(req.params.id)
        res.status(200).json({
            status:"success",
            user:{
                user
            }
        })
        
    } catch (error) {
        res.status(400).json({
            msg:"some thing is wrong in id"
        })
        console.log("error from getUserby id",error)
    }
}




module.exports = {
  createUser,
  getAllUser,
  getUser

};