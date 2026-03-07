import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import { toast } from "react-toastify";
import { useAuth } from "./useAuth";

export const useMessage=create((set,get)=>({
    fetchingUsers:false,
    selectedUser:null,
    users:[],
    messages:[],
    fetchingMessages:false,
    sendingMessage:false,
    search:"",


    setSelectedUser:((user)=>set({selectedUser:user})),

    setSearchUser:((search)=>set({search:search})),

    getUsersData:async()=>{
        try {
            set({fetchingUsers:true});
            const res=await axiosInstance.get('/message/users');
            set({users:res.data}); 
          
            
        } catch (error) {
            console.log(error);
            
        }finally{
            set({fetchingUsers:false})
        }

    },
    getMessages:async(id)=>{
        try {
          set({fetchingMessages:true});
          const res=await axiosInstance.get(`message/${id}`);
          set({messages:res.data});
        } catch (error) {
            toast.error(error.message);
            console.log(error);
            
        }finally{
          set({fetchingMessages:false})  
           
        }
    },
    sentMessage:async(id,formData)=>{
        try {
           set({sendingMessage:true})
           const res=await axiosInstance.post(`/message/send/${id}`,formData);
           set({messages:[...get().messages,res.data]}) 
        } catch (error) {
            toast.error(error.message)
            console.log(error);
            
        }finally{
           set({sendingMessage:false}) 
           
        }

    },
    subscribeToMessages:async ()=>{
      
        const {selectedUser}=get();
        if(!selectedUser){
            return;
        }

        const socket=useAuth.getState().socket;

        socket.on("newMessage",(newMessage)=>{
            set({
                messages:[...get().messages,newMessage]
            })
        })
    },

    unSubscribeToMessages: ()=>{
        const socket=useAuth.getState().socket;
        socket.off("newMessage");
    }

}))