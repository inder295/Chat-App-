import { UserKey } from 'lucide-react';
import signupImage from "../../public/diljit-signup-copnvert image.webp"
import { Link } from 'react-router-dom';

const Signin = () => {
  return (
   <>
       <div className='bg-gray-50 h-screen'>
           <div className='grid grid-cols-2 px-40'>
               <div className="mt-40 max-w-screen-xl bg-white shadow-2xl ">
                   <span className='flex justify-center items-center pt-3'>
                      <UserKey size={40}/>
                   </span>
                  <h2 className="text-3xl font-bold text-center pt-2">Create your Account</h2>
                  <p className='text-center text-gray-500 pt-2'>Get started with your free account.</p>

                  <form action="" className='max-w-lg mx-auto mt-10 mb-10 text-gray-500 gap-4'>
                     

                      <label htmlFor="Email" className='text-md mt-10'>Email</label>
                     <input type="email" className='border text-sm rounded-md focus:ring-1 block  px-3 py-2.5 w-lg shadow-xs ' placeholder='john@example.com' />

                      <label htmlFor="Password" className='text-md mt-4'>Password</label>
                     <input type="password" className='border text-sm rounded-md focus:ring-1 block  px-3 py-2.5 w-lg shadow-xs ' placeholder='!@#$%%^^^&%%' />

                     <button type='submit' className='mt-4 bg-amber-200 w-full p-2  rounded-sm hover:bg-amber-400'>Submit</button>

                     <p className='text-sm text-gray-400 text-center p-2 '>Not have an Account
                        <span className="px-1 hover:cursor-pointer hover:text-black  underline underline-offset-1">
                            <Link to="/signup">
                            Sign up
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

export default Signin
