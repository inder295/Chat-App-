import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser"
import authRouter from "./route/auth.route.js";
import { db } from "./lib/db.js";
import messageRouter from "./route/message.route.js"
import cors from "cors"
import { app,io,server } from "./lib/socket.js";


dotenv.config();

const PORT=process.env.PORT; 
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))


app.use("/api/auth",authRouter);
app.use('/api/message',messageRouter);

io.on('connection',(socket)=>{
    console.log("A user is connected ",socket.id);

    socket.on("disconnect",()=>{
        console.log("A user is disconnected ",socket.id);
        
    })
    
})


server.listen(PORT,()=>{
    console.log("server is listening on port ",PORT);
    db();
})   