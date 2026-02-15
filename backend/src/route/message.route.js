import express from "express"
import { getUserForSidebar,getMessages, sentMessage } from "../cantroller/message.canroller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const messageRouter=express.Router();

messageRouter.get("/users",protectRoute,getUserForSidebar);
messageRouter.get('/:id',protectRoute,getMessages)
messageRouter.post("/send/:id",protectRoute,sentMessage)

export default messageRouter;