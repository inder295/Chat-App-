import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import { toast } from "react-toastify";
import {io} from "socket.io-client"

const  BASE_URL="http://localhost:3000"

export const useAuth=create((set,get)=>({
    authUser:null,
    isSigningUp:false,
    isLoggingIn:false,
    isUpdatingProfile:false,
    isCheckingAuth: false,
    isLoggingOut:false,
    socket:null,
    onlineUsers:[],


    checkAuth:async()=>{
        try {
            set({isCheckingAuth:true})
            const res=await axiosInstance.get('/auth/check');
            set({authUser:res.data});
            get().connectSocket();
        } catch (error) {
            console.log("Error in check auth: ", error.message);
            
            set({authUser:null})
        }finally{
            set({isCheckingAuth:false})
        }
    },

    signup:async(data)=>{
        try {
            set({isSigningUp:true});
            const res=await axiosInstance.post('/auth/signup',data,{
                withCredentials: true
            });
            set({authUser:res.data});
            toast.success(res.data.message)
            get().connectSocket();

        } catch (error) {

            set({authUser:null})
            toast.error(error.message);
            
            
        }finally{
            set({isSigningUp:false});

        }
    },

    logout:async()=>{
        try {
           set({isLoggingOut:true});
           const res=await axiosInstance.post('/auth/logout');
           set({authUser:null});
           toast.success(res.data.message);
           get().disconnectSocket(); 

        } catch (error) {
            console.log(error);
            toast.error(error.message)
            
        }finally{
           set({isLoggingOut:false});

        }
    },
    signin:async(data)=>{
       try {

        set({isLoggingIn:true})
        const res=await axiosInstance.post('/auth/signin',data,{
            withCredentials: true
        });
        set({authUser:res.data});
        toast.success(res.data.message);
        get().connectSocket();
       } catch (error) {
        console.log(error);
       

        toast.error("Invalid Credentials.")
        
       }finally{
        set({isLoggingIn:false})    
       }
    },

    connectSocket:()=>{

        const {authUser }=get();

        if(!authUser || get().socket?.connected ){
            return;
        }
       
        const socket=io(BASE_URL,{
            query:{
                userId:authUser._id
            }
        });
        socket.connect();
       

        socket.on("getOnlineUsers",(userIds)=>{
           set({onlineUsers:userIds})
        })

         set({socket:socket});


    },
    disconnectSocket:async()=>{
        if(get().socket?.connected){
            get().socket.disconnect();
        }
    }


}))