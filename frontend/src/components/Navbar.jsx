import {MessageCircle} from "lucide-react"
import { Settings } from 'lucide-react';

const Navbar = () => {
  return (
    <div className="h-4 fixed w-full font-serif ">

        <div className=" bg-amber-100  p-3 flex justify-between px-20  ">
            <label className="flex gap-2 cursor-pointer">
                 <span><MessageCircle /></span>
                 <span className="text-lg font-bold">Chat</span>
                
            </label>
            <label className="flex gap-1  cursor-pointer">
                <span> <Settings/> </span>
                <span className="text-lg"> Settings </span>
            </label>
        </div>
       
    </div>
  )
}

export default Navbar;

