import cloudinary from "../lib/cloudinary.js";
import Message from "../model/message.model.js";
import User from "../model/user.model.js";

export const getUserForSidebar=async(req,res)=>{
    try {
        const loggedInUserId=req.user._id;
        const filteredUsers= await User.find({_id:{$ne:loggedInUserId}}).select("-password");

        return res.status(200).json(filteredUsers);
    } catch (error) {

        return res.status(400).json({
            message:"Something went wrong."
        })
        
    }
}

export const getMessages=async(req,res)=>{
    try {
        const {id:userToChatId}=req.params;
        const myId=req.user._id;

        const messages=await Message.find({
            $or:[
                {senderId:myId ,receiverId:userToChatId},
                {senderId:userToChatId,receiverId:myId}
            ]
        })

        res.status(200).json(messages);
    } catch (error) {
        return res.status(400).json({
            message:"Error in fetching the messages.",
            error:error.message
        })
        
    }
}

export const sentMessage=async(req,res)=>{
    try {
        const {text,image}=req.body;
        const {id:receiverId}=req.params;
        const senderId=req.user._id;

        let imageUrl;

        if(image){
            const uploaderResponse=await cloudinary.uploader.upload(image);
            imageUrl=uploaderResponse.secure_url;
        }

        const newMessage=new Message({
            senderId,
            receiverId,
            text,
            image:imageUrl
        })

        await newMessage.save();

        //add realtime socket io to send message

        res.status(201).json(newMessage);


    } catch (error) {
        console.log("Error in send Messages",error.message);
        return res.status(400).json({
            message:"Error in sending message.",
            error:error.message
        })
        
    }
}