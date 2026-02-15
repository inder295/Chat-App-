import jwt from "jsonwebtoken"
import User from "../model/user.model.js";

export const protectRoute=async(req,res,next)=>{
  try {
    const token=req.cookies.userAccessToken;
    
    if(!token){
        return res.status(400).json({
            message:"Unauthorized user without token"
        })
    }

    const decode=jwt.verify(token,process.env.JWT_SECRET);

    if(!decode){
        return res.status(400).json({
            message:"Token expired."
        })
    }

    const user=await User.findById(decode.userId).select("-password");

    if(!user){
        return res.status(400).json({
            message:"User not found."
        })
    }

    req.user=user;

    next();


  } catch (error) {

    return res.status(400).json({
        message:"Error in checking the user cookie."
    })
    
  }
}