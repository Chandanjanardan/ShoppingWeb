const jwt = require("jsonwebtoken")
require("dotenv").config()

const secret = process.env.JWT_SECRET
const protect = async(req,res,next)=>{
    const {authorization} = req.headers
    console.log(authorization)
    let token;
    if 
    (req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
        token = req.headers.authorization.split(" ")[1]
        console.log(token)
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