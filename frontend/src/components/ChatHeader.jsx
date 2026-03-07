import placeholder from "../../public/user-circles-set_78370-4704.avif"
import { useAuth } from "../store/useAuth"

export const ChatHeader = ({user}) => {

  const {onlineUsers}=useAuth()
  
  
  return (
    <div className='h-16 shrink-0 sticky top-0 z-10 bg-white text-2xl'>

      <div className='flex h-full items-center'>
        {
          user.profilePic ? <img src={user.profilePic ? user.profilePic : placeholder} alt="placeholder image " width="60" height="40" className='rounded-full mx-4 my-1 cursor-pointer' /> :
          <p className='rounded-full mx-4 my-1 p-2 w-12 cursor-pointer bg-blue-200 text-center '>{user.fullname.charAt(0).toUpperCase()}</p>
        }
        <div>
            <h1 className='font-bold  mt-2'>{user.fullname} </h1>
            {
              onlineUsers.includes(user._id) ?
              <p className='text-sm text-green-500 '>Online</p> :
              <p className='text-sm text-gray-500 '>Offline</p>
            }
             
        </div>
      </div>
    </div>
  )
}


