import cloudinary from "../lib/cloudinary.js";
import { generateToken } from "../lib/generateToken.js";
import User from "../model/user.model.js"
import bcrypt from "bcryptjs"

export const signup=async (req,res)=>{
     
    
    const {fullname,email,password}=req.body;



    if(!fullname || !email || !password){
        return res.status(400).json({
            message:"All fields are required"
        })
    }

    if(password.length<6){
        return res.status(400).json({
            message:"Password character length must be 6 characters."
        })
    }


    try {

        const user=await User.findOne({email});

        if(user){
            return res.status(400).json({
                message:"Message already exists."
            })
        }


        const salt=await bcrypt.genSalt(10);
        const hashPassword=await bcrypt.hash(password,salt);

        const newUser= new User({
            fullname,
            email,
            password:hashPassword,
        
        })

        if(newUser){
           generateToken(newUser._id,res);
           await newUser.save();

           res.status(201).json({
            _id:newUser._id,
            fullname:newUser.fullname,
            email:newUser.email,
            profilePic:newUser.profilePic
           })
        }else{
            res.status(400).json({
                message:"Invalid user data."
            })
        }


    } catch (error) {
        
        return res.status(400).json({
            message:"Error in creating the account.",
            error:error.message
        })
    }


}

export const signin=async(req,res)=>{
    const {email,password}=req.body;

    if(!email || !password){
        return res.status(400).json({
            message:"All credenials needed."
        })
    }

    try {
        const user=await User.findOne({email});
        if(!user){
            return res.status(400).json({
                message:"User not found"
            })
        }

        const isPasswordMatched=await bcrypt.compare(password,user.password);

        if(!isPasswordMatched){
             return res.status(400).json({
                message:"Invalid credentials"
            })
        }
        

        await generateToken(user._id,res);

        return res.status(200).json({
            message:"Signin successfull",
            fullname:user.fullname,
            email:user.email,
            profilePic:user.profilePic
        })


    } catch (error) {
        return res.status(500).json({
            message:"Something went wrong.Please try again.",
            error:error.message
        })
    }
}

export const logout=async(req,res)=>{
    
    try {
        res.cookie("userAccessToken","",{maxAge:0});
        
        return res.status(200).json({
            message:"logout successfull"
        })
        
    } catch (error) {

        return res.status(500).json({
            message:"Error in logout.",
            error:error.message 
        })
        
    }


}

export const updateProfile=async(req,res)=>{
    try {
        const {profilePic}=req.body;
        const userId=req.user._id;

        if(!profilePic){
            return res.status(400).json({
                message:"Profile pic required."
            })
        }

        const uploadResponse=await cloudinary.uploader.upload(profilePic);
        const updatedUser=await User.findByIdAndUpdate(userId,{profilePic:uploadResponse.secure_url},{new:true});

        return res.status(200).json(updatedUser);

    } catch (error) {
        return res.status(500).json({
            message:"Something went wrong.Please try again to upload profile pic.",
            error:error.message
        })
    }
}

export const check=async(req,res)=>{
    try {
        res.status(200).json(req.user);
    } catch (error) {
        return res.status(400).json({
            message:"Unauthorized access."
        })
    }
}

