import express from "express";
import { signup ,signin,logout, updateProfile, check} from "../cantroller/auth.cantroller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const authRouter=express.Router();

authRouter.post('/signup',signup)
authRouter.post('/signin',signin)
authRouter.post('/logout',protectRoute,logout)
authRouter.put('/update-profile-pic',protectRoute,updateProfile);
authRouter.get('/check',protectRoute,check);

export default authRouter;