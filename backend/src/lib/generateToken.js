import dotenv from "dotenv";
import jwt from "jsonwebtoken"

dotenv.config();

export const generateToken=(userId,res)=>{

    const token =jwt.sign({userId},process.env.JWT_SECRET,{
        expiresIn:"7d"
    })

    res.cookie("userAccessToken",token,{
        maxAge:1000*60*60*24*7,
        httpOnly:true, //prevent xss attacks cross site scripting atacks 
        sameSite:"strict", //prevent csrf attacks now it would not accessible by js
        secure:process.env.NODE_ENV!=="development"

    })

    return token;

}