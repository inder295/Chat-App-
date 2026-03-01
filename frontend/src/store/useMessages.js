import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import { toast } from "react-toastify";

export const useMessage=create((set,get)=>({
    fetchingUsers:false,
    selectedUser:null,
    users:[],
    messages:[],
    fetchingMessages:false,
    sendingMessage:false,

    setSelectedUser:((user)=>set({selectedUser:user})),

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

    }

}))