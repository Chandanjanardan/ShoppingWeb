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

const allProduct=async(req,res)=>{
  return  res.status(200).json({
    data:[

        {
          id: 1,
          name: 'Earthen Bottle',
          href: '#',
          price: '$48',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
          imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
        },
        {
          id: 2,
          name: 'Nomad Tumbler',
          href: '#',
          price: '$35',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
          imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
        },
        {
          id: 3,
          name: 'Focus Paper Refill',
          href: '#',
          price: '$89',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
          imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
        },
        {
          id: 4,
          name: 'Machined Mechanical Pencil',
          href: '#',
          price: '$35',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
          imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
        }]
    
        
    })
}



module.exports = {
 
  getAllUser,
  getUser,allProduct

};