import express from "express"
import { getUserForSidebar } from "../cantroller/message.canroller.js";

const messageRouter=express.Router();

messageRouter.get("/users",getUserForSidebar)



export default messageRouter;