import {MessageCircle} from "lucide-react"
import { Settings } from 'lucide-react';
import { GoSignOut } from "react-icons/go";
import { useAuth } from "../store/useAuth";


const Navbar = () => {

    const {logout,authUser}=useAuth();

    async function handleLogout(){
        await logout();
    }
  return (
    <div className="h-4 w-full top-0 left-0 font-serif shadow-2xl sticky mb-10 z-100">

        <div className=" bg-gray-50  p-3 flex justify-between px-20 shadow-lg  ">
            <label className="flex gap-2 cursor-pointer">
                 <span><MessageCircle /></span>
                 <span className="text-lg font-bold">Chat</span>
                
            </label>
          
          {
            authUser &&
                <label className="flex gap-1  cursor-pointer" onClick={handleLogout}>
                    <span> <GoSignOut className="text-2xl"/> </span>
                    <span className="text-lg"> Logout </span>
                </label>
           }
            
        </div>
       
    </div>
  )
}

export default Navbar;

