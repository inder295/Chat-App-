import { getReceiverSocketId } from "../index.js";
import cloudinary from "../lib/cloudinary.js";
import { io } from "../lib/socket.js";
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
        }).populate({
            path: 'replyTo',
            populate: {
                path: 'senderId',
                select: '_id fullname'
            }
        }).sort({ createdAt: 1 });

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
        const {text,image,replyTo}=req.body;
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
            image:imageUrl,
            replyTo:replyTo || null
        })

        await newMessage.save();

        const populatedMessage = await Message.findById(newMessage._id)
            .populate({
            path: 'replyTo',
            populate: {
                path: 'senderId',
                select: '_id fullname'
            }
        });

        const receiverSocketId=getReceiverSocketId(receiverId);
        
        if(receiverSocketId){
         io.to(receiverSocketId).emit("newMessage", populatedMessage);
        }

        
        res.status(201).json(populatedMessage);


    } catch (error) {
        console.log("Error in send Messages",error.message);
        return res.status(400).json({
            message:"Error in sending message.",
            error:error.message
        })
        
    }
}
