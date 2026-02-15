import dotenv from "dotenv"
import mongoose from "mongoose";

dotenv.config();


export const db=async ()=>{

    try {
        const conn=await mongoose.connect(process.env.MONGO_URI);
        console.log("Mongodb connected",conn.connection.host);    

    } catch (error) {
        console.log(error);
        
    }
}