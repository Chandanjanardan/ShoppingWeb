const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const catchAsync = require("../error/error.controller")
const userModel = require("../models/user.model")

// apis
// registration


// const createUser = catchAsync(async (req, res,next) => {
   
//       const { username, phone, password } = req.body;
//       const encodePass = await bcrypt.hash(password, 10);
//       console.log(username,phone,password)
//       const userObj = new userModel({
//         username: username,
//         phone: phone,
//         password: encodePass,
//       });
//       const usernameCheck= await userModel.findOne({username})
//       if(usernameCheck){
//         return res.status(302).json({
//             status:"found",
//             msg:{
//                 msg:`${username} already have an account`
//             }
//         })
//       }else{
//       const addUser = await userModel(userObj).save();
//       console.log(addUser);
//       res.status(200).json({
//         status:"success",
//         data:{
//         userAdded: `${addUser} is registed successfully`
//         }
//       })}
    
//   })

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