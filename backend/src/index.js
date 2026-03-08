import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser"
import authRouter from "./route/auth.route.js";
import { db } from "./lib/db.js";
import messageRouter from "./route/message.route.js"
import cors from "cors"
import { app,io,server } from "./lib/socket.js";
import path from "path"


dotenv.config();

const __dirname=path.resolve();

const PORT=process.env.PORT; 
app.use(express.json({limit:"10mb"}));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));
app.use(cookieParser());
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))


app.use("/api/auth",authRouter);
app.use('/api/message',messageRouter);

if(process.env.NODE_ENV==="production"){
    app.use(express.static(path.join(__dirname,"../frontend/dist")))

    app.get("/{*splat}",(req,res)=>{
        res.sendFile(path.join(__dirname,"../frontend","dist","index.html"))
    })
}

export function getReceiverSocketId(userId){
    return onlineUsers[userId];
}

const onlineUsers={};

io.on('connection',(socket)=>{
    console.log("A user is connected ",socket.id);

    const userId=socket.handshake.query.userId;

    if(userId){
        onlineUsers[userId]=socket.id;
        io.emit("getOnlineUsers",Object.keys(onlineUsers));
    } 

    socket.on("disconnect",()=>{
        console.log("A user is disconnected ",socket.id);
        if(userId){
            delete onlineUsers[userId];
            io.emit("getOnlineUsers",Object.keys(onlineUsers));
        }
    })
})


server.listen(PORT,()=>{
    console.log("server is listening on port ",PORT);
    db();
})   