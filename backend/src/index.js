import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser"
import authRouter from "./route/auth.route.js";
import { db } from "./lib/db.js";
import messageRouter from "./route/message.route.js"

const app=express();

dotenv.config();

const PORT=process.env.PORT; 
app.use(express.json());
app.use(cookieParser());


app.use("/auth",authRouter);
app.use('/message',messageRouter)



app.listen(PORT,()=>{
    console.log("server is listening on port ",PORT);
    db();
})   