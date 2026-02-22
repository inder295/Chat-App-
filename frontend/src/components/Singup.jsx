
import { Loader,UserKey } from 'lucide-react';
import signupImage from "../../public/diljit-signup-copnvert image.webp"
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { signupSchema } from '../lib/schema';
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from '../store/useAuth';

const Singup = () => {

  const {register,handleSubmit,formState:{errors}}=useForm({
    resolver:zodResolver(signupSchema)
  })

  const {isSigningUp,signup}=useAuth();

  const onSubmit=async (data)=>{
  console.log(data);
  
    await signup(data);
    
  }


  return (
    <>
       <div className='bg-gray-50 h-screen mb-10'>
           <div className='grid grid-cols-2 px-40'>
               <div className="mt-40 max-w-screen-xl bg-white shadow-2xl ">
                   <span className='flex justify-center items-center pt-3'>
                      <UserKey size={40}/>
                   </span>
                  <h2 className="text-3xl font-bold text-center pt-2">Create your Account</h2>
                  <p className='text-center text-gray-500 pt-2'>Get started with your free account.</p>

                  <form onSubmit={handleSubmit(onSubmit)} className='max-w-lg mx-auto mt-10 mb-10 text-gray-500 gap-4'>
                     <label htmlFor="FirstName" className='text-md mt-4'>Fullname</label>
                     <input type="text" {...register("fullname")} className='border text-sm rounded-md focus:ring-1 block  px-3 py-2.5 w-lg shadow-xs ' placeholder='john Doe' />
                     {errors.fullname && (
                        <p className='text-red-500 text-sm'>{errors.fullname.message}</p>
                     )}

                      <label htmlFor="Email" className='text-md mt-10'>Email</label>
                     <input type="text" {...register("email")} className='border text-sm rounded-md focus:ring-1 block  px-3 py-2.5 w-lg shadow-xs ' placeholder='john@example.com' />
                      {errors.email && (
                        <p className='text-red-500 text-sm'>{errors.email.message}</p>
                     )}

                      <label htmlFor="Password" className='text-md mt-4'>Password</label>
                     <input type="password" {...register("password")} className='border text-sm rounded-md focus:ring-1 block  px-3 py-2.5 w-lg shadow-xs ' placeholder='!@#$%%^^^&%%' />
                      {errors.password && (
                        <p className='text-red-500 text-sm'>{errors.password.message}</p>
                     )}

                     <button type='submit' disabled={isSigningUp} className='mt-4 bg-amber-200 w-full p-2  rounded-sm hover:bg-amber-400'>{isSigningUp ? <span className='flex justify-center  '>
                        <p className='px-2'>Signuping </p> <Loader className='animate-spin '/>
                     </span> : "Submit"}</button>

                     <p className='text-sm text-gray-400 text-center p-2 '>Already have an Account
                        <span className="px-1 hover:cursor-pointer hover:text-black  underline underline-offset-1">
                            <Link to="/signin">
                              Sign in
                            </Link>
                        </span>    
                     </p>
                  </form>
               </div>
               
               
               
               
               <div className="bg-amber-950 mt-40 w-full h-[600px] overflow-hidden rounded-2xl shadow-amber-800 ">
                  <img src={signupImage} alt="signup image" className='object-cover h-full w-full' />
               </div>
           </div>
          
        </div> 
    </>
  )
}

export default Singup
