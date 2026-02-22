import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import { toast } from "react-toastify";

export const useAuth=create((set)=>({
    authUser:null,
    isSigningUp:false,
    isLoggingIn:false,
    isUpdatingProfile:false,
    isCheckingAuth: false,
    isLoggingOut:false,


    checkAuth:async()=>{
        try {
            set({isCheckingAuth:true})
            const res=await axiosInstance.get('/auth/check');
            set({authUser:res.data});
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
       } catch (error) {
        console.log(error);
       

        toast.error("Invalid Credentials.")
        
       }finally{
        set({isLoggingIn:false})    
       }
    }


}))