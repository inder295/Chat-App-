import {MessageCircle} from "lucide-react"
import { Settings } from 'lucide-react';
import { GoSignOut } from "react-icons/go";
import { User } from 'lucide-react';
import { Home } from 'lucide-react';
import { Link } from 'react-router-dom';
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
                <div className="flex gap-4 items-center">
                    <Link to="/" className="flex gap-1 cursor-pointer hover:text-green-600 transition-colors">
                        <span> <Home className="text-2xl"/> </span>
                        <span className="text-lg"> Home </span>
                    </Link>
                    <Link to="/profile" className="flex gap-1 cursor-pointer hover:text-blue-600 transition-colors">
                        <span> <User className="text-2xl"/> </span>
                        <span className="text-lg"> Profile </span>
                    </Link>
                    <label className="flex gap-1 cursor-pointer hover:text-red-600 transition-colors" onClick={handleLogout}>
                        <span> <GoSignOut className="text-2xl"/> </span>
                        <span className="text-lg"> Logout </span>
                    </label>
                </div>
           }
            
        </div>
       
    </div>
  )
}

export default Navbar;

