import message from "../model/message.model.js";
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