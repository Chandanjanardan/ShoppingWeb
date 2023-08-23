const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const catchAsync = require("../error/error.controller")
const userModel = require("../models/user.model")

// apis
// registration



// getAllUser
const getAllUser = async (req, res) => {
    const {authorization}=req.header
    console.log(authorization)
    try {
        
     const allUser= await userModel.find({})
    
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

// login
// const userLogin = async (req, res) => {
//     const { username, password } = req.body;
    
//     try {
//       const data = await userModel.findOne({ username });
//       // console.log(data)
  
//       if (data) {
//         if (await bcrypt.compare(password, data.password)) {
          
//           const token = jwt.sign({ data }, process.env.JWT_TOKEN, {
//             expiresIn: "12h",
//           });
//        return res.json({
//             message: `${data.username} logged in successfully`,
//             token: token,
//             username: data.username,
//             role: data.role,
//           });
//         }
//         return res.json({
//           message: `Incorrect password`,
//         });
//       }
//       return res.json({
//         message: "User doesn't exist or Incorrect email",
//       });
//     } catch (error) {
//       console.log(error);
//       return res.send("SOMETHING WENT WRONG !");
//     }
//   };
  




module.exports = {
 
  getAllUser,
  getUser

};