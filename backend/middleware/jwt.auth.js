const jwt = require("jsonwebtoken")
require("dotenv").config()

const secret = process.env.JWT_SECRET
const protect = async(req,res,next)=>{
    const {authorization} = req.headers
    // const cookie= req.headers.cookie.split("=")[1]
    // console.log(authorization)
    let token;
    if 
    (req.headers.authorization.startsWith("Bearer") ||  req.headers.authorization ){
        token = req.headers.authorization.split(" ")[1]
      
        // const decode = await promisify(jwt.verify)(token,secret)
        // console.log(decode)
    }

    if(!token){
        return next (("Please verify yourself"))
    }
   
    const decode = jwt.verify(token,secret)
    return next()
}

module.exports=protect


// const jwt=require("jsonwebtoken")
// // model is optiojnal 
// let token
// const protect =(req,res,next)=>{
//     // const token =req.cookie.jwt 
//     // req.body.jwt ||
//     console.log(req)
    
    
//     console.log(req.headers.cookie)
//     const token = req.headers.cookie
//     console.log(token)

//     if(!token){
        
//         return res.status(403).send("token is missing")
//     }
//     try {
//         jwt.verify(token,secret)
        
//     } catch (error) {
//         return res.status(401).send("Invalid token")
//     }
//     return next()
// }
module.exports=protect