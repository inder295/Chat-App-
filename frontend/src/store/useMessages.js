import { create } from "zustand";
import { axiosInstance } from "../lib/axios";

export const useMessage=create((set)=>({
    fetchingUsers:false,
    selectedUser:null,
    users:[],

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

    }

}))